# House Net

A modern property listing platform built with Next.js 16, featuring real-time property search, filtering, analytics, and a comprehensive accessible UI component library with light/dark theme support.

## Features

### Property Listings

- Browse properties with rich details (price, location, rooms, area)
- View featured properties
- Individual property detail pages
- Optimized image component with AVIF support and fallback handling
- Responsive property cards with type badges

### Filtering

- Filter by property type (Apartment, House, Villa)
- Price range filtering (min/max)
- Minimum room count filter
- Real-time filter updates

### UI Component Library

Built with Radix UI Themes, the app includes a comprehensive set of reusable, accessible components:

- **Layout Components**: Header, Footer, PageLayout with skip navigation
- **Form Controls**: Input, TextArea, Select, Checkbox, Radio Group, Switch
- **Interactive Elements**: Button, Dialog, Badge, Link
- **Media**: Optimized Image component with multiple format support
- **Theme System**: ThemeToggle component with light/dark mode
- **Accessibility**: Skip navigation links, ARIA labels, semantic HTML

### Theme Support

- Light and dark mode toggle
- Cookie-based theme persistence (1-year expiration)
- Server-side theme detection for seamless page loads
- ThemeContext for app-wide theme management
- Radix UI Themes integration with amber accent color

### Additional Pages

- **About**: Company information and mission
- **Contact**: Contact form and information
- **Privacy Policy**: Privacy policy and data handling
- **Terms of Service**: Terms and conditions

### Analytics

- Amplitude integration for user tracking
- Event tracking for property clicks
- Session tracking
- Page view analytics
- Form interaction tracking

### GraphQL API

- Type-safe GraphQL queries with GraphQL Yoga
- Auto-generated TypeScript types via GraphQL Code Generator
- Apollo Client for efficient data fetching
- Mock data for development

### Type Safety

- Full TypeScript coverage
- Auto-generated types from GraphQL schema
- Type-safe resolvers and queries
- Compile-time error catching

### Testing

- **E2E Testing**: Playwright for end-to-end tests
- **Unit Testing**: Vitest with jsdom for component tests
- **Visual Testing**: Storybook for component development
- Separate test configurations for different test types

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **React**: React 19
- **Styling**: Radix UI Themes
- **GraphQL**: GraphQL Yoga + Apollo Client
- **Type Generation**: GraphQL Code Generator
- **Analytics**: Amplitude Browser SDK
- **Testing**: Playwright, Vitest, Storybook
- **Language**: TypeScript
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Installation

```bash
# Install dependencies
pnpm install

# Generate GraphQL types
pnpm run codegen

# Start development server
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Environment Variables

Copy the example environment file and add your own values:

```bash
# Copy the example file
cp .env.example .env.local

# Then edit .env.local with your actual API keys
```

Required variables (see `.env.example` for template):

- `NEXT_PUBLIC_AMPLITUDE_API_KEY` - Your Amplitude analytics API key from https://amplitude.com

## Available Scripts

### Development

- `pnpm dev` - Start Next.js dev server
- `pnpm build` - Build for production
- `pnpm start` - Start production server

### GraphQL Code Generation

- `pnpm codegen` - Generate TypeScript types from GraphQL schema
- `pnpm codegen:watch` - Watch mode for auto-regeneration

### Testing

- `pnpm test` - Run E2E tests
- `pnpm test:headed` - Run E2E tests with browser UI
- `pnpm test:ui` - Run E2E tests in interactive UI mode (recommended for development)
- `pnpm test:debug` - Run E2E tests in debug mode with step-through
- `pnpm test:a11y` - Run accessibility tests in UI mode
- `npx vitest` - Run unit tests

#### Interactive Test Modes

**1. UI Mode (Recommended for Development)**

```bash
pnpm test:ui
```

- Auto-reruns tests on file changes (watch mode)
- Visual test runner interface
- Time travel debugging
- Filter and run specific tests interactively

**2. Headed Mode**

```bash
pnpm test:headed
```

- See tests run in actual browser
- Useful for visual debugging
- Does not auto-rerun on changes

**3. VS Code Extension**

Install the [Playwright Test for VS Code](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright) extension for the best development experience:

```bash
code --install-extension ms-playwright.playwright
```

Features:

- Run tests directly from VS Code
- Debug with breakpoints
- Automatic watch mode
- Test explorer view
- Visual locator picker

### Storybook

- `pnpm storybook` - Start Storybook dev server
- `pnpm build-storybook` - Build Storybook for production

### Linting

- `pnpm lint` - Run ESLint

## Project Structure

```
hemnet-demo/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── api/                # API routes
│   │   │   └── graphql/        # GraphQL endpoint
│   │   ├── property/[id]/      # Property detail page
│   │   ├── about/              # About page
│   │   ├── contact/            # Contact page
│   │   ├── privacy/            # Privacy policy page
│   │   ├── terms/              # Terms of service page
│   │   ├── layout.tsx          # Root layout with theme provider
│   │   ├── theme-wrapper.tsx   # Theme wrapper component
│   │   ├── client-init.tsx     # Client-side initialization
│   │   ├── globals.css         # Global styles
│   │   └── page.tsx            # Home page
│   ├── components/             # React components
│   │   ├── filters/            # Filter components
│   │   │   └── Filters.tsx
│   │   ├── property-card/      # Property card component
│   │   │   └── PropertyCard.tsx
│   │   ├── property-details/   # Property details component
│   │   │   └── PropertyDetails.tsx
│   │   ├── property-list/      # Property list component
│   │   │   └── PropertyList.tsx
│   │   └── ui/                 # Reusable UI components
│   │       ├── badge/          # Badge component
│   │       ├── button/         # Button component
│   │       ├── checkbox/       # Checkbox component
│   │       ├── dialog/         # Dialog component
│   │       ├── footer/         # Footer component
│   │       ├── header/         # Header component
│   │       ├── image/          # Optimized image component
│   │       ├── input/          # Input component
│   │       ├── link/           # Link component
│   │       ├── page-layout/    # Page layout wrapper
│   │       ├── radio-group/    # Radio group component
│   │       ├── select/         # Select component
│   │       ├── skip-navigation/ # Skip navigation links
│   │       ├── switch/         # Switch component
│   │       ├── textarea/       # TextArea component
│   │       └── theme-toggle/   # Theme toggle component
│   ├── contexts/               # React contexts
│   │   └── ThemeContext.tsx    # Theme context provider
│   ├── graphql/                # GraphQL queries
│   │   └── queries/
│   │       └── properties.ts   # Property queries
│   ├── lib/                    # Utility functions
│   │   ├── amplitude.ts        # Analytics initialization
│   │   ├── apollo-client.ts    # Apollo Client setup
│   │   ├── generateMetadata.ts # Metadata generation helper
│   │   ├── getTheme.ts         # Server-side theme detection
│   │   ├── mock-data.ts        # Mock property data
│   │   └── schema.ts           # GraphQL schema definition
│   ├── generated/              # Auto-generated GraphQL types
│   │   ├── graphql.ts
│   │   ├── gql.ts
│   │   └── index.ts
│   └── stories/                # Storybook stories
├── tests/                      # E2E tests (Playwright)
│   ├── accessibility/          # Accessibility tests
│   └── property-listing.spec.ts
├── codegen.ts                  # GraphQL codegen config
├── playwright.config.ts        # Playwright config
├── vitest.config.ts           # Vitest config
├── storybook.config.ts        # Storybook config
└── next.config.ts             # Next.js config
```

## Key Documentation

- [GraphQL Code Generator Setup](./GRAPHQL_CODEGEN.md) - Type generation workflow
- [Amplitude Setup](./AMPLITUDE.md) - Analytics configuration

## GraphQL API

### Available Queries

```graphql
# Get all properties with optional filtering
query GetProperties($filter: PropertyFilter) {
  properties(filter: $filter) {
    id
    title
    description
    price
    rooms
    area
    location
    imageUrl
    type
    featured
  }
}

# Get single property by ID
query GetProperty($id: ID!) {
  property(id: $id) {
    id
    title
    description
    price
    rooms
    area
    location
    imageUrl
    type
    featured
  }
}

# Get featured properties
query GetFeaturedProperties {
  featuredProperties {
    id
    title
    # ... all fields
  }
}
```

### Testing the API

Visit [http://localhost:3000/api/graphql](http://localhost:3000/api/graphql) to access the GraphQL playground.

## Development Workflow

1. **Modify Schema**: Update `src/lib/schema.ts`
2. **Generate Types**: Run `pnpm codegen`
3. **Update Components**: Use generated types in your code
4. **Test**: TypeScript validates everything automatically

## Features in Detail

### Type-Safe Property Filtering

Filters use generated TypeScript types for compile-time safety:

```typescript
import { PropertyFilter, PropertyType } from "@/generated/graphql";

const filter: PropertyFilter = {
  type: PropertyType.Apartment, // Enum, not string!
  minPrice: 2000000,
  maxPrice: 8000000,
  minRooms: 2,
};
```

### Theme Management

Access and control theme from any component:

```typescript
import { useTheme } from "@/contexts/ThemeContext";

function MyComponent() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Toggle Theme
    </button>
  );
}
```

Server-side theme detection for flash-free loading:

```typescript
import { getTheme } from "@/lib/getTheme";

export default async function RootLayout() {
  const theme = await getTheme(); // Reads from cookies
  return <ThemeProvider initialTheme={theme}>...</ThemeProvider>;
}
```

### Analytics Events

Track user interactions:

```typescript
import { trackEvent } from "@/lib/amplitude";

trackEvent("property_clicked", {
  propertyId: "123",
  title: "Modern Apartment",
});
```

### Responsive Design

Radix UI Themes provides responsive props:

```tsx
<Grid columns={{ initial: "1", md: "2", lg: "3" }} gap="3">
  {/* Content */}
</Grid>
```

## License

MIT
