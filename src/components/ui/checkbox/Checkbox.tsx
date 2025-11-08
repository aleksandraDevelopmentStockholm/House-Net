import { Checkbox as RadixCheckbox, Flex, Text } from "@radix-ui/themes";
import type { CheckboxProps as RadixCheckboxProps } from "@radix-ui/themes";

interface CheckboxProps extends Omit<RadixCheckboxProps, "size"> {
  label: string;
  id: string;
  helperText?: string;
  error?: string;
  size?: RadixCheckboxProps["size"];
}

export const Checkbox = ({
  label,
  id,
  helperText,
  error,
  size = "2",
  ...props
}: CheckboxProps) => {
  const describedBy = [
    error ? `${id}-error` : undefined,
    helperText ? `${id}-helper` : undefined,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <Flex gap="2" align="center">
        <RadixCheckbox
          id={id}
          size={size}
          aria-describedby={describedBy || undefined}
          aria-invalid={!!error}
          {...props}
        />
        <label
          htmlFor={id}
          style={{
            fontSize: "14px",
            cursor: "pointer",
            color: error ? "var(--red-11)" : "var(--gray-12)",
          }}
        >
          {label}
        </label>
      </Flex>
      {helperText && !error && (
        <Text
          id={`${id}-helper`}
          size="1"
          color="gray"
          style={{ marginLeft: "28px" }}
        >
          {helperText}
        </Text>
      )}
      {error && (
        <Text
          id={`${id}-error`}
          size="1"
          color="red"
          role="alert"
          style={{ marginLeft: "28px" }}
        >
          {error}
        </Text>
      )}
    </div>
  );
};
