import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ThemeToggle } from "./ThemeToggle";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Box, Flex, Text } from "@radix-ui/themes";

const meta: Meta<typeof ThemeToggle> = {
  component: ThemeToggle,
  title: "UI/ThemeToggle",
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ThemeToggle>;

export const Default: Story = {};

export const WithContext: Story = {
  render: () => (
    <Flex direction="column" gap="4" align="center">
      <Text>Click the button to toggle between light and dark mode</Text>
      <ThemeToggle />
      <Box
        p="4"
        style={{
          backgroundColor: "var(--gray-3)",
          borderRadius: "var(--radius-3)",
        }}
      >
        <Text>This box will change colors based on the theme</Text>
      </Box>
    </Flex>
  ),
};

export const InHeader: Story = {
  render: () => (
    <Box
      style={{
        width: "100%",
        borderBottom: "1px solid var(--gray-6)",
        backgroundColor: "var(--color-background)",
        padding: "1rem",
      }}
    >
      <Flex justify="between" align="center">
        <Text size="5" weight="bold" style={{ color: "var(--accent-9)" }}>
          House Net
        </Text>
        <ThemeToggle />
      </Flex>
    </Box>
  ),
  parameters: {
    layout: "fullscreen",
  },
};
