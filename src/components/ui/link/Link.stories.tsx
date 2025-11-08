import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Link } from "./Link";
import { Box, Text, Flex, Card, Inset } from "@radix-ui/themes";

const meta: Meta<typeof Link> = {
  component: Link,
  title: "UI/Link",
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Box>
        <Story />
      </Box>
    ),
  ],
  argTypes: {
    block: {
      control: "boolean",
      description: "Whether the link should be displayed as a block element",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    href: "/",
    children: "This is a link",
  },
};

export const InText: Story = {
  render: () => (
    <Text>
      This is some text with a <Link href="/">link inside</Link> of it.
    </Text>
  ),
};

export const WithUnderline: Story = {
  args: {
    href: "/",
    children: "Always underlined link",
    underline: "always",
  },
};

export const NoUnderline: Story = {
  args: {
    href: "/",
    children: "No underline link",
    underline: "none",
  },
};

export const Colored: Story = {
  render: () => (
    <Flex direction="column" gap="2">
      <Link href="/" color="blue">
        Blue link
      </Link>
      <Link href="/" color="red">
        Red link
      </Link>
      <Link href="/" color="green">
        Green link
      </Link>
    </Flex>
  ),
};

export const Weights: Story = {
  render: () => (
    <Flex direction="column" gap="2">
      <Link href="/" weight="light">
        Light weight
      </Link>
      <Link href="/" weight="regular">
        Regular weight
      </Link>
      <Link href="/" weight="medium">
        Medium weight
      </Link>
      <Link href="/" weight="bold">
        Bold weight
      </Link>
    </Flex>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Flex direction="column" gap="2">
      <Link href="/" size="1">
        Small link
      </Link>
      <Link href="/" size="2">
        Medium link
      </Link>
      <Link href="/" size="3">
        Large link
      </Link>
    </Flex>
  ),
};

export const BlockLink: Story = {
  args: {
    href: "/",
    block: true,
    children: "Block level link",
  },
};

export const WithComplexChildren: Story = {
  args: {
    href: "/property/1",
    children: (
      <Card size="3">
        <Inset side="all" p="current" pb="current">
          <Flex direction="column">
            <Text weight="bold">Property Title</Text>
            <Text size="2" color="gray">
              Click anywhere on this card
            </Text>
          </Flex>
        </Inset>
      </Card>
    ),
    block: true,
  },
};

export const ExternalLink: Story = {
  args: {
    href: "https://www.radix-ui.com",
    children: "External link to Radix UI",
  },
};
