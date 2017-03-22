import React from 'react';
import addons from '@kadira/storybook-addons';

import DocPanel from './DocPanel';

const ADDON_ID = 'storybook-addon-docgen';
const PANEL_ID = `${ADDON_ID}/doc-panel`;
export const EVENT_ID = `${ADDON_ID}/doc-panel-event`;

addons.register(ADDON_ID, (api) => {
  const channel = addons.getChannel();
  addons.addPanel(PANEL_ID, {
    title: 'Docs',
    render: () => {
      return <DocPanel channel={channel} api={api} />;
    },
  });
});
