import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PropertyList } from "./PropertyList";
import { MockedProvider } from "@apollo/client/testing/react";
import { GET_PROPERTIES } from "@/graphql/queries/properties";
import { PropertyType } from "@/generated/graphql";

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
  {
    id: "4",
    title: "Luxury Penthouse",
    price: 18000000,
    rooms: 5,
    area: 200,
    location: "Östermalm, Stockholm",
    imageUrl:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    type: PropertyType.Apartment,
  },
  {
    id: "5",
    title: "Country House",
    price: 8500000,
    rooms: 4,
    area: 150,
    location: "Saltsjöbaden",
    imageUrl:
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800",
    type: PropertyType.Villa,
  },
  {
    id: "6",
    title: "Charming Villa",
    price: 9200000,
    rooms: 5,
    area: 165,
    location: "Djursholm",
    imageUrl:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    type: PropertyType.Villa,
  },
];

const mocks = [
  {
    request: {
      query: GET_PROPERTIES,
      variables: { filter: {} },
    },
    result: {
      data: {
        properties: mockProperties,
      },
    },
  },
];

const loadingMocks = [
  {
    request: {
      query: GET_PROPERTIES,
      variables: { filter: {} },
    },
    result: {
      data: {
        properties: mockProperties,
      },
    },
    delay: 5000, // 5 second delay to show loading state
  },
];

const errorMocks = [
  {
    request: {
      query: GET_PROPERTIES,
      variables: { filter: {} },
    },
    error: new Error("Failed to fetch properties"),
  },
];

const emptyMocks = [
  {
    request: {
      query: GET_PROPERTIES,
      variables: { filter: {} },
    },
    result: {
      data: {
        properties: [],
      },
    },
  },
];

const meta: Meta<typeof PropertyList> = {
  component: PropertyList,
  title: "Components/PropertyList",
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "2rem" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof PropertyList>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <MockedProvider mocks={mocks}>
        <Story />
      </MockedProvider>
    ),
  ],
};

export const Loading: Story = {
  decorators: [
    (Story) => (
      <MockedProvider mocks={loadingMocks}>
        <Story />
      </MockedProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          "Shows the loading state while fetching properties from the server.",
      },
    },
  },
};

export const ErrorState: Story = {
  decorators: [
    (Story) => (
      <MockedProvider mocks={errorMocks}>
        <Story />
      </MockedProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Shows the error state when the API request fails.",
      },
    },
  },
};

export const Empty: Story = {
  decorators: [
    (Story) => (
      <MockedProvider mocks={emptyMocks}>
        <Story />
      </MockedProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Shows the empty state when no properties match the filters.",
      },
    },
  },
};
