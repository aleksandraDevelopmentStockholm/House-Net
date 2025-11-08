import { PropertyList } from "@/components/property-list";
import { PageLayout } from "@/components/ui/page-layout";
import { Box, Container, Heading } from "@radix-ui/themes";
import { getClient } from "@/lib/apollo-client";
import { GET_PROPERTIES } from "@/graphql/queries/properties";
import type { GetPropertiesQuery } from "@/generated/graphql";

export const metadata = {
  title: "Property Listings - House Net",
  description: "Browse available properties for sale",
};

export default async function Home() {
  const client = getClient();
  const { data } = await client.query<GetPropertiesQuery>({
    query: GET_PROPERTIES,
    variables: { filter: {} },
  });

  return (
    <PageLayout
      skipLinks={[
        { label: "Skip to search", href: "#search" },
        { label: "Skip to results", href: "#results" },
      ]}
    >
      <Box style={{ minHeight: "100vh", background: "var(--gray-1)" }}>
        <Box py="6">
          <Container size="4">
            <Box mb="4">
              <Heading as="h1" size="8">
                Property Listings
              </Heading>
            </Box>
            <PropertyList initialData={data?.properties || []} />
          </Container>
        </Box>
      </Box>
    </PageLayout>
  );
}
