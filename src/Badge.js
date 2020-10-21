import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Badge = (props) => (
	<>
		<div className={props.badgeClassName} style={props.badgeStyle}>
			<a href={props.url}>
				<FontAwesomeIcon
					className={props.iconClassName}
					icon={["fab", props.icon]}
					style={props.iconStyle}
					fixedWith
					transform="shrink-1 down-5"
				/>
			</a>
		</div>
	</>
);

Badge.propTypes = {
	badgeClassName: PropTypes.string,
	badgeStyle: PropTypes.object.isRequired,
	icon: PropTypes.string.isRequired,
	iconClassName: PropTypes.string,
	iconStyle: PropTypes.object.isRequired,
	url: PropTypes.string.isRequired,
};

export default Badge;
