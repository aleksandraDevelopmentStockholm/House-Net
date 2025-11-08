import { Badge as RadixBadge } from "@radix-ui/themes";
import type { BadgeProps as RadixBadgeProps } from "@radix-ui/themes";
import { ReactNode } from "react";

interface BadgeProps extends RadixBadgeProps {
  children: ReactNode;
  "aria-label"?: string;
}

export const Badge = ({
  children,
  "aria-label": ariaLabel,
  ...props
}: BadgeProps) => {
  return (
    <RadixBadge aria-label={ariaLabel} {...props}>
      {children}
    </RadixBadge>
  );
};
