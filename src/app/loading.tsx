import { Box, Container, Heading, Grid, Card, Skeleton } from "@radix-ui/themes";
import { PageLayout } from "@/components/ui/page-layout";

export default function Loading() {
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

            {/* Filters skeleton */}
            <Card mb="4">
              <Grid columns={{ initial: "1", sm: "2", md: "4" }} gap="3">
                <Box>
                  <Skeleton height="40px" />
                </Box>
                <Box>
                  <Skeleton height="40px" />
                </Box>
                <Box>
                  <Skeleton height="40px" />
                </Box>
                <Box>
                  <Skeleton height="40px" />
                </Box>
              </Grid>
            </Card>

            {/* Property cards skeleton */}
            <Grid
              id="results-skeleton"
              columns={{ initial: "1", md: "2", lg: "3" }}
              gap="3"
              width="auto"
            >
              {[...Array(6)].map((_, i) => (
                <Card key={i}>
                  <Skeleton height="200px" mb="3" />
                  <Skeleton height="24px" mb="2" />
                  <Skeleton height="20px" mb="2" width="60%" />
                  <Skeleton height="20px" width="40%" />
                </Card>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>
    </PageLayout>
  );
}
