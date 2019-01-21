import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';

addDecorator(
  withOptions({
    showAddonsPanel: true,
    showSearchBox: false,
    addonPanelInRight: false,
  }),
);

const req = require.context('../src/components', true, /stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
