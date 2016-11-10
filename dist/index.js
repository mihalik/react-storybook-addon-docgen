'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DocDecorator = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybookAddons = require('@kadira/storybook-addons');

var _storybookAddons2 = _interopRequireDefault(_storybookAddons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DocDecorator = exports.DocDecorator = function (_React$Component) {
  (0, _inherits3.default)(DocDecorator, _React$Component);

  function DocDecorator() {
    (0, _classCallCheck3.default)(this, DocDecorator);
    return (0, _possibleConstructorReturn3.default)(this, (DocDecorator.__proto__ || (0, _getPrototypeOf2.default)(DocDecorator)).apply(this, arguments));
  }

  (0, _createClass3.default)(DocDecorator, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.channel.emit('story-change', this.props.story().type.__docgenInfo);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.story !== this.props.story) {
        this.props.channel.emit('story-change', nextProps.story().type.__docgenInfo);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.story();
    }
  }]);
  return DocDecorator;
}(_react2.default.Component);

exports.default = function (readme) {
  return function (story) {
    return _react2.default.createElement(DocDecorator, { story: story, readme: readme, channel: _storybookAddons2.default.getChannel() });
  };
};