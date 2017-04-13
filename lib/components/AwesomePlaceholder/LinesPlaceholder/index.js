'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AnimatedBackground = require('../AnimatedBackground');

var _AnimatedBackground2 = _interopRequireDefault(_AnimatedBackground);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinesPlaceholder = function (_React$Component) {
  _inherits(LinesPlaceholder, _React$Component);

  function LinesPlaceholder() {
    _classCallCheck(this, LinesPlaceholder);

    return _possibleConstructorReturn(this, (LinesPlaceholder.__proto__ || Object.getPrototypeOf(LinesPlaceholder)).apply(this, arguments));
  }

  _createClass(LinesPlaceholder, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        [].concat(_toConsumableArray(Array(this.props.rows || 8))).map(function (v, i) {
          return _react2.default.createElement(
            'div',
            { key: i, style: { marginBottom: (_this2.props.lineSpacing || 16) + 'px' } },
            _react2.default.createElement(_AnimatedBackground2.default, { height: 30 })
          );
        })
      );
    }
  }]);

  return LinesPlaceholder;
}(_react2.default.Component);

LinesPlaceholder.propTypes = {
  rows: _propTypes2.default.number,
  lineHeight: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  lineSpacing: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
};
exports.default = LinesPlaceholder;