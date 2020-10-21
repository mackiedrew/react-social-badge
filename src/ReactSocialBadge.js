// Trying to keep few and reasonably simple dependencies.
import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";
import Badge from "./Badge";

library.add(fab, fas);

/* Simple icons, or rather, icons which have their hostname agree with my preffered version of
 * their Font Awesome icon name. These are converted to a key:"key" object to be merged later.
 */
const simpleIcons = [
	"facebook",
	"github",
	"bitbucket",
	"deviantart",
	"etsy",
	"flickr",
	"instagram",
	"linkedin",
	"meetup",
	"paypal",
	"skype",
	"soundcloud",
	"spotify",
	"slack",
	"twitter",
	"wordpress",
	"tumblr",
	"stumbleupon",
	"twitch",
	"vimeo",
	"yelp",
	"youtube",
].reduce((a, b) => {
	a[b] = b;
	return a;
}, {});

/* Merge simple icons with icons who have disagreements between the hostname and Font Awesome icon
 * of my preference.
 */
const urlToIcon = {
	...simpleIcons,
	freecodecamp: "free-code-camp",
	"plus.google": "google-plus",
	pinterest: "pinterest-p",
	reddit: "reddit-alien",
	snapchat: "snapchat-ghost",
	steamcommunity: "steam",
	stackexchange: "stack-exchange",
};

const ReactSocialBadge = (props) => {
	// Collect hostname from provided URL which is a required prop
	const hostname = new URL(props.url).hostname;
	/* Determine the icon we need to pick, the first priority is the manually set icon via props
	 * which will override the automatically determined icon via URL parsing. The fallback is a
	 * questionmark icon which will hopefully make it clear that there was no icon by the required
	 * name.
	 */
	const icon =
		props.icon ||
		urlToIcon[Object.keys(urlToIcon).find((x) => hostname.includes(x))] ||
		"question";

	/* Determine the size of the badge, first check for S/M/L labels, fall back to medium if
	 * no size is specified. If none of these conditions are met, attempt to assign to what is
	 * assumed to be a number of pixels specified by users.
	 */
	const size = (() => {
		const s = props.size;
		switch (s) {
			case "small":
				return 30; // px
			case undefined:
			case "medium":
				return 45; // px
			case "large":
				return 60; // px
			default:
				return Number(s); // px
		}
	})();

	// Default width is 60% of container, this is multiplied by specified iconScale
	const iconScale = (Number(props.iconScale) || 1.0) * 0.6;

	/* To deal with expectations I allow for className and badgeClassName to be set.
	 * They are simple combined so that people can specify if they desire.
	 */
	const badgeClassName =
		(props.className || "") + " " + (props.badgeClassName || "");

	// Add default styling and merge badgeStyle Prop
	const badgeStyle = {
		display: "inline-block",
		width: `${size}px`,
		height: `${size}px`,
		borderRadius: "50%",
		margin: "2px",
		backgroundColor: props.badgeColor || "rgb(187, 0, 0)",
		...props.badgeStyle,
	};

	// Add default styling and merge iconStyle Prop
	const iconStyle = {
		display: "inline-block",
		width: "100%",
		fontSize: `${Math.round(size * iconScale)}px`,
		color: props.iconColor || "white",
		textAlign: "center",
		textDecoration: "none",
		lineHeight: `${size}px`,
		...props.iconStyle,
	};

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
	);
};

// Set PropTypes for component
ReactSocialBadge.propTypes = {
	badgeClassName: PropTypes.string,
	badgeColor: PropTypes.string,
	badgeStyle: PropTypes.object,
	className: PropTypes.object,
	icon: PropTypes.string,
	iconClassName: PropTypes.string,
	iconColor: PropTypes.string,
	iconScale: PropTypes.number,
	iconStyle: PropTypes.object,
	size: PropTypes.string,
	url: PropTypes.string.isRequired,
};

export default ReactSocialBadge;
