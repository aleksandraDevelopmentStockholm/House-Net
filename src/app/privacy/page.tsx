import { Container, Heading, Text, Flex, Section, Box } from "@radix-ui/themes";
import { PageLayout } from "@/components/ui/page-layout";

export default function PrivacyPage() {
  return (
    <PageLayout
      skipLinks={[
        { label: "Skip to privacy policy", href: "#privacy-content" },
      ]}
    >
      <Box style={{ minHeight: "100vh", background: "var(--gray-1)" }}>
        <Container size="3" id="privacy-content">
          <Section size="3">
            <Flex direction="column" gap="4">
              <Heading size="8">Privacy Policy</Heading>
              <Text size="3" color="gray">
                Last updated: {new Date().toLocaleDateString()}
              </Text>

              <Box mt="4">
                <Flex direction="column" gap="4">
                  <Box>
                    <Heading size="4" mb="2">Introduction</Heading>
                    <Text>
                      House Net ("we", "our", or "us") is committed to protecting your
                      privacy. This Privacy Policy explains how we collect, use, and
                      safeguard your personal information when you use our website.
                    </Text>
                  </Box>

                  <Box>
                    <Heading size="4" mb="2">Information We Collect</Heading>
                    <Text>
                      We collect information that you provide directly to us, including
                      but not limited to your name, email address, phone number, and
                      property preferences. We also collect information automatically
                      through your use of our website, such as your IP address, browser
                      type, and browsing behavior.
                    </Text>
                  </Box>

                  <Box>
                    <Heading size="4" mb="2">How We Use Your Information</Heading>
                    <Text>
                      We use your information to provide and improve our services, send
                      you property listings that match your preferences, respond to your
                      inquiries, and comply with legal obligations.
                    </Text>
                  </Box>

                  <Box>
                    <Heading size="4" mb="2">Data Security</Heading>
                    <Text>
                      We implement appropriate technical and organizational measures to
                      protect your personal information against unauthorized access,
                      alteration, disclosure, or destruction.
                    </Text>
                  </Box>

                  <Box>
                    <Heading size="4" mb="2">Your Rights</Heading>
                    <Text>
                      You have the right to access, correct, or delete your personal
                      information. You may also object to or restrict certain processing
                      of your data. To exercise these rights, please contact us at
                      privacy@housenet.com.
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Section>
        </Container>
      </Box>
    </PageLayout>
  );
}
