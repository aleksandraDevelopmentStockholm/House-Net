import { Link } from "@/components/ui/link";
import { Image } from "@/components/ui/image";
import { trackEvent } from "@/lib/amplitude";
import { Card, Inset, Text, Heading, Flex } from "@radix-ui/themes";

interface PropertyCardProps {
  id: string;
  title: string;
  price: number;
  rooms: number;
  area: number;
  location: string;
  imageUrl: string;
  type: string;
}

export function PropertyCard({
  id,
  title,
  price,
  rooms,
  area,
  location,
  imageUrl,
  type,
}: PropertyCardProps) {
  const handleClick = () =>
    trackEvent("property_clicked", { propertyId: id, title });

  const formattedPrice = price.toLocaleString("sv-SE");
  const roomsText = rooms === 1 ? 'room' : 'rooms';
  const ariaLabel = `${title}, ${formattedPrice} SEK, ${location}, ${rooms} ${roomsText}, ${area} m², ${type}`;

  return (
    <Link
      underline="none"
      href={`/property/${id}`}
      onClick={handleClick}
      aria-label={ariaLabel}
      block={true}
    >
      <Card
        style={{ height: "100%", display: "flex", flexDirection: "column" }}
      >
        <Inset clip="padding-box" side="top" pb="current">
          <Image src={imageUrl} alt="" aria-hidden={true} />
        </Inset>
        <Flex direction={"column"} gap="2" p="3" style={{ flexGrow: 1 }}>
          <Heading as="h3" data-testid="property-title">
            {title}
          </Heading>
          <Flex direction="column" gap="3">
            <Text
              weight="bold"
              as="span"
              aria-hidden="true"
              data-testid="property-price"
            >
              {formattedPrice} SEK
            </Text>
            <Text as="span" aria-hidden="true" data-testid="property-location">
              {location}
            </Text>
          </Flex>
          <Flex gap="3">
            <Text as="span" aria-hidden="true" data-testid="property-rooms">
              {rooms} {roomsText}
            </Text>
            <Text as="span" aria-hidden="true" data-testid="property-area">
              {area} m²
            </Text>
            <Text
              as="span"
              style={{ textTransform: "capitalize" }}
              aria-hidden="true"
              data-testid="property-type"
            >
              {type}
            </Text>
          </Flex>
        </Flex>
      </Card>
    </Link>
  );
}
