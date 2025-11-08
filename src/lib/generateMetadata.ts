import type { Metadata } from "next";
import type { DocumentNode } from "@apollo/client";

type MetadataContent = {
  title: string;
  description?: string;
  imageUrl?: string;
};

type FallbackMetadata = {
  title: string;
  description?: string;
};

interface GenerateMetadataOptions<TData = unknown> {
  query: string | DocumentNode;
  variables?: Record<string, unknown>;
  transform: (data: TData) => MetadataContent;
  fallback?: FallbackMetadata;
}

const API_URL =
  process.env.NEXT_PUBLIC_GRAPHQL_URL || "http://localhost:3000/api/graphql";

export async function generateGraphQLMetadata<TData = unknown>(
  options: GenerateMetadataOptions<TData>
): Promise<Metadata> {
  const { query, variables, transform, fallback } = options;

  // Convert DocumentNode to string if needed
  const queryString = typeof query === "string"
    ? query
    : query.loc?.source.body || "";

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: queryString,
        variables,
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch metadata");
    }

    const { data, errors } = await response.json();

    if (errors || !data) {
      throw new Error("GraphQL errors");
    }

    const { title, description, imageUrl } = transform(data);

    return {
      title: `${title} - House Net`,
      description,
      ...(imageUrl && {
        openGraph: {
          title,
          description,
          images: [imageUrl],
        },
      }),
    };
  } catch (error) {
    console.error("Error generating metadata:", error);

    return {
      title: fallback?.title || "House Net",
      description: fallback?.description,
    };
  }
}
