import React from 'react';
import addons from "@kadira/storybook-addons";

export class DocDecorator extends React.Component {

  componentWillMount() {
    this.props.channel.emit('story-change', this.props.story().type.__docgenInfo);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.story !== this.props.story) {
      this.props.channel.emit('story-change', nextProps.story().type.__docgenInfo);
    }
  }

  render() {
    return this.props.story();
  }
}

export default (readme) => (story) => (
  <DocDecorator story={story} readme={readme} channel={addons.getChannel()} />
);
