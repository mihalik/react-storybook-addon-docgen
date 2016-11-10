'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybookAddons = require('@kadira/storybook-addons');

var _storybookAddons2 = _interopRequireDefault(_storybookAddons);

var _DocPanel = require('./DocPanel');

var _DocPanel2 = _interopRequireDefault(_DocPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ADDON_ID = 'storybook-addon-docgen';
var PANEL_ID = ADDON_ID + '/doc-panel';

_storybookAddons2.default.register(ADDON_ID, function (api) {
  var channel = _storybookAddons2.default.getChannel();
  _storybookAddons2.default.addPanel(PANEL_ID, {
    title: 'Docs',
    render: function render() {
      return _react2.default.createElement(_DocPanel2.default, { channel: channel, api: api });
    }
  });
});