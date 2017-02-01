var React = require('react');
var ReactDOM = require('react-dom');
var SocialBadge = require('react-social-badge');

var App = React.createClass({
	render () {
		return (
			<div>
				<SocialBadge url='http://facebook.com/' />
				<SocialBadge url='http://github.com/' />
				<SocialBadge url='http://twitter.com/' />
				<SocialBadge url='http://linkedin.com/' />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
