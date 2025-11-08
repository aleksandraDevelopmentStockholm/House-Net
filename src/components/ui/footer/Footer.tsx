import { Box, Container, Flex, Text } from "@radix-ui/themes";
import { Link } from "@/components/ui/link";

export function Footer() {
  return (
    <Box
      asChild
      style={{
        borderTop: "1px solid var(--gray-6)",
        backgroundColor: "var(--color-background)",
      }}
    >
      <footer>
        <Container size="4">
          <Flex py="6" direction="column" gap="4">
            <Flex justify="between" align="start" wrap="wrap" gap="6">
              <Flex direction="column" gap="2">
                <Text size="2" weight="bold" color="gray">
                  House Net
                </Text>
                <Text size="2" color="gray">
                  Find your perfect home
                </Text>
              </Flex>

              <Flex direction="column" gap="2">
                <Text size="2" weight="bold" color="gray">
                  About
                </Text>
                <Link href="/contact" size="2" color="gray">
                  Contact
                </Link>
              </Flex>

              <Flex direction="column" gap="2">
                <Text size="2" weight="bold" color="gray">
                  Legal
                </Text>
                <Link href="/privacy" size="2" color="gray">
                  Privacy Policy
                </Link>
                <Link href="/terms" size="2" color="gray">
                  Terms of Service
                </Link>
              </Flex>
            </Flex>

            <Box
              style={{
                borderTop: "1px solid var(--gray-6)",
                paddingTop: "var(--space-4)",
              }}
            >
              <Text size="1" color="gray">
                © {new Date().getFullYear()} House Net. All rights reserved.
              </Text>
            </Box>
          </Flex>
        </Container>
      </footer>
    </Box>
  );
}
