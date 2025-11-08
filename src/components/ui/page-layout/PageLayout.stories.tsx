import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PageLayout } from "./PageLayout";
import { Box, Text, Heading } from "@radix-ui/themes";

const meta: Meta<typeof PageLayout> = {
  component: PageLayout,
  title: "UI/PageLayout",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PageLayout>;

export const Default: Story = {
  args: {
    skipLinks: [
      { label: "Skip to main content", href: "#main-content" },
      { label: "Skip to footer", href: "#footer" },
    ],
    children: (
      <Box p="8">
        <Heading size="8" mb="4">
          Main Content
        </Heading>
        <Text>
          This is the main content area. The page layout includes a header,
          footer, and skip navigation links for accessibility.
        </Text>
      </Box>
    ),
  },
};

export const WithMultipleSkipLinks: Story = {
  args: {
    skipLinks: [
      { label: "Skip to gallery", href: "#gallery" },
      { label: "Skip to details", href: "#details" },
      { label: "Skip to description", href: "#description" },
      { label: "Skip to footer", href: "#footer" },
    ],
    children: (
      <Box p="8">
        <Box id="gallery" mb="6">
          <Heading size="6" mb="2">
            Gallery
          </Heading>
          <Text>Gallery content goes here...</Text>
        </Box>
        <Box id="details" mb="6">
          <Heading size="6" mb="2">
            Details
          </Heading>
          <Text>Details content goes here...</Text>
        </Box>
        <Box id="description" mb="6">
          <Heading size="6" mb="2">
            Description
          </Heading>
          <Text>Description content goes here...</Text>
        </Box>
      </Box>
    ),
  },
};

export const LongContent: Story = {
  args: {
    skipLinks: [{ label: "Skip to main content", href: "#main-content" }],
    children: (
      <Box p="8">
        <Heading size="8" mb="4">
          Long Content Example
        </Heading>
        {Array.from({ length: 10 }).map((_, i) => (
          <Text key={i} mb="4" as="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        ))}
      </Box>
    ),
  },
};
