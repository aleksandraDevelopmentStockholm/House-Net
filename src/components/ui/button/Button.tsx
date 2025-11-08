import { ReactNode } from "react";
import NextLink, { LinkProps } from "next/link";
import { Button as RadixButton } from "@radix-ui/themes";
import type { ButtonProps as RadixButtonProps } from "@radix-ui/themes";

interface ButtonLinkProps extends Omit<LinkProps, "as"> {
  children: ReactNode;
  variant?: RadixButtonProps["variant"];
  size?: RadixButtonProps["size"];
  color?: RadixButtonProps["color"];
  disabled?: boolean;
  "aria-label"?: string;
  "aria-describedby"?: string;
  "aria-expanded"?: boolean;
  "aria-pressed"?: boolean;
}

export const ButtonLink = ({
  children,
  variant = "solid",
  size = "2",
  color,
  disabled = false,
  "aria-label": ariaLabel,
  "aria-describedby": ariaDescribedby,
  "aria-expanded": ariaExpanded,
  "aria-pressed": ariaPressed,
  ...linkProps
}: ButtonLinkProps) => {
  const ariaProps = {
    "aria-label": ariaLabel,
    "aria-describedby": ariaDescribedby,
    "aria-expanded": ariaExpanded,
    "aria-pressed": ariaPressed,
  };

  if (disabled) {
    return (
      <RadixButton
        variant={variant}
        size={size}
        color={color}
        disabled
        {...ariaProps}
      >
        {children}
      </RadixButton>
    );
  }

  return (
    <RadixButton
      asChild
      variant={variant}
      size={size}
      color={color}
      {...ariaProps}
    >
      <NextLink {...linkProps}>{children}</NextLink>
    </RadixButton>
  );
};
