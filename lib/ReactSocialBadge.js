'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _cssify = require('cssify');

var _cssify2 = _interopRequireDefault(_cssify);

var _urlParse = require('url-parse');

var _urlParse2 = _interopRequireDefault(_urlParse);

_cssify2['default'].byUrl('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

var simpleIcons = ['facebook', 'github', 'bitbucket', 'deviantart', 'etsy', 'flickr', 'instagram', 'linkedin', 'meetup', 'paypal', 'skype', 'soundcloud', 'spotify', 'slack', 'twitter', 'wordpress', 'tumblr', 'stumbleupon', 'twitch', 'vimeo', 'yelp'].reduce(function (a, b) {
	a[b] = b;
	return list;
}, {});

var urlToIcon = _extends({}, simpleIcons, {
	freecodecamp: 'free-code-camp',
	'plus.google': 'google-plus',
	pinterest: 'pinterest-p',
	reddit: 'reddit-alien',
	snapchat: 'snapchat-ghost',
	steamcommunity: 'steam',
	youtube: 'youtube-play',
	stackexchange: 'stack-exchange'
});

console.log(JSON.stringify(urlToIcon, null, 2));

var ReactSocialBadge = function ReactSocialBadge(props) {

	var hostname = new URL(props.url).hostname;

	console.log(hostname);

	var iconKeys = Object.keys(urlToIcon);

	console.log(iconKeys);
	var iconName = iconKeys.find(function (urlKey) {
		console.log(urlKey);
		return hostname.includes(urlKey);
	});

	var iconFromUrl = urlToIcon[iconName];

	console.log(iconFromUrl);

	var icon = props.icon || iconFromUrl || 'question';

	var size = props.size || 40;

	var badgeStyle = {
		display: 'inline-block',
		borderRadius: '50%',
		width: size + 'px',
		height: size + 'px',
		backgroundColor: props.badgeColor || 'grey'
	};

	var iconStyle = {
		color: props.iconColor || 'white',
		fontSize: Math.round(size * 0.6) + 'px',
		textAlign: 'center',
		display: 'inline-block',
		lineHeight: size + 'px',
		width: '100%'
	};

	return _react2['default'].createElement(
		'div',
		{ style: badgeStyle },
		_react2['default'].createElement(
			'a',
			{ href: props.url },
			_react2['default'].createElement('div', { className: 'fa fa-' + icon, style: iconStyle })
		)
	);
};

ReactSocialBadge.PropTypes = {
	url: _react2['default'].PropTypes.string.isRequired,
	size: _react2['default'].PropTypes.string,
	badgeColor: _react2['default'].PropTypes.string,
	iconColor: _react2['default'].PropTypes.string,
	badgeStyle: _react2['default'].PropTypes.object,
	icon: _react2['default'].PropTypes.string
};

exports['default'] = ReactSocialBadge;
module.exports = exports['default'];