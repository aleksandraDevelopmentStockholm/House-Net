import { Container, Heading, Text, Flex, Section, Box } from "@radix-ui/themes";
import { PageLayout } from "@/components/ui/page-layout";

export default function ContactPage() {
  return (
    <PageLayout
      skipLinks={[
        { label: "Skip to contact information", href: "#contact-content" },
      ]}
    >
      <Box style={{ minHeight: "100vh", background: "var(--gray-1)" }}>
        <Container size="3" id="contact-content">
          <Section size="3">
            <Flex direction="column" gap="4">
              <Heading size="8">Contact Us</Heading>
              <Text size="4" color="gray">
                Get in touch with our team
              </Text>

              <Box mt="4">
                <Flex direction="column" gap="3">
                  <Box>
                    <Text weight="bold">Email</Text>
                    <Text color="gray">contact@housenet.com</Text>
                  </Box>

                  <Box>
                    <Text weight="bold">Phone</Text>
                    <Text color="gray">+1 (555) 123-4567</Text>
                  </Box>

                  <Box>
                    <Text weight="bold">Address</Text>
                    <Text color="gray">
                      123 Real Estate Avenue
                      <br />
                      Suite 100
                      <br />
                      New York, NY 10001
                    </Text>
                  </Box>

                  <Box>
                    <Text weight="bold">Business Hours</Text>
                    <Text color="gray">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
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
