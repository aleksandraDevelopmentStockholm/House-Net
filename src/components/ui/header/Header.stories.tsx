import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Header } from "./Header";

const meta: Meta<typeof Header> = {
  component: Header,
  title: "UI/Header",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};

export const WithDarkTheme: Story = {
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: "var(--gray-2)", minHeight: "100vh" }}>
        <Story />
      </div>
    ),
  ],
};
