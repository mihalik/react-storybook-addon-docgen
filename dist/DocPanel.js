'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _marked = require('marked');

var _marked2 = _interopRequireDefault(_marked);

var _generateMarkdown = require('./components/generateMarkdown');

var _generateMarkdown2 = _interopRequireDefault(_generateMarkdown);

var _register = require('./register');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import '!style!css!github-markdown-css/github-markdown.css';

var styles = {
  base: {
    boxSizing: 'border-box'
  }
};

var DocPanel = function (_React$Component) {
  _inherits(DocPanel, _React$Component);

  function DocPanel(props) {
    _classCallCheck(this, DocPanel);

    var _this = _possibleConstructorReturn(this, (DocPanel.__proto__ || Object.getPrototypeOf(DocPanel)).call(this, props));

    _this.state = { docgen: null };


    _this._listener = function (d) {
      _this.setState({ docgen: d.docgen });
    };
    return _this;
  }

  _createClass(DocPanel, [{
    key: 'componentDidMount',
    value: function componentDidMount() {

      this.props.channel.on(_register.EVENT_ID, this._listener);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.channel.removeListener(_register.EVENT_ID, this._listener);
    }
  }, {
    key: 'render',
    value: function render() {
      var docgen = this.state.docgen;

      if (!docgen) {
        return null;
      }
      var md = (0, _generateMarkdown2.default)(docgen);
      var html = (0, _marked2.default)(md);
      return _react2.default.createElement('div', { style: styles.base, className: 'markdown-body', dangerouslySetInnerHTML: { __html: html } });
    }
  }]);

  return DocPanel;
}(_react2.default.Component);

exports.default = DocPanel;