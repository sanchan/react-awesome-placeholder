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

var _LinesPlaceholder = require('../LinesPlaceholder');

var _LinesPlaceholder2 = _interopRequireDefault(_LinesPlaceholder);

var _styles = require('./styles.css');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TablePlaceholder = function (_React$Component) {
  _inherits(TablePlaceholder, _React$Component);

  function TablePlaceholder() {
    _classCallCheck(this, TablePlaceholder);

    return _possibleConstructorReturn(this, (TablePlaceholder.__proto__ || Object.getPrototypeOf(TablePlaceholder)).apply(this, arguments));
  }

  _createClass(TablePlaceholder, [{
    key: 'render',
    value: function render() {
      var rows = this.props.rows || 5;
      var rowHeight = this.props.rowSpacing || 30;
      var rowSpacing = this.props.rowSpacing || 16;
      var columnSpacing = this.props.columnSpacing || 16;
      var headerHeight = this.props.headerHeight || 50;
      var columns = [].concat(_toConsumableArray(Array(rows)));

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: _styles2.default.columns, style: { marginBottom: rowSpacing } },
          columns.map(function (v, i) {
            var isLast = columns.length - 1 === i;
            var width = 100 / parseInt(rows) + '%';

            return _react2.default.createElement(
              'div',
              {
                key: i,
                style: {
                  marginRight: isLast ? 0 : columnSpacing,
                  width: width
                }
              },
              _react2.default.createElement(_AnimatedBackground2.default, { height: headerHeight })
            );
          })
        ),
        _react2.default.createElement(_LinesPlaceholder2.default, {
          rows: this.props.rows,
          lineHeight: rowHeight,
          lineSpacing: rowSpacing
        })
      );
    }
  }]);

  return TablePlaceholder;
}(_react2.default.Component);

TablePlaceholder.propTypes = {
  rows: _propTypes2.default.number,
  columns: _propTypes2.default.number,
  rowHeight: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  rowSpacing: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  headerHeight: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  columnSpacing: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
};
exports.default = TablePlaceholder;