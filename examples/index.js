import './index.less';

import React from 'react';
import ReactDOM from 'react-dom';

import Loader from '../dist/index.min';

class Page extends React.Component {
  render() {
    return (
      <div className="loader-eg-container">
        <h1>Get-Set-Go Loader Component</h1>

        <p className="loader-eg-group">
          <h4>Loader Styles</h4>

          <Loader></Loader>
        </p>
      </div>
    );
  }
};

ReactDOM.render(
  <Page />,
  document.getElementById('container')
);
