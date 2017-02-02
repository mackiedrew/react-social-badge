import React from 'react'

const Badge = (props) =>
  <div className={props.badgeClassName} style={props.badgeStyle}>
      <a
        href={props.url}
        className={`fa fa-${props.icon} ${props.iconClassName}`}
        style={props.iconStyle}>
      </a>
  </div>

Badge.propTypes = {
  badgeClassName: React.PropTypes.string,
	badgeStyle: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string.isRequired,
  iconClassName: React.PropTypes.string,
	iconStyle: React.PropTypes.string.isRequired,
  url: React.PropTypes.string.isRequired,
}

export default Badge