import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PropertyCard } from "./PropertyCard";
import { Grid } from "@radix-ui/themes";
import { PropertyType } from "@/generated/graphql";

const meta: Meta<typeof PropertyCard> = {
  component: PropertyCard,
  title: "Components/PropertyCard",
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof PropertyCard>;

const mockProperties = [
  {
    id: "1",
    title: "Modern Apartment in Södermalm",
    price: 5500000,
    rooms: 3,
    area: 75,
    location: "Södermalm, Stockholm",
    imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
    type: PropertyType.Apartment,
  },
  {
    id: "2",
    title: "Villa in Nacka",
    price: 12000000,
    rooms: 6,
    area: 180,
    location: "Nacka, Stockholm",
    imageUrl:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
    type: PropertyType.House,
  },
  {
    id: "3",
    title: "Cozy Studio in Vasastan",
    price: 3200000,
    rooms: 1,
    area: 35,
    location: "Vasastan, Stockholm",
    imageUrl:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
    type: PropertyType.Apartment,
  },
];

export const GridLayout: Story = {
  render: () => (
    <Grid columns={{ initial: "1", sm: "2", lg: "3" }} gap="3" width="fill">
      {mockProperties.map((property) => (
        <PropertyCard key={property.id} {...property} />
      ))}
    </Grid>
  ),
  parameters: {
    layout: "fullscreen",
  },
};
