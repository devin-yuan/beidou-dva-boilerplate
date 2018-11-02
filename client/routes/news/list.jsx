/**
 * 新闻列表
 */

import React, { PureComponent } from 'react';

class NewsList extends PureComponent {
  render() {
    const { data } = this.props;

    return (
      <div>
        新闻列表

        <ul>
          {data.map((val, key) => {
            const index = `news_${key}`;

            return (
              <li key={index}>
                <a
                  href={val.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {val.title}
                </a>
                <div>
                  {val.description}
                </div>
                <i>
                  {val.publishedAt}
                </i>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default NewsList;
