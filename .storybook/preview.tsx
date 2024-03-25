import type { Preview } from '@storybook/react';
import { theme } from '../src/styles/theme';
import { Global } from '@emotion/react';
import globalStyles from '../src/styles/globalStyles';
import React from 'react';
import {
  INITIAL_VIEWPORTS,
  MINIMAL_VIEWPORTS,
} from '@storybook/addon-viewport';

const preview: Preview = {
  decorators: [
    (Story) => (
      <>
        <Global styles={globalStyles} />
        <Story />
      </>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    chakra: { theme },
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...MINIMAL_VIEWPORTS,
      },
      defaultViewport: 'desktop',
    },
  },
};

export default preview;
