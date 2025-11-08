import { Box, Container, Card, Skeleton, Grid, Flex } from "@radix-ui/themes";
import { PageLayout } from "@/components/ui/page-layout";

export default function Loading() {
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
          {/* Back button skeleton */}
          <Box mb="6">
            <Skeleton height="32px" width="150px" />
          </Box>
          {/* Title skeleton */}
          <Skeleton height="48px" width="70%" mb="4" />

          {/* Image skeleton */}
          <Box mb="6" id="gallery">
            <Skeleton
              height="400px"
              style={{ borderRadius: "var(--radius-3)" }}
            />
          </Box>

          {/* Price skeleton */}
          <Box mb="4">
            <Skeleton height="40px" width="200px" />
          </Box>

          {/* Facts card skeleton */}
          <Card mb="6" id="details">
            <Skeleton height="32px" width="80px" mb="4" />
            <Grid columns="2" gap="4">
              {[...Array(4)].map((_, i) => (
                <Flex key={i} gap="2">
                  <Skeleton height="20px" width="60px" />
                  <Skeleton height="20px" width="80px" />
                </Flex>
              ))}
            </Grid>
          </Card>

          {/* Description card skeleton */}
          <Card id="description">
            <Skeleton height="32px" width="120px" mb="4" />
            <Skeleton height="20px" mb="2" />
            <Skeleton height="20px" mb="2" />
            <Skeleton height="20px" width="80%" />
          </Card>
        </Container>
      </Box>
    </PageLayout>
  );
}
