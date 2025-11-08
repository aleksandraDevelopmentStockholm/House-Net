import { TextField } from "@radix-ui/themes";
import type { ComponentPropsWithoutRef } from "react";

interface InputProps extends Omit<ComponentPropsWithoutRef<typeof TextField.Root>, "size"> {
  label: string;
  id: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  size?: "1" | "2" | "3";
}

export const Input = ({
  label,
  id,
  error,
  helperText,
  required = false,
  size = "2",
  ...props
}: InputProps) => {
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
      <TextField.Root
        id={id}
        aria-required={required}
        aria-invalid={!!error}
        aria-describedby={describedBy || undefined}
        size={size}
        color={error ? "red" : undefined}
        {...props}
      />
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
