import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Dialog } from "./Dialog";
import { Button, Text, Flex } from "@radix-ui/themes";
import { Input } from "../input";

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  title: "UI/Dialog",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  args: {
    title: "Delete Property",
    description: "Are you sure you want to delete this property?",
    trigger: <Button>Open Dialog</Button>,
    children: (
      <Text>
        This action cannot be undone. The property will be permanently removed
        from your account.
      </Text>
    ),
  },
};

export const WithForm: Story = {
  args: {
    title: "Edit Profile",
    description: "Make changes to your profile here.",
    trigger: <Button>Edit Profile</Button>,
    confirmLabel: "Save changes",
    children: (
      <Flex direction="column" gap="3">
        <Input label="Name" id="name" defaultValue="John Doe" />
        <Input
          label="Email"
          id="email"
          type="email"
          defaultValue="john@example.com"
        />
      </Flex>
    ),
  },
};

export const Destructive: Story = {
  args: {
    title: "Delete Account",
    description:
      "This will permanently delete your account and all associated data.",
    trigger: <Button color="red">Delete Account</Button>,
    confirmLabel: "Delete",
    cancelLabel: "Keep Account",
    children: (
      <Flex direction="column" gap="3">
        <Text weight="bold" color="red">
          Warning: This action is irreversible!
        </Text>
        <Text>
          All your properties, messages, and saved searches will be permanently
          deleted.
        </Text>
      </Flex>
    ),
  },
};

export const WithDisabledConfirm: Story = {
  args: {
    title: "Upgrade Plan",
    description: "Choose your new subscription plan",
    trigger: <Button>Upgrade</Button>,
    confirmLabel: "Subscribe",
    confirmDisabled: true,
    children: (
      <Text>
        Please select a plan to continue. The confirm button will be enabled
        once you make a selection.
      </Text>
    ),
  },
};

export const LongContent: Story = {
  args: {
    title: "Terms and Conditions",
    description: "Please read and accept our terms of service",
    trigger: <Button variant="outline">View Terms</Button>,
    confirmLabel: "Accept",
    children: (
      <Flex direction="column" gap="2" style={{ maxHeight: "300px", overflow: "auto" }}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris.
        </Text>
        <Text>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident.
        </Text>
        <Text>
          Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium.
        </Text>
      </Flex>
    ),
  },
};
