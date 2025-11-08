import { Container, Heading, Text, Flex, Section, Box } from "@radix-ui/themes";
import { PageLayout } from "@/components/ui/page-layout";

export default function TermsPage() {
  return (
    <PageLayout
      skipLinks={[
        { label: "Skip to terms of service", href: "#terms-content" },
      ]}
    >
      <Box style={{ minHeight: "100vh", background: "var(--gray-1)" }}>
        <Container size="3" id="terms-content">
          <Section size="3">
            <Flex direction="column" gap="4">
              <Heading size="8">Terms of Service</Heading>
              <Text size="3" color="gray">
                Last updated: {new Date().toLocaleDateString()}
              </Text>

              <Box mt="4">
                <Flex direction="column" gap="4">
                  <Box>
                    <Heading size="4" mb="2">Acceptance of Terms</Heading>
                    <Text>
                      By accessing and using House Net's website and services, you
                      accept and agree to be bound by these Terms of Service. If you do
                      not agree to these terms, please do not use our services.
                    </Text>
                  </Box>

                  <Box>
                    <Heading size="4" mb="2">Use of Services</Heading>
                    <Text>
                      Our services are provided for your personal, non-commercial use.
                      You agree to use our website only for lawful purposes and in a way
                      that does not infringe the rights of others or restrict their use
                      and enjoyment of the website.
                    </Text>
                  </Box>

                  <Box>
                    <Heading size="4" mb="2">Property Listings</Heading>
                    <Text>
                      While we strive to ensure the accuracy of property listings, we
                      cannot guarantee that all information is complete, accurate, or
                      up-to-date. Property details are subject to change without notice.
                      We recommend verifying all information directly with the property
                      owner or listing agent.
                    </Text>
                  </Box>

                  <Box>
                    <Heading size="4" mb="2">User Accounts</Heading>
                    <Text>
                      If you create an account with us, you are responsible for
                      maintaining the confidentiality of your account credentials and for
                      all activities that occur under your account. You agree to notify
                      us immediately of any unauthorized use of your account.
                    </Text>
                  </Box>

                  <Box>
                    <Heading size="4" mb="2">Limitation of Liability</Heading>
                    <Text>
                      House Net shall not be liable for any indirect, incidental,
                      special, consequential, or punitive damages resulting from your use
                      of or inability to use our services, even if we have been advised
                      of the possibility of such damages.
                    </Text>
                  </Box>

                  <Box>
                    <Heading size="4" mb="2">Changes to Terms</Heading>
                    <Text>
                      We reserve the right to modify these Terms of Service at any time.
                      Changes will be effective immediately upon posting to our website.
                      Your continued use of our services after changes are posted
                      constitutes acceptance of the modified terms.
                    </Text>
                  </Box>

                  <Box>
                    <Heading size="4" mb="2">Contact</Heading>
                    <Text>
                      If you have any questions about these Terms of Service, please
                      contact us at legal@housenet.com.
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
