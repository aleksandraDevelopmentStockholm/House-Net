import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from "./Input";
import { Box } from "@radix-ui/themes";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "UI/Input",
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
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "Email",
    id: "email",
    placeholder: "Enter your email",
  },
};

export const Required: Story = {
  args: {
    label: "Email",
    id: "email-required",
    placeholder: "Enter your email",
    required: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Password",
    id: "password",
    type: "password",
    helperText: "Must be at least 8 characters",
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    id: "email-error",
    placeholder: "Enter your email",
    error: "Please enter a valid email address",
    defaultValue: "invalid-email",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Input",
    id: "disabled-input",
    placeholder: "Cannot edit",
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    label: "Small Input",
    id: "small-input",
    placeholder: "Small size",
    size: "1",
  },
};

export const Large: Story = {
  args: {
    label: "Large Input",
    id: "large-input",
    placeholder: "Large size",
    size: "3",
  },
};
