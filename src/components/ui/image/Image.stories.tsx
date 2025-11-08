import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Image } from "./Image";
import { Box } from "@radix-ui/themes";

const meta: Meta<typeof Image> = {
  component: Image,
  title: "UI/Image",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    ratio: {
      control: "number",
      description: "Aspect ratio of the image (width / height)",
    },
    alt: {
      control: "text",
      description: "Alternative text for the image",
    },
    placeholder: {
      control: "select",
      options: ["blur", "empty"],
      description: "Type of placeholder to show while loading (default: blur)",
    },
    blurDataURL: {
      control: "text",
      description:
        "Data URL for blur placeholder (default: simple gray placeholder)",
    },
    fallbackSrc: {
      control: "text",
      description:
        "Image to show if the main image fails to load (default: gray box with icon)",
    },
    "aria-hidden": {
      control: "boolean",
      description: "Whether to hide the image from screen readers",
    },
  },
  decorators: [
    (Story) => (
      <Box style={{ width: "400px" }}>
        <Story />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Square: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=800&fit=crop",
    alt: "Modern house with pool",
    ratio: 1,
  },
};

export const Landscape: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1600&h=900&fit=crop",
    alt: "Spacious living room interior",
    ratio: 16 / 9,
  },
};

export const Portrait: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&h=900&fit=crop",
    alt: "Apartment building exterior",
    ratio: 2 / 3,
  },
};

export const Wide: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=2400&h=900&fit=crop",
    alt: "Luxury villa panoramic view",
    ratio: 21 / 9,
  },
};

export const WithCustomStyle: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=800&fit=crop",
    alt: "Contemporary house",
    ratio: 1,
    style: {
      borderRadius: "var(--radius-4)",
      border: "2px solid var(--accent-9)",
    },
  },
};

export const AriaHidden: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=800&fit=crop",
    alt: "",
    ratio: 1,
    "aria-hidden": true,
  },
};

export const PropertyCard: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=800&fit=crop",
    alt: "",
    ratio: 1,
    "aria-hidden": true,
  },
};

export const PropertyDetails: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&h=900&fit=crop",
    alt: "Photo of Modern Villa in Stockholm",
    ratio: 16 / 9,
    style: { borderRadius: "var(--radius-3)" },
  },
};

export const WithBlurPlaceholder: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=800&fit=crop",
    alt: "Modern apartment",
    ratio: 1,
    placeholder: "blur",
  },
};

export const NoPlaceholder: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=800&h=800&fit=crop",
    alt: "Luxury home",
    ratio: 1,
    placeholder: "empty",
  },
};

export const CustomBlurPlaceholder: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=800&fit=crop",
    alt: "Beautiful house",
    ratio: 1,
    placeholder: "blur",
    blurDataURL:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2U5ZWNlZiIvPjwvc3ZnPg==",
  },
};

export const BrokenImageWithDefaultFallback: Story = {
  args: {
    src: "https://invalid-url-that-will-fail.example/image.jpg",
    alt: "Property image",
    ratio: 1,
    placeholder: "blur",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates the default fallback behavior when an image fails to load. A gray box with an icon will appear instead of the broken image.",
      },
    },
  },
};

export const BrokenImageWithCustomFallback: Story = {
  args: {
    src: "https://invalid-url-that-will-fail.example/image.jpg",
    alt: "Property image",
    ratio: 1,
    placeholder: "blur",
    fallbackSrc:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=800&fit=crop",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates custom fallback behavior. When the main image fails, it shows a custom fallback image instead of the default gray box.",
      },
    },
  },
};

export const BrokenLandscapeImage: Story = {
  args: {
    src: "https://invalid-url-that-will-fail.example/landscape.jpg",
    alt: "Property gallery image",
    ratio: 16 / 9,
    placeholder: "blur",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates the default fallback for landscape images (16:9 ratio) used in property detail pages.",
      },
    },
  },
};
