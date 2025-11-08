import { ReactNode } from "react";
import NextLink, { LinkProps } from "next/link";
import { Link as RadixLink } from "@radix-ui/themes";
import type { LinkProps as RadixLinkProps } from "@radix-ui/themes";

interface LinkComponentProps extends Omit<LinkProps, "style"> {
  children: ReactNode;
  block?: boolean;
  underline?: RadixLinkProps["underline"];
  color?: RadixLinkProps["color"];
  weight?: RadixLinkProps["weight"];
  size?: RadixLinkProps["size"];
}

export const Link = ({
  children,
  block,
  underline = "auto",
  color,
  weight,
  size,
  ...props
}: LinkComponentProps) => (
  <RadixLink
    asChild
    underline={underline}
    color={color}
    weight={weight}
    size={size}
    style={block ? { height: "100%", display: "block" } : undefined}
  >
    <NextLink style={{ color: "inherit", textDecoration: "none" }} {...props}>
      {children}
    </NextLink>
  </RadixLink>
);
