import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Select } from "./Select";
import { Box } from "@radix-ui/themes";
import { PropertyType } from "@/generated/graphql";

const meta: Meta<typeof Select> = {
  component: Select,
  title: "UI/Select",
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
type Story = StoryObj<typeof Select>;

const countryOptions = [
  { value: "se", label: "Sweden" },
  { value: "no", label: "Norway" },
  { value: "dk", label: "Denmark" },
  { value: "fi", label: "Finland" },
];

export const Default: Story = {
  args: {
    label: "Country",
    id: "country",
    options: countryOptions,
  },
};

export const Required: Story = {
  args: {
    label: "Country",
    id: "country-required",
    options: countryOptions,
    required: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Property Type",
    id: "property-type",
    options: [
      { value: PropertyType.Apartment, label: PropertyType.Apartment },
      { value: PropertyType.House, label: PropertyType.House },
      { value: PropertyType.Villa, label: PropertyType.Villa },
    ],
    helperText: "Choose the type of property you're looking for",
  },
};

export const WithError: Story = {
  args: {
    label: "City",
    id: "city-error",
    options: [
      { value: "stockholm", label: "Stockholm" },
      { value: "gothenburg", label: "Gothenburg" },
      { value: "malmo", label: "Malmö" },
    ],
    error: "Please select a city",
  },
};

export const WithDisabledOptions: Story = {
  args: {
    label: "Status",
    id: "status",
    options: [
      { value: "active", label: "Active" },
      { value: "pending", label: "Pending", disabled: true },
      { value: "inactive", label: "Inactive" },
    ],
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Select",
    id: "disabled-select",
    options: countryOptions,
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    label: "Small Select",
    id: "small-select",
    options: countryOptions,
    size: "1",
  },
};

export const Large: Story = {
  args: {
    label: "Large Select",
    id: "large-select",
    options: countryOptions,
    size: "3",
  },
};
