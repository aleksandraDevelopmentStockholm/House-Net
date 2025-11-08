"use client";

import { useEffect } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Card,
  Button,
  Flex,
} from "@radix-ui/themes";
import { PageLayout } from "@/components/ui/page-layout";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Error boundary caught:", error);
  }, [error]);

  return (
    <PageLayout
      skipLinks={[{ label: "Skip to error message", href: "#error-content" }]}
    >
      <Box style={{ minHeight: "100vh", background: "var(--gray-1)" }}>
        <Container size="3" py="8">
          <Card id="error-content">
            <Flex direction="column" gap="4" align="center" py="6">
              <Heading as="h1" size="8" color="red">
                Something went wrong!
              </Heading>

              <Text size="5" color="gray" align="center">
                We encountered an error while loading the property listings.
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
                <Button
                  size="3"
                  onClick={reset}
                  aria-label="Try again to load property listings"
                >
                  Try again
                </Button>
                <Button
                  size="3"
                  variant="soft"
                  onClick={() => (window.location.href = "/")}
                  aria-label="Go back to home page"
                >
                  Go to home
                </Button>
              </Flex>
            </Flex>
          </Card>
        </Container>
      </Box>
    </PageLayout>
  );
}
