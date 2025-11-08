import { Container, Heading, Text, Flex, Section, Box } from "@radix-ui/themes";
import { PageLayout } from "@/components/ui/page-layout";

export default function AboutPage() {
  return (
    <PageLayout
      skipLinks={[
        { label: "Skip to about content", href: "#about-content" },
      ]}
    >
      <Box style={{ minHeight: "100vh", background: "var(--gray-1)" }}>
        <Container size="3" id="about-content">
          <Section size="3">
            <Flex direction="column" gap="4">
              <Heading size="8">About Us</Heading>
              <Text size="4" color="gray">
                Welcome to House Net, your trusted partner in finding the perfect home.
              </Text>
              <Text>
                House Net is a leading real estate platform dedicated to helping you
                discover your dream property. With years of experience in the market,
                we provide comprehensive listings and expert guidance throughout your
                home-buying journey.
              </Text>
              <Text>
                Our mission is to make the process of finding and securing a home as
                seamless and enjoyable as possible. We believe everyone deserves a
                place they can call home, and we're here to help make that a reality.
              </Text>
            </Flex>
          </Section>
        </Container>
      </Box>
    </PageLayout>
  );
}
