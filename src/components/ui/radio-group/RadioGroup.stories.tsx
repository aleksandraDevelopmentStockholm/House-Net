import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { RadioGroup } from "./RadioGroup";
import { Box } from "@radix-ui/themes";
import { PropertyType } from "@/generated/graphql";

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  title: "UI/RadioGroup",
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
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  args: {
    label: "Property Type",
    id: "property-type",
    options: [
      { value: PropertyType.Apartment, label: PropertyType.Apartment },
      { value: PropertyType.House, label: PropertyType.House },
      { value: PropertyType.Villa, label: PropertyType.Villa },
    ],
  },
};

export const Required: Story = {
  args: {
    label: "Payment Method",
    id: "payment-method",
    required: true,
    options: [
      { value: "card", label: "Credit Card" },
      { value: "bank", label: "Bank Transfer" },
      { value: "swish", label: "Swish" },
    ],
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Notification Frequency",
    id: "notification-frequency",
    helperText: "Choose how often you want to receive updates",
    options: [
      { value: "instant", label: "Instant" },
      { value: "daily", label: "Daily Digest" },
      { value: "weekly", label: "Weekly Summary" },
    ],
  },
};

export const WithError: Story = {
  args: {
    label: "Delivery Option",
    id: "delivery-error",
    error: "Please select a delivery option",
    options: [
      { value: "standard", label: "Standard (5-7 days)" },
      { value: "express", label: "Express (2-3 days)" },
      { value: "overnight", label: "Overnight" },
    ],
  },
};

export const WithDisabledOptions: Story = {
  args: {
    label: "Subscription Plan",
    id: "subscription-plan",
    options: [
      { value: "free", label: "Free (Current Plan)", disabled: true },
      { value: "pro", label: "Pro - $9.99/month" },
      { value: "enterprise", label: "Enterprise - Contact Sales" },
    ],
  },
};

export const PreSelected: Story = {
  args: {
    label: "Size",
    id: "size",
    defaultValue: "medium",
    options: [
      { value: "small", label: "Small" },
      { value: "medium", label: "Medium" },
      { value: "large", label: "Large" },
    ],
  },
};

export const Horizontal: Story = {
  args: {
    label: "Gender",
    id: "gender",
    options: [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
      { value: "other", label: "Other" },
    ],
  },
};
