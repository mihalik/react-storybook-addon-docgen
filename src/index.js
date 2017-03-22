import React from 'react';
import addons from "@kadira/storybook-addons";
import {EVENT_ID} from './register';

export default (fn) => {
  let story = fn();

  const channel = addons.getChannel();
  channel.emit(EVENT_ID, {docgen: story.type.__docgenInfo});
  return fn();
}
