import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Badge } from "./Badge";
import { Flex, Box } from "@radix-ui/themes";

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: "UI/Badge",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "New",
  },
};

export const WithColors: Story = {
  render: () => (
    <Flex gap="2" wrap="wrap">
      <Badge color="blue">Blue</Badge>
      <Badge color="green">Green</Badge>
      <Badge color="red">Red</Badge>
      <Badge color="orange">Orange</Badge>
      <Badge color="purple">Purple</Badge>
      <Badge color="gray">Gray</Badge>
    </Flex>
  ),
};

export const Variants: Story = {
  render: () => (
    <Flex direction="column" gap="3">
      <Flex gap="2" align="center">
        <Badge variant="solid">Solid</Badge>
        <Badge variant="soft">Soft</Badge>
        <Badge variant="surface">Surface</Badge>
        <Badge variant="outline">Outline</Badge>
      </Flex>
    </Flex>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Flex gap="2" align="center">
      <Badge size="1">Small</Badge>
      <Badge size="2">Medium</Badge>
      <Badge size="3">Large</Badge>
    </Flex>
  ),
};

export const Status: Story = {
  render: () => (
    <Flex gap="2" wrap="wrap">
      <Badge color="green" aria-label="Active status">
        Active
      </Badge>
      <Badge color="yellow" aria-label="Pending status">
        Pending
      </Badge>
      <Badge color="red" aria-label="Inactive status">
        Inactive
      </Badge>
      <Badge color="gray" aria-label="Draft status">
        Draft
      </Badge>
    </Flex>
  ),
};

export const PropertyTypes: Story = {
  render: () => (
    <Flex gap="2" wrap="wrap">
      <Badge color="blue" variant="soft">
        Apartment
      </Badge>
      <Badge color="green" variant="soft">
        House
      </Badge>
      <Badge color="purple" variant="soft">
        Villa
      </Badge>
    </Flex>
  ),
};

export const WithRadius: Story = {
  render: () => (
    <Flex gap="2">
      <Badge radius="none">No Radius</Badge>
      <Badge radius="small">Small</Badge>
      <Badge radius="medium">Medium</Badge>
      <Badge radius="large">Large</Badge>
      <Badge radius="full">Full</Badge>
    </Flex>
  ),
};

export const InContext: Story = {
  render: () => (
    <Box>
      <Flex gap="2" align="center">
        <span>Property Status:</span>
        <Badge color="green">Available</Badge>
      </Flex>
    </Box>
  ),
};
