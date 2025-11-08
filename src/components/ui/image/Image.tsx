"use client";

import { AspectRatio } from "@radix-ui/themes";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import { CSSProperties, useState } from "react";

interface ImageProps extends Omit<NextImageProps, "style"> {
  ratio?: number;
  style?: CSSProperties;
  "aria-hidden"?: boolean;
  fallbackSrc?: string;
}

const DEFAULT_BLUR_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2YxZjFmMSIvPjwvc3ZnPg==";

const DEFAULT_FALLBACK_SRC =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2Y1ZjVmNSIvPjxwYXRoIGQ9Ik0xNjAgMTgwaDgwdjQwaC04MHptNDAgODBsLTQwIDQwaDgwbC0yMC0yMC0yMCAyMHoiIGZpbGw9IiNkMGQwZDAiLz48Y2lyY2xlIGN4PSIxNzAiIGN5PSIyMDUiIHI9IjEwIiBmaWxsPSIjZDBkMGQwIi8+PC9zdmc+";

export function Image({
  ratio = 1,
  style,
  alt,
  src,
  placeholder,
  blurDataURL,
  fallbackSrc,
  "aria-hidden": ariaHidden,
  ...imageProps
}: ImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setImgSrc(fallbackSrc ?? DEFAULT_FALLBACK_SRC);
      setHasError(true);
    }
  };

  const defaultStyle: CSSProperties = {
    objectFit: "cover",
    ...style,
  };

  const defaultPlaceholder = placeholder ?? "blur";
  const defaultBlurDataURL = blurDataURL ?? DEFAULT_BLUR_DATA_URL;

  return (
    <AspectRatio ratio={ratio}>
      <NextImage
        src={imgSrc}
        alt={alt}
        fill
        style={defaultStyle}
        aria-hidden={ariaHidden}
        placeholder={defaultPlaceholder}
        blurDataURL={defaultBlurDataURL}
        onError={handleError}
        {...imageProps}
      />
    </AspectRatio>
  );
}
