import { Dialog as RadixDialog, Button, Flex } from "@radix-ui/themes";
import { ReactNode } from "react";

interface DialogProps {
  title: string;
  description: string;
  children: ReactNode;
  trigger: ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  confirmDisabled?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export const Dialog = ({
  title,
  description,
  children,
  trigger,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  onConfirm,
  onCancel,
  confirmDisabled = false,
  open,
  onOpenChange,
}: DialogProps) => {
  return (
    <RadixDialog.Root open={open} onOpenChange={onOpenChange}>
      <RadixDialog.Trigger>{trigger}</RadixDialog.Trigger>

      <RadixDialog.Content
        aria-describedby="dialog-description"
        maxWidth="450px"
      >
        <RadixDialog.Title>{title}</RadixDialog.Title>
        <RadixDialog.Description id="dialog-description" size="2" mb="4">
          {description}
        </RadixDialog.Description>

        {children}

        <Flex gap="3" mt="4" justify="end">
          <RadixDialog.Close>
            <Button variant="soft" color="gray" onClick={onCancel}>
              {cancelLabel}
            </Button>
          </RadixDialog.Close>
          <RadixDialog.Close>
            <Button onClick={onConfirm} disabled={confirmDisabled}>
              {confirmLabel}
            </Button>
          </RadixDialog.Close>
        </Flex>
      </RadixDialog.Content>
    </RadixDialog.Root>
  );
};
