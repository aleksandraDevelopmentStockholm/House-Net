"use client";

import { Box, Container, Flex, Text } from "@radix-ui/themes";
import { Link } from "@/components/ui/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { HomeIcon } from "@radix-ui/react-icons";

export function Header() {
  return (
    <Box
      asChild
      style={{
        borderBottom: "1px solid var(--gray-6)",
        backgroundColor: "var(--color-background)",
      }}
    >
      <header>
        <Container size="4">
          <Flex py="4" align="center" justify="between" gap="3">
            <Link
              href="/"
              underline="none"
              aria-label="Home - Property Listings"
            >
              <Flex align="center" gap="2">
                <HomeIcon
                  width="24"
                  height="24"
                  style={{ color: "var(--accent-9)" }}
                  aria-hidden="true"
                />
                <Text
                  size="5"
                  weight="bold"
                  style={{ color: "var(--accent-9)" }}
                >
                  House Net
                </Text>
              </Flex>
            </Link>
            <ThemeToggle />
          </Flex>
        </Container>
      </header>
    </Box>
  );
}
