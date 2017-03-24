'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybookAddons = require('@kadira/storybook-addons');

var _storybookAddons2 = _interopRequireDefault(_storybookAddons);

var _DocPanel = require('./DocPanel');

var _DocPanel2 = _interopRequireDefault(_DocPanel);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_storybookAddons2.default.register(_constants.ADDON_ID, function (api) {
  var channel = _storybookAddons2.default.getChannel();
  _storybookAddons2.default.addPanel(_constants.PANEL_ID, {
    title: 'Docs',
    render: function render() {
      return _react2.default.createElement(_DocPanel2.default, { channel: channel, api: api });
    }
  });
});