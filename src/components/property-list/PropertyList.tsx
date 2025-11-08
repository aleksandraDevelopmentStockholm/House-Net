"use client";

import { useQuery, skipToken } from "@apollo/client/react";
import { useState, useEffect } from "react";
import { GET_PROPERTIES } from "@/graphql/queries/properties";
import { PropertyCard } from "@/components/property-card";
import { Filters } from "@/components/filters";
import { Grid, Box, Text } from "@radix-ui/themes";
import type { GetPropertiesQuery } from "@/generated/graphql";

interface PropertyFilters {
  type?: string;
  minPrice?: number;
  maxPrice?: number;
  minRooms?: number;
}

type Property = NonNullable<GetPropertiesQuery["properties"]>[number];

interface PropertyListProps {
  initialData?: Property[];
}

export function PropertyList({ initialData = [] }: PropertyListProps) {
  const [filters, setFilters] = useState<PropertyFilters>({});
  const [announcement, setAnnouncement] = useState("");

  const cleanFilters = Object.fromEntries(
    Object.entries(filters).filter(([_key, value]) => {
      if (value === "all" || value === "" || value === 0) return false;
      return true;
    })
  );

  const hasFilters = Object.keys(cleanFilters).length > 0;

  const { loading, error, data } = useQuery<GetPropertiesQuery>(
    GET_PROPERTIES,
    hasFilters
      ? {
          variables: { filter: cleanFilters },
        }
      : skipToken
  );

  const properties = data?.properties ?? initialData;

  useEffect(() => {
    const count = properties.length;
    setAnnouncement(
      `${count} ${count === 1 ? "property" : "properties"} found`
    );
  }, [properties]);

  const handleFilterChange = (newFilters: PropertyFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  return (
    <>
      <Filters onFilterChange={handleFilterChange} />

      {/* ARIA Live Region - visually hidden */}
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        style={{
          position: "absolute",
          left: "-9999px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        {announcement}
      </div>

      {loading && (
        <Box role="status" aria-live="polite" aria-busy="true" p="4">
          <Text>Loading properties...</Text>
        </Box>
      )}

      {error && (
        <Box role="alert" aria-live="assertive" p="4">
          <Text color="red" weight="bold">
            Error loading properties: {error.message}
          </Text>
        </Box>
      )}

      <Grid
        id="results"
        columns={{ initial: "1", md: "2", lg: "3" }}
        gap="3"
        width="auto"
      >
        {properties.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </Grid>
    </>
  );
}
