import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SkipNavigation } from "./SkipNavigation";
import { Box, Heading, Text } from "@radix-ui/themes";

const meta: Meta<typeof SkipNavigation> = {
  component: SkipNavigation,
  title: "UI/SkipNavigation",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Accessibility component that provides keyboard users with quick navigation to key areas of the page. Press Tab to focus on skip links.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SkipNavigation>;

export const Default: Story = {
  args: {
    links: [
      { label: "Skip to main content", href: "#main-content" },
      { label: "Skip to footer", href: "#footer" },
    ],
  },
  render: (args) => (
    <Box>
      <SkipNavigation {...args} />
      <Box p="8">
        <Text mb="4">
          <strong>How to use:</strong> Press Tab to see the skip links appear.
          They are visually hidden but become visible when focused.
        </Text>
      </Box>
      <Box id="main-content" p="8" style={{ background: "var(--gray-3)" }}>
        <Heading size="6" mb="2">
          Main Content
        </Heading>
        <Text>This is the main content section.</Text>
      </Box>
      <Box id="footer" p="8" style={{ background: "var(--gray-4)" }}>
        <Heading size="6" mb="2">
          Footer
        </Heading>
        <Text>This is the footer section.</Text>
      </Box>
    </Box>
  ),
};

export const MultipleLinks: Story = {
  args: {
    links: [
      { label: "Skip to gallery", href: "#gallery" },
      { label: "Skip to details", href: "#details" },
      { label: "Skip to description", href: "#description" },
      { label: "Skip to contact", href: "#contact" },
    ],
  },
  render: (args) => (
    <Box>
      <SkipNavigation {...args} />
      <Box p="8">
        <Text mb="4">
          <strong>Multiple skip links example:</strong> Press Tab repeatedly to
          cycle through all skip navigation options.
        </Text>
      </Box>
      <Box id="gallery" p="8" mb="4" style={{ background: "var(--gray-3)" }}>
        <Heading size="6" mb="2">
          Gallery
        </Heading>
        <Text>Gallery section content.</Text>
      </Box>
      <Box id="details" p="8" mb="4" style={{ background: "var(--gray-4)" }}>
        <Heading size="6" mb="2">
          Details
        </Heading>
        <Text>Details section content.</Text>
      </Box>
      <Box
        id="description"
        p="8"
        mb="4"
        style={{ background: "var(--gray-3)" }}
      >
        <Heading size="6" mb="2">
          Description
        </Heading>
        <Text>Description section content.</Text>
      </Box>
      <Box id="contact" p="8" style={{ background: "var(--gray-4)" }}>
        <Heading size="6" mb="2">
          Contact
        </Heading>
        <Text>Contact section content.</Text>
      </Box>
    </Box>
  ),
};

export const SingleLink: Story = {
  args: {
    links: [{ label: "Skip to main content", href: "#main-content" }],
  },
  render: (args) => (
    <Box>
      <SkipNavigation {...args} />
      <Box p="8">
        <Text mb="4">
          <strong>Single skip link example:</strong> Most common use case with
          one skip link.
        </Text>
      </Box>
      <Box id="main-content" p="8" style={{ background: "var(--gray-3)" }}>
        <Heading size="6" mb="2">
          Main Content
        </Heading>
        <Text>This is the main content section.</Text>
      </Box>
    </Box>
  ),
};
