import { RadioGroup as RadixRadioGroup, Flex, Text } from "@radix-ui/themes";
import type { ComponentPropsWithoutRef } from "react";

export interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface RadioGroupProps extends Omit<ComponentPropsWithoutRef<typeof RadixRadioGroup.Root>, "size"> {
  label: string;
  id: string;
  options: RadioOption[];
  error?: string;
  helperText?: string;
  required?: boolean;
  size?: "1" | "2" | "3";
}

export const RadioGroup = ({
  label,
  id,
  options,
  error,
  helperText,
  required = false,
  size = "2",
  ...props
}: RadioGroupProps) => {
  const describedBy = [
    error ? `${id}-error` : undefined,
    helperText ? `${id}-helper` : undefined,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <Text
        as="label"
        size="2"
        weight="medium"
        style={{ color: error ? "var(--red-11)" : "var(--gray-12)" }}
      >
        {label}
        {required && (
          <span aria-label="required" style={{ color: "var(--red-9)" }}>
            {" "}
            *
          </span>
        )}
      </Text>
      <RadixRadioGroup.Root
        id={id}
        size={size}
        aria-required={required}
        aria-invalid={!!error}
        aria-describedby={describedBy || undefined}
        {...props}
      >
        <Flex direction="column" gap="2">
          {options.map((option) => (
            <Flex key={option.value} gap="2" align="center">
              <RadixRadioGroup.Item
                value={option.value}
                disabled={option.disabled}
                id={`${id}-${option.value}`}
              />
              <label
                htmlFor={`${id}-${option.value}`}
                style={{
                  fontSize: "14px",
                  cursor: option.disabled ? "not-allowed" : "pointer",
                  color: option.disabled ? "var(--gray-9)" : "var(--gray-12)",
                }}
              >
                {option.label}
              </label>
            </Flex>
          ))}
        </Flex>
      </RadixRadioGroup.Root>
      {helperText && !error && (
        <Text id={`${id}-helper`} size="1" color="gray">
          {helperText}
        </Text>
      )}
      {error && (
        <Text id={`${id}-error`} size="1" color="red" role="alert">
          {error}
        </Text>
      )}
    </div>
  );
};
