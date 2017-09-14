import React from 'react';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';
import createMockComponent from './createMockComponent';

const Picker = createReactClass({
  propTypes: {
    children: PropTypes.node
  },
  statics: {
    Item: createMockComponent('Picker.Item')
  },
  render() {
    return React.createElement('react-native-mock', null, this.props.children);
  }
});

module.exports = Picker;
