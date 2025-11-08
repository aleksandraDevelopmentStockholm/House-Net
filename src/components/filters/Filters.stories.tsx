import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Filters } from "./Filters";

const meta: Meta<typeof Filters> = {
  component: Filters,
  title: "Components/Filters",
  parameters: {
    layout: "padded",
  },
  args: {
    onFilterChange: (filters) => console.log("Filters changed:", filters),
  },
};

export default meta;
type Story = StoryObj<typeof Filters>;

export const Default: Story = {
  args: {},
};

export const WithDescription: Story = {
  render: (args) => (
    <div>
      <p style={{ marginBottom: "1rem", color: "var(--gray-11)" }}>
        Use this component to filter properties by type, price range, and minimum rooms.
      </p>
      <Filters {...args} />
    </div>
  ),
};
