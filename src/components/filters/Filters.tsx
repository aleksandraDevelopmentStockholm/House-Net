"use client";

import { PropertyType } from "@/generated/graphql";
import { Select as RadixSelect } from "@radix-ui/themes";
import { Card, Heading, Grid, Text, TextField, Flex } from "@radix-ui/themes";
import Head from "next/head";

interface PropertyFiltersProps {
  onFilterChange: (filters: {
    type?: string;
    minPrice?: number;
    maxPrice?: number;
    minRooms?: number;
  }) => void;
}

export function Filters({ onFilterChange }: PropertyFiltersProps) {
  return (
    <Card mb="6" id="search">
      <Heading as="h2" size="5" mb="4">
        Filter Properties
      </Heading>
      <Grid columns={{ initial: "1", md: "4" }} gap="4">
        {/* Property Type Select */}
        <Flex align="start" direction="column">
          <Text
            as="label"
            size="2"
            weight="medium"
            mb="2"
            htmlFor="property-type-select"
          >
            Type
          </Text>
          <RadixSelect.Root
            onValueChange={(value) => onFilterChange({ type: value })}
          >
            <RadixSelect.Trigger
              name="property-type-select"
              placeholder="All types"
              id="property-type-select"
            />
            <RadixSelect.Content>
              <RadixSelect.Item value="all">All types</RadixSelect.Item>
              <RadixSelect.Item value={PropertyType.Apartment}>
                Apartment
              </RadixSelect.Item>
              <RadixSelect.Item value={PropertyType.House}>
                House
              </RadixSelect.Item>
              <RadixSelect.Item value={PropertyType.Villa}>
                Villa
              </RadixSelect.Item>
            </RadixSelect.Content>
          </RadixSelect.Root>
        </Flex>

        {/* Min Price */}
        <Flex direction="column" justify="between">
          <Text as="label" size="2" weight="medium" mb="2" htmlFor="min-price">
            Min Price
          </Text>
          <TextField.Root
            name="min-price"
            id="min-price"
            type="number"
            placeholder="0"
            onChange={(e) =>
              onFilterChange({ minPrice: Number(e.target.value) })
            }
          />
        </Flex>

        {/* Max Price */}
        <Flex direction="column" justify="between">
          <Text as="label" size="2" weight="medium" mb="2" htmlFor="max-price">
            Max Price
          </Text>
          <TextField.Root
            name="max-price"
            id="max-price"
            type="number"
            placeholder="Unlimited"
            onChange={(e) =>
              onFilterChange({ maxPrice: Number(e.target.value) })
            }
          />
        </Flex>

        {/* Min Rooms */}
        <Flex direction="column" justify="between">
          <Text as="label" size="2" weight="medium" mb="2" htmlFor="min-rooms">
            Minimum Rooms
          </Text>
          <TextField.Root
            id="min-rooms"
            name="min-rooms"
            type="number"
            placeholder="1"
            onChange={(e) =>
              onFilterChange({ minRooms: Number(e.target.value) })
            }
          />
        </Flex>
      </Grid>
    </Card>
  );
}
