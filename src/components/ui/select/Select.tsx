import { Select as RadixSelect } from "@radix-ui/themes";
import type { ComponentPropsWithoutRef } from "react";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectProps extends Omit<ComponentPropsWithoutRef<typeof RadixSelect.Root>, "size"> {
  label: string;
  id: string;
  options: SelectOption[];
  placeholder?: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  size?: "1" | "2" | "3";
}

export const Select = ({
  label,
  id,
  options,
  placeholder = "Select an option",
  error,
  helperText,
  required = false,
  size = "2",
  ...props
}: SelectProps) => {
  const describedBy = [
    error ? `${id}-error` : undefined,
    helperText ? `${id}-helper` : undefined,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <label
        htmlFor={id}
        style={{
          fontSize: "14px",
          fontWeight: 500,
          color: error ? "var(--red-11)" : "var(--gray-12)",
        }}
      >
        {label}
        {required && (
          <span aria-label="required" style={{ color: "var(--red-9)" }}>
            {" "}
            *
          </span>
        )}
      </label>
      <RadixSelect.Root
        {...props}
        size={size}
      >
        <RadixSelect.Trigger
          id={id}
          placeholder={placeholder}
          aria-required={required}
          aria-invalid={!!error}
          aria-describedby={describedBy || undefined}
          color={error ? "red" : undefined}
        />
        <RadixSelect.Content>
          {options.map((option) => (
            <RadixSelect.Item
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </RadixSelect.Item>
          ))}
        </RadixSelect.Content>
      </RadixSelect.Root>
      {helperText && !error && (
        <span
          id={`${id}-helper`}
          style={{ fontSize: "12px", color: "var(--gray-11)" }}
        >
          {helperText}
        </span>
      )}
      {error && (
        <span
          id={`${id}-error`}
          role="alert"
          style={{ fontSize: "12px", color: "var(--red-11)" }}
        >
          {error}
        </span>
      )}
    </div>
  );
};
