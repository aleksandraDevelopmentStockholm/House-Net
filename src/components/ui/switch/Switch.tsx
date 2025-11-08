import { Switch as RadixSwitch, Flex, Text } from "@radix-ui/themes";
import type { SwitchProps as RadixSwitchProps } from "@radix-ui/themes";

interface SwitchProps extends Omit<RadixSwitchProps, "size"> {
  label: string;
  id: string;
  helperText?: string;
  size?: RadixSwitchProps["size"];
}

export const Switch = ({
  label,
  id,
  helperText,
  size = "2",
  ...props
}: SwitchProps) => {
  const describedBy = helperText ? `${id}-helper` : undefined;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <Flex gap="2" align="center">
        <RadixSwitch
          id={id}
          size={size}
          aria-describedby={describedBy}
          {...props}
        />
        <label
          htmlFor={id}
          style={{
            fontSize: "14px",
            cursor: "pointer",
            color: "var(--gray-12)",
          }}
        >
          {label}
        </label>
      </Flex>
      {helperText && (
        <Text
          id={`${id}-helper`}
          size="1"
          color="gray"
          style={{ marginLeft: "40px" }}
        >
          {helperText}
        </Text>
      )}
    </div>
  );
};
