import './GSGLoader.less';

import React, { PropTypes } from 'react';

export default class GSGLoader extends React.Component {
  render() {
    return(
      <div className="loader">
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <div className="rect4"></div>
        <div className="rect5"></div>
      </div>
    );
  }
};
