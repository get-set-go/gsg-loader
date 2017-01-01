import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import Loader from '../src';

describe('<Loader /> component', function() {

  it('should loader exist', function() {
    let _instance = ReactTestUtils.renderIntoDocument(<Loader />);
    expect(ReactTestUtils.isCompositeComponent(_instance)).toBeTruthy();
  });

});
