import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TextArea } from "./TextArea";
import { Box } from "@radix-ui/themes";

const meta: Meta<typeof TextArea> = {
  component: TextArea,
  title: "UI/TextArea",
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
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
    label: "Description",
    id: "description",
    placeholder: "Enter a description",
  },
};

export const Required: Story = {
  args: {
    label: "Message",
    id: "message-required",
    placeholder: "Enter your message",
    required: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Bio",
    id: "bio",
    helperText: "Tell us about yourself (max 500 characters)",
    placeholder: "Write your bio here...",
  },
};

export const WithError: Story = {
  args: {
    label: "Comments",
    id: "comments-error",
    error: "This field is required",
    placeholder: "Add your comments",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled TextArea",
    id: "disabled-textarea",
    placeholder: "Cannot edit",
    disabled: true,
    defaultValue: "This content cannot be edited",
  },
};

export const WithContent: Story = {
  args: {
    label: "Review",
    id: "review",
    defaultValue:
      "This is a great product! I've been using it for a few months now and I'm very satisfied with the quality and performance.",
  },
};
