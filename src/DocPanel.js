import React from 'react';
import marked from 'marked';
import '!style!css!github-markdown-css/github-markdown.css';

import generateMarkdown from './components/generateMarkdown';

import {EVENT_ID} from './register';

const styles = {
  base: {
    boxSizing: 'border-box',
  },
};

export default class DocPanel extends React.Component {

  state = {docgen: null};
  constructor(props) {
    super(props);

    this._listener = d => {
      this.setState({docgen: d.docgen})
    };
  }

  componentDidMount() {
    
    this.props.channel.on(EVENT_ID, this._listener);
  }

  componentWillUnmount() {
    this.props.channel.removeListener(EVENT_ID, this._listener);
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
