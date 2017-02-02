// Trying to keep few and reasonably simple dependencies.
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

var _Badge = require('./Badge');

var _Badge2 = _interopRequireDefault(_Badge);

/* This loads Font Awesome icons from the classic bootstrap CDN, rather than including them in this
 * package. Maybe I'll change my mind, but I'd rather have less distribution duplication and the
 * current implimentations of font-awesome for React through NPM have serious disagreements with
 * browserify and I'm not smart enough to figure out the issue. Bare with me.
 */
_cssify2['default'].byUrl('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

/* Simple icons, or rather, icons which have their hostname agree with my preffered version of 
 * their Font Awesome icon name. These are converted to a key:"key" object to be merged later.
 */
var simpleIcons = ['facebook', 'github', 'bitbucket', 'deviantart', 'etsy', 'flickr', 'instagram', 'linkedin', 'meetup', 'paypal', 'skype', 'soundcloud', 'spotify', 'slack', 'twitter', 'wordpress', 'tumblr', 'stumbleupon', 'twitch', 'vimeo', 'yelp'].reduce(function (a, b) {
	a[b] = b;
	return a;
}, {});

/* Merge simple icons with icons who have disagreements between the hostname and Font Awesome icon
 * of my preference.
 */
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

var ReactSocialBadge = function ReactSocialBadge(props) {
	// Collect hostname from provided URL which is a required prop
	var hostname = new URL(props.url).hostname;
	/* Determine the icon we need to pick, the first priority is the manually set icon via props
  * which will override the automatically determined icon via URL parsing. The fallback is a
  * questionmark icon which will hopefully make it clear that there was no icon by the required
  * name.
  */
	var icon = props.icon || urlToIcon[Object.keys(urlToIcon).find(function (x) {
		return hostname.includes(x);
	})] || 'question';

	/* Determine the size of the badge, first check for S/M/L labels, fall back to medium if 
  * no size is specified. If none of these conditions are met, attempt to assign to what is
  * assumed to be a number of pixels specified by users.
  */
	var size = (function () {
		var s = props.size;
		switch (s) {
			case 'small':
				return 30; // px
				break;
			case undefined:
			case 'medium':
				return 45; // px
				break;
			case 'large':
				return 60; // px
				break;
			default:
				return Number(s); // px
				break;
		}
	})();

	// Default width is 60% of container, this is multiplied by specified iconScale
	var iconScale = (Number(props.iconScale) || 1.0) * 0.6;

	/* To deal with expectations I allow for className and badgeClassName to be set.
  * They are simple combined so that people can specify if they desire.
  */
	var badgeClassName = (props.className || '') + ' ' + (props.badgeClassName || '');

	// Add default styling and merge badgeStyle Prop
	var badgeStyle = _extends({
		display: 'inline-block',
		width: size + 'px',
		height: size + 'px',
		borderRadius: '50%',
		margin: '2px',
		backgroundColor: props.badgeColor || 'rgb(187, 0, 0)'
	}, props.badgeStyle);

	// Add default styling and merge iconStyle Prop
	var iconStyle = _extends({
		display: 'inline-block',
		width: '100%',
		fontSize: Math.round(size * iconScale) + 'px',
		color: props.iconColor || 'white',
		textAlign: 'center',
		textDecoration: 'none',
		lineHeight: size + 'px'
	}, props.iconStyle);

	// Create the actual badge with a much less smart component
	return _react2['default'].createElement(_Badge2['default'], {
		url: props.url,
		badgeStyle: badgeStyle,
		iconStyle: iconStyle,
		icon: icon,
		badgeClassName: badgeClassName,
		iconClassName: props.iconClassName
	});
};

// Set PropTypes for component
ReactSocialBadge.propTypes = {
	badgeClassName: _react2['default'].PropTypes.string,
	badgeColor: _react2['default'].PropTypes.string,
	badgeStyle: _react2['default'].PropTypes.object,
	className: _react2['default'].PropTypes.object,
	icon: _react2['default'].PropTypes.string,
	iconClassName: _react2['default'].PropTypes.string,
	iconColor: _react2['default'].PropTypes.string,
	iconScale: _react2['default'].PropTypes.number,
	iconStyle: _react2['default'].PropTypes.object,
	size: _react2['default'].PropTypes.string,
	url: _react2['default'].PropTypes.string.isRequired
};

exports['default'] = ReactSocialBadge;
module.exports = exports['default'];