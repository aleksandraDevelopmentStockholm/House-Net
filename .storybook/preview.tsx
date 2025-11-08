import type { Preview } from '@storybook/nextjs-vite'
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import '../src/app/globals.css';
import React from 'react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
  decorators: [
    (Story) => (
      <Theme
        accentColor="grass"
        scaling="110%"
        panelBackground="solid"
        radius="full"
        hasBackground={true}
      >
        <Story />
      </Theme>
    ),
  ],
};

export default preview;