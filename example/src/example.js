var React = require('react');
var ReactDOM = require('react-dom');
var ReactSocialBadge = require('react-social-badge');

var App = React.createClass({
	render () {
		return (
			<div>
				<ReactSocialBadge url='http://facebook.com/' />
				<ReactSocialBadge url='http://github.com/' />
				<ReactSocialBadge url='http://twitter.com/' />
				<ReactSocialBadge url='http://linkedin.com/' />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
