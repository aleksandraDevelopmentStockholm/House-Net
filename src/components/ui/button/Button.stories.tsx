import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ButtonLink } from "./index";

const meta: Meta<typeof ButtonLink> = {
  component: ButtonLink,
  title: "UI/ButtonLink",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "soft", "outline", "ghost"],
      description: "The visual style of the button",
    },
    size: {
      control: "select",
      options: ["1", "2", "3", "4"],
      description: "The size of the button",
    },
    color: {
      control: "select",
      options: [
        "gray",
        "gold",
        "bronze",
        "brown",
        "yellow",
        "amber",
        "orange",
        "tomato",
        "red",
        "ruby",
        "crimson",
        "pink",
        "plum",
        "purple",
        "violet",
        "iris",
        "indigo",
        "blue",
        "cyan",
        "teal",
        "jade",
        "green",
        "grass",
        "lime",
        "mint",
        "sky",
      ],
      description: "The color theme of the button",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonLink>;

export const Primary: Story = {
  args: {
    href: "/",
    children: "Click me",
    variant: "solid",
    size: "2",
  },
};

export const Soft: Story = {
  args: {
    href: "/",
    children: "Soft Button",
    variant: "soft",
    size: "2",
  },
};

export const Outline: Story = {
  args: {
    href: "/",
    children: "Outline Button",
    variant: "outline",
    size: "2",
  },
};

export const Ghost: Story = {
  args: {
    href: "/",
    children: "Ghost Button",
    variant: "ghost",
    size: "2",
  },
};

export const WithAriaLabel: Story = {
  args: {
    href: "/",
    children: "← Back",
    variant: "soft",
    size: "2",
    "aria-label": "Navigate back to home page",
  },
};

export const Disabled: Story = {
  args: {
    href: "/",
    children: "Disabled Button",
    variant: "solid",
    size: "2",
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    href: "/",
    children: "Small Button",
    variant: "solid",
    size: "1",
  },
};

export const Large: Story = {
  args: {
    href: "/",
    children: "Large Button",
    variant: "solid",
    size: "4",
  },
};

export const Colored: Story = {
  args: {
    href: "/",
    children: "Blue Button",
    variant: "solid",
    size: "2",
    color: "blue",
  },
};
