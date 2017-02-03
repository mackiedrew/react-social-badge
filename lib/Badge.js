'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Badge = function Badge(props) {
  return _react2['default'].createElement(
    'div',
    { className: props.badgeClassName, style: props.badgeStyle },
    _react2['default'].createElement('a', {
      href: props.url,
      className: 'fa fa-' + props.icon + ' ' + props.iconClassName,
      style: props.iconStyle })
  );
};

Badge.propTypes = {
  badgeClassName: _react2['default'].PropTypes.string,
  badgeStyle: _react2['default'].PropTypes.object.isRequired,
  icon: _react2['default'].PropTypes.string.isRequired,
  iconClassName: _react2['default'].PropTypes.string,
  iconStyle: _react2['default'].PropTypes.object.isRequired,
  url: _react2['default'].PropTypes.string.isRequired
};

exports['default'] = Badge;
module.exports = exports['default'];