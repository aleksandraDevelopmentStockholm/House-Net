import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PropertyDetails } from "./PropertyDetails";
import { MockedProvider } from "@apollo/client/testing/react";
import { GET_PROPERTY } from "@/graphql/queries/properties";
import { PropertyType } from "@/generated/graphql";

const mockProperty = {
  id: "1",
  title: "Modern Apartment in Södermalm",
  price: 5500000,
  rooms: 3,
  area: 75,
  location: "Södermalm, Stockholm",
  imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
  type: PropertyType.Apartment,
  description:
    "Beautiful modern apartment located in the heart of Södermalm. This stunning 3-room apartment features an open floor plan, high ceilings, and large windows that fill the space with natural light. The kitchen is fully equipped with modern appliances and plenty of storage space. The master bedroom is spacious and includes a walk-in closet. The apartment also includes a balcony with views of the neighborhood. Located close to restaurants, cafes, shops, and public transportation.",
};

const mocks = [
  {
    request: {
      query: GET_PROPERTY,
      variables: { id: "1" },
    },
    result: {
      data: {
        property: mockProperty,
      },
    },
  },
];

const loadingMocks = [
  {
    request: {
      query: GET_PROPERTY,
      variables: { id: "1" },
    },
    result: {
      data: {
        property: mockProperty,
      },
    },
    delay: 5000, // 5 second delay to show loading state
  },
];

const errorMocks = [
  {
    request: {
      query: GET_PROPERTY,
      variables: { id: "1" },
    },
    error: new Error("Property not found"),
  },
];

const meta: Meta<typeof PropertyDetails> = {
  component: PropertyDetails,
  title: "Components/PropertyDetails",
  parameters: {
    layout: "fullscreen",
  },
  args: {
    id: "1",
  },
};

export default meta;
type Story = StoryObj<typeof PropertyDetails>;

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
        story: "Shows the loading state while fetching property details from the server.",
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
        story: "Shows the error state when the property cannot be found or the API request fails.",
      },
    },
  },
};

export const Villa: Story = {
  args: {
    id: "2",
  },
  decorators: [
    (Story) => (
      <MockedProvider
        mocks={[
          {
            request: {
              query: GET_PROPERTY,
              variables: { id: "2" },
            },
            result: {
              data: {
                property: {
                  id: "2",
                  title: "Luxury Villa in Djursholm",
                  price: 15000000,
                  rooms: 6,
                  area: 250,
                  location: "Djursholm",
                  imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
                  type: PropertyType.Villa,
                  description:
                    "Spectacular villa in the prestigious area of Djursholm. This luxurious property features 6 spacious rooms, a modern kitchen with top-of-the-line appliances, and an open living area perfect for entertaining. The master suite includes a private bathroom and walk-in closet. Large windows throughout provide stunning views of the surrounding landscape. The property includes a beautifully landscaped garden, outdoor patio, and a two-car garage. Close to schools, shopping, and transportation.",
                },
              },
            },
          },
        ]}
      >
        <Story />
      </MockedProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Shows property details for a villa listing.",
      },
    },
  },
};
