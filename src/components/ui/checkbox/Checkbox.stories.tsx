import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Checkbox } from "./Checkbox";
import { Box, Flex } from "@radix-ui/themes";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: "UI/Checkbox",
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Box style={{ maxWidth: "400px" }}>
        <Story />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: "Accept terms and conditions",
    id: "terms",
  },
};

export const Checked: Story = {
  args: {
    label: "Subscribe to newsletter",
    id: "newsletter",
    defaultChecked: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Enable notifications",
    id: "notifications",
    helperText: "We'll send you updates about your properties",
  },
};

export const WithError: Story = {
  args: {
    label: "I agree to the privacy policy",
    id: "privacy-error",
    error: "You must accept the privacy policy to continue",
  },
};

export const Disabled: Story = {
  args: {
    label: "This option is disabled",
    id: "disabled",
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: "Already subscribed",
    id: "disabled-checked",
    disabled: true,
    defaultChecked: true,
  },
};

export const MultipleCheckboxes: Story = {
  render: () => (
    <Flex direction="column" gap="3">
      <Checkbox label="Email notifications" id="email-notif" />
      <Checkbox label="SMS notifications" id="sms-notif" defaultChecked />
      <Checkbox label="Push notifications" id="push-notif" />
    </Flex>
  ),
};
