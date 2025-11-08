"use client";

import { useEffect } from "react";
import { Box, Container, Heading, Text, Card, Flex } from "@radix-ui/themes";
import { PageLayout } from "@/components/ui/page-layout";
import { ButtonLink } from "@/components/ui/button";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Property page error:", error);
  }, [error]);

  return (
    <PageLayout
      skipLinks={[{ label: "Skip to error message", href: "#error-content" }]}
    >
      <Box style={{ minHeight: "100vh", background: "var(--gray-1)" }}>
        <Container size="3" py="8">
          {/* Back button */}
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

          <Card id="error-content">
            <Flex direction="column" gap="4" align="center" py="6">
              <Heading as="h1" size="8" color="red">
                Property Not Found
              </Heading>

              <Text size="5" color="gray" align="center">
                We couldn't load this property. It may have been removed or the
                link might be incorrect.
              </Text>

              {error.message && (
                <Card variant="surface" style={{ maxWidth: "600px" }}>
                  <Text size="2" color="gray">
                    <strong>Error details:</strong> {error.message}
                  </Text>
                  {error.digest && (
                    <Text size="1" color="gray" mt="2">
                      Error ID: {error.digest}
                    </Text>
                  )}
                </Card>
              )}

              <Flex gap="3" mt="4">
                <ButtonLink
                  size="3"
                  href="/"
                  aria-label="Return to property listings"
                >
                  View all properties
                </ButtonLink>
              </Flex>
            </Flex>
          </Card>
        </Container>
      </Box>
    </PageLayout>
  );
}
