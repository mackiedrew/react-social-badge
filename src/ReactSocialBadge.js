
import React from 'react'
import cssify from 'cssify'
import urlParse from 'url-parse'

cssify.byUrl('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css')

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

console.log(JSON.stringify(urlToIcon,null,2))

const ReactSocialBadge = (props) => {


	const hostname = new URL(props.url).hostname

	console.log(hostname)


	const iconKeys = Object.keys(urlToIcon)

	console.log(iconKeys)
	const iconName = iconKeys.find((urlKey) => {
			console.log(urlKey)
			return hostname.includes(urlKey)})

	const iconFromUrl = urlToIcon[iconName]

	console.log(iconFromUrl)
	

	const icon = props.icon || iconFromUrl || 'question'

	const size = props.size || 40

	const badgeStyle = {
		display: 'inline-block',
		borderRadius: '50%',
		width: `${size}px`,
		height: `${size}px`,
		backgroundColor: props.badgeColor || 'grey',
	}

	const iconStyle = {
		color: props.iconColor || 'white',
		fontSize:  `${Math.round(size * 0.6)}px`,
		textAlign: 'center',
		display: 'inline-block',
		lineHeight: `${size}px`,
		width: '100%',
	}

	return (
		<div style={badgeStyle}>
			<a href={props.url}>
				<div className={`fa fa-${icon}`} style={iconStyle}></div>
			</a>
		</div>
	)
}

ReactSocialBadge.PropTypes = {
	url: React.PropTypes.string.isRequired,
	size: React.PropTypes.string,
	badgeColor: React.PropTypes.string, 
	iconColor: React.PropTypes.string,
	badgeStyle: React.PropTypes.object,
	icon: React.PropTypes.string,
}


export default ReactSocialBadge
