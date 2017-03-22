'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybookAddons = require('@kadira/storybook-addons');

var _storybookAddons2 = _interopRequireDefault(_storybookAddons);

var _register = require('./register');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  var story = fn();

  var channel = _storybookAddons2.default.getChannel();
  channel.emit(_register.EVENT_ID, { docgen: story.type.__docgenInfo });
  return fn();
};