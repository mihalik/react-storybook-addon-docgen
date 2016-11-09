import React from 'react';
import marked from 'marked';
require('!style!css!github-markdown-css/github-markdown.css');

import generateMarkdown from './components/generateMarkdown';

const styles = {
  base: {
    boxSizing: 'border-box',
    maxWidth: 980,
    padding: 45,
  },
};

export default class DocPanel extends React.Component {
  state = {docgen: null};
  constructor(props) {
    super(props);
    this.props.channel.on('story-change', (docgen) => {
      console.log(docgen);
      this.setState({docgen});
    });
  }
  render () {
    const {docgen} = this.state;
    if (!docgen) {
      return null;
    }
    const md = generateMarkdown(docgen);
    const html = marked(md);
    return (
      <div style={styles.base} className="markdown-body" dangerouslySetInnerHTML={{__html: html}} />
    );
  }
}
