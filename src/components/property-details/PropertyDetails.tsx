"use client";

import { useQuery } from "@apollo/client/react";
import { GET_PROPERTY } from "@/graphql/queries/properties";
import { GetPropertyQuery } from "@/generated/graphql";
import { ButtonLink } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import {
  Box,
  Container,
  Card,
  Heading,
  Text,
  Grid,
  Flex,
} from "@radix-ui/themes";

interface PropertyDetailsProps {
  id: string;
}

export function PropertyDetails({ id }: PropertyDetailsProps) {
  const { loading, error, data } = useQuery<GetPropertyQuery>(GET_PROPERTY, {
    variables: { id },
  });

  if (loading)
    return (
      <Box p="8" role="status" aria-live="polite" aria-busy="true">
        <Text>Loading...</Text>
      </Box>
    );

  if (error)
    return (
      <Box p="8" role="alert" aria-live="assertive">
        <Text color="red" weight="bold">
          Error loading property: {error.message}
        </Text>
      </Box>
    );

  const property = data?.property;

  return (
    <Box style={{ minHeight: "100vh", background: "var(--gray-1)" }}>
      <Container size="3" py="8">
        <Box mb="6">
          <ButtonLink
            href="/"
            variant="soft"
            size="2"
            aria-label="Navigate back to property listings"
          >
            ← Back to listings
          </ButtonLink>
        </Box>

        <Heading as="h1" size="9" mb="4" data-testid="property-details-title">
          {property?.title}
        </Heading>

        <Box mb="6" id="gallery">
          <Image
            src={property?.imageUrl || ""}
            alt={`Photo of ${property?.title} in ${property?.location}`}
            ratio={16 / 9}
            style={{ borderRadius: "var(--radius-3)" }}
          />
        </Box>

        <Box mb="4" data-testid="property-details-price">
          <Text size="8" weight="bold">
            {property?.price.toLocaleString("sv-SE")} SEK
          </Text>
        </Box>

        <Card mb="6" id="details">
          <Heading as="h2" size="6" mb="4">
            Facts
          </Heading>
          <Grid columns="2" gap="4">
            <Flex gap="2" data-testid="property-details-rooms">
              <Text color="gray">Rooms</Text>
              <Text weight="bold" data-testid="property-details-rooms-value">
                {property?.rooms}
              </Text>
            </Flex>
            <Flex gap="2" data-testid="property-details-area">
              <Text color="gray">Area</Text>
              <Text weight="bold" data-testid="property-details-area-value">
                {property?.area} m²
              </Text>
            </Flex>
            <Flex gap="2" data-testid="property-details-type">
              <Text color="gray">Type</Text>
              <Text
                weight="bold"
                style={{ textTransform: "capitalize" }}
                data-testid="property-details-type-value"
              >
                {property?.type}
              </Text>
            </Flex>
            <Flex gap="2" data-testid="property-details-location">
              <Text color="gray">Location</Text>
              <Text weight="bold" data-testid="property-details-location-value">
                {property?.location}
              </Text>
            </Flex>
          </Grid>
        </Card>

        <Card id="description">
          <Heading as="h2" size="6" mb="4">
            Description
          </Heading>
          <Text>{property?.description}</Text>
        </Card>
      </Container>
    </Box>
  );
}
