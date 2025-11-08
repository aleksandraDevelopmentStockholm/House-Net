import { TextArea as RadixTextArea } from "@radix-ui/themes";
import type { TextAreaProps as RadixTextAreaProps } from "@radix-ui/themes";

interface TextAreaProps extends Omit<RadixTextAreaProps, "size"> {
  label: string;
  id: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  size?: RadixTextAreaProps["size"];
}

export const TextArea = ({
  label,
  id,
  error,
  helperText,
  required = false,
  size = "2",
  ...props
}: TextAreaProps) => {
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
      <RadixTextArea
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
