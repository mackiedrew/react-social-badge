// Trying to keep few and reasonably simple dependencies.
import React from 'react'
import cssify from 'cssify'
import urlParse from 'url-parse'
import Badge from './Badge'

/* This loads Font Awesome icons from the classic bootstrap CDN, rather than including them in this
 * package. Maybe I'll change my mind, but I'd rather have less distribution duplication and the
 * current implimentations of font-awesome for React through NPM have serious disagreements with
 * browserify and I'm not smart enough to figure out the issue. Bare with me.
 */
cssify.byUrl('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css')

/* Simple icons, or rather, icons which have their hostname agree with my preffered version of 
 * their Font Awesome icon name. These are converted to a key:"key" object to be merged later.
 */
const simpleIcons = [
	'facebook',
	'github',
	'bitbucket',
	'deviantart',
	'etsy',
	'flickr',
	'instagram',
	'linkedin',
	'meetup',
	'paypal',
	'skype',
	'soundcloud',
	'spotify',
	'slack',
	'twitter',
	'wordpress',
	'tumblr',
	'stumbleupon',
	'twitch',
	'vimeo',
	'yelp',
	].reduce((a, b) => {
		a[b] = b
		return a
	}, {})

/* Merge simple icons with icons who have disagreements between the hostname and Font Awesome icon
 * of my preference.
 */
const urlToIcon = {
	...simpleIcons,
	freecodecamp: 'free-code-camp',
	'plus.google': 'google-plus',
	pinterest: 'pinterest-p',
	reddit: 'reddit-alien',
	snapchat: 'snapchat-ghost',
	steamcommunity: 'steam',
	youtube: 'youtube-play',
	stackexchange: 'stack-exchange',
}

const ReactSocialBadge = (props) => {
	// Collect hostname from provided URL which is a required prop
	const hostname = new URL(props.url).hostname
	/* Determine the icon we need to pick, the first priority is the manually set icon via props
	 * which will override the automatically determined icon via URL parsing. The fallback is a
	 * questionmark icon which will hopefully make it clear that there was no icon by the required
	 * name.
	 */
	const icon =
		props.icon ||
		urlToIcon[Object.keys(urlToIcon).find((x) => hostname.includes(x))] ||
		'question'

	/* Determine the size of the badge, first check for S/M/L labels, fall back to medium if 
	 * no size is specified. If none of these conditions are met, attempt to assign to what is
	 * assumed to be a number of pixels specified by users.
	 */
	const size = (() => {
		const s = props.size
		switch (s) {
			case 'small':
				return 30 // px
				break
			case undefined:
			case 'medium':
				return 45 // px
				break
			case 'large':
				return 60 // px
				break
			default:
				return Number(s) // px
				break
		}
	})()

	// Default width is 60% of container, this is multiplied by specified iconScale
	const iconScale = (Number(props.iconScale) || 1.0) * 0.6

	/* To deal with expectations I allow for className and badgeClassName to be set.
	 * They are simple combined so that people can specify if they desire.
	 */
	const badgeClassName = (props.className || '') + ' ' + (props.badgeClassName || '')

	// Add default styling and merge badgeStyle Prop
	const badgeStyle = {
		display: 'inline-block',
		width: `${size}px`,
		height: `${size}px`,
		borderRadius: '50%',
		margin: '2px',
		backgroundColor: props.badgeColor || 'rgb(187, 0, 0)',
		...props.badgeStyle,
	}

	// Add default styling and merge iconStyle Prop
	const iconStyle = {
		display: 'inline-block',
		width: '100%',
		fontSize: `${Math.round(size * iconScale)}px`,
		color: props.iconColor || 'white',
		textAlign: 'center',
		textDecoration: 'none',
		lineHeight: `${size}px`,
		...props.iconStyle,
	}

	// Create the actual badge with a much less smart component
	return (
		<Badge
			url={props.url}
			badgeStyle={badgeStyle}
			iconStyle={iconStyle}
			icon={icon}
			badgeClassName={badgeClassName}
			iconClassName={props.iconClassName}
		/>
	)
}

// Set PropTypes for component
ReactSocialBadge.propTypes = {
	badgeClassName: React.PropTypes.string,
	badgeColor: React.PropTypes.string, 
	badgeStyle: React.PropTypes.object,
	className: React.PropTypes.object,
	icon: React.PropTypes.string,
	iconClassName: React.PropTypes.string,
	iconColor: React.PropTypes.string,
	iconScale: React.PropTypes.number,
	iconStyle: React.PropTypes.object,
	size: React.PropTypes.string,
	url: React.PropTypes.string.isRequired,
}

export default ReactSocialBadge
