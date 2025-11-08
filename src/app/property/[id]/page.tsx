import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import { PageLayout } from "@/components/ui/page-layout";
import { generateGraphQLMetadata } from "@/lib/generateMetadata";
import { GET_PROPERTY_METADATA } from "@/graphql/queries/properties";
import { getClient } from "@/lib/apollo-client";
import type { GetPropertyQuery } from "@/generated/graphql";
import { GET_PROPERTY } from "@/graphql/queries/properties";
import {
  Box,
  Container,
  Card,
  Heading,
  Text,
  Grid,
  Flex,
} from "@radix-ui/themes";

type PropertyMetadata = {
  title: string;
  price: number;
  location: string;
  imageUrl: string;
};

type PropertyMetadataResponse = {
  property: PropertyMetadata;
};

const formatPropertyDescription = (property: PropertyMetadata) => {
  const formattedPrice = property.price.toLocaleString("sv-SE");
  return `${property.title} in ${property.location}. Price: ${formattedPrice} SEK`;
};

const PROPERTY_NOT_FOUND_FALLBACK = {
  title: "Property Not Found",
  description: "The requested property could not be found",
} as const;

interface PropertyPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: PropertyPageProps): Promise<Metadata> {
  const { id } = await params;

  return generateGraphQLMetadata<PropertyMetadataResponse>({
    query: GET_PROPERTY_METADATA,
    variables: { id },
    transform: (data) => ({
      title: data.property.title,
      description: formatPropertyDescription(data.property),
      imageUrl: data.property.imageUrl,
    }),
    fallback: PROPERTY_NOT_FOUND_FALLBACK,
  });
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { id } = await params;
  const client = getClient();
  const { data } = await client.query<GetPropertyQuery>({
    query: GET_PROPERTY,
    variables: { id },
  });

  const property = data?.property;

  return (
    <PageLayout
      skipLinks={[
        { label: "Skip to gallery", href: "#gallery" },
        { label: "Skip to details", href: "#details" },
        { label: "Skip to description", href: "#description" },
      ]}
    >
      <Box style={{ minHeight: "100vh", background: "var(--gray-1)" }}>
        <Container size="3" py="8">
          <Box mb="6">
            <ButtonLink
              href="/"
              variant="soft"
              size="2"
              aria-label="Navigate back to property listings"
            >
              ← Back to listings
            </ButtonLink>
          </Box>

          <Heading as="h1" size="9" mb="4" data-testid="property-details-title">
            {property?.title || "Property Details"}
          </Heading>

          <Box mb="6" id="gallery">
            <Image
              src={property?.imageUrl || ""}
              alt={`Photo of ${property?.title} in ${property?.location}`}
              ratio={16 / 9}
              style={{ borderRadius: "var(--radius-3)" }}
            />
          </Box>

          <Box mb="4" data-testid="property-details-price">
            <Text size="8" weight="bold">
              {property?.price.toLocaleString("sv-SE")} SEK
            </Text>
          </Box>

          <Card mb="6" id="details">
            <Heading as="h2" size="6" mb="4">
              Facts
            </Heading>
            <Grid columns="2" gap="4">
              <Flex gap="2" data-testid="property-details-rooms">
                <Text color="gray">Rooms</Text>
                <Text weight="bold" data-testid="property-details-rooms-value">
                  {property?.rooms}
                </Text>
              </Flex>
              <Flex gap="2" data-testid="property-details-area">
                <Text color="gray">Area</Text>
                <Text weight="bold" data-testid="property-details-area-value">
                  {property?.area} m²
                </Text>
              </Flex>
              <Flex gap="2" data-testid="property-details-type">
                <Text color="gray">Type</Text>
                <Text
                  weight="bold"
                  style={{ textTransform: "capitalize" }}
                  data-testid="property-details-type-value"
                >
                  {property?.type}
                </Text>
              </Flex>
              <Flex gap="2" data-testid="property-details-location">
                <Text color="gray">Location</Text>
                <Text
                  weight="bold"
                  data-testid="property-details-location-value"
                >
                  {property?.location}
                </Text>
              </Flex>
            </Grid>
          </Card>

          <Card id="description">
            <Heading as="h2" size="6" mb="4">
              Description
            </Heading>
            <Text>{property?.description}</Text>
          </Card>
        </Container>
      </Box>
    </PageLayout>
  );
}
