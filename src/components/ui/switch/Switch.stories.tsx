import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Switch } from "./Switch";
import { Box, Flex } from "@radix-ui/themes";

const meta: Meta<typeof Switch> = {
  component: Switch,
  title: "UI/Switch",
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
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    label: "Enable notifications",
    id: "notifications",
  },
};

export const Checked: Story = {
  args: {
    label: "Dark mode",
    id: "dark-mode",
    defaultChecked: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Auto-save",
    id: "auto-save",
    helperText: "Automatically save your changes as you type",
  },
};

export const Disabled: Story = {
  args: {
    label: "This setting is disabled",
    id: "disabled",
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: "Always enabled feature",
    id: "disabled-checked",
    disabled: true,
    defaultChecked: true,
  },
};

export const Small: Story = {
  args: {
    label: "Small switch",
    id: "small-switch",
    size: "1",
  },
};

export const Large: Story = {
  args: {
    label: "Large switch",
    id: "large-switch",
    size: "3",
  },
};

export const MultipleSwitches: Story = {
  render: () => (
    <Flex direction="column" gap="3">
      <Switch
        label="Email notifications"
        id="email-switch"
        helperText="Receive updates via email"
      />
      <Switch
        label="SMS notifications"
        id="sms-switch"
        defaultChecked
        helperText="Receive updates via text message"
      />
      <Switch
        label="Push notifications"
        id="push-switch"
        helperText="Receive updates in the app"
      />
    </Flex>
  ),
};
