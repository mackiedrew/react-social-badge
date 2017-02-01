'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

require('../node_modules/Font-Awesome/css/font-awesome.min.css');

var ReactSocialBadge = function ReactSocialBadge(props) {

	ReactSocialBadge.PropTypes = {
		size: _react2['default'].PropTypes.string.isRequired,
		circleColor: _react2['default'].PropTypes.string.isRequired,
		iconColor: _react2['default'].PropTypes.string.isRequired
	};

	var iconStyle = {
		color: 'red',
		fontSize: '45pt',
		width: '40px',
		height: '40px'
	};

	return _react2['default'].createElement(
		'div',
		null,
		_react2['default'].createElement('i', { className: 'fa fa-github' })
	);
};

exports['default'] = ReactSocialBadge;
module.exports = exports['default'];