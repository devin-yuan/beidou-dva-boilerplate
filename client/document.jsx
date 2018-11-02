/**
 * HTML 模板
 */

import '@babel/polyfill';
import React, { PureComponent } from 'react';

class Document extends PureComponent {
  render() {
    const { html, helper } = this.props;

    return (
      <html>
        <head>
          <title>Demo</title>
        </head>
        <body>
          <div id="container" dangerouslySetInnerHTML={{ __html: html }} />

          <script src={helper.asset('manifest.js')} />
          <script src={helper.asset('index.js')} />
        </body>
      </html>
    );
  }
}

export default Document;
