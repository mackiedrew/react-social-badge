require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var SocialBadge = require('react-social-badge');

var App = React.createClass({
	displayName: 'App',

	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'div',
				{ style: { display: 'block' } },
				React.createElement(SocialBadge, { size: 'small', url: 'http://github.com/mackiedrew' }),
				React.createElement(SocialBadge, { url: 'http://twitter.com/mackiedrew' }),
				React.createElement(SocialBadge, { size: 'large', url: 'http://ca.linkedin.com/in/mackiedrew' }),
				React.createElement(SocialBadge, { iconColor: 'gold', size: '150', url: 'http://bitbucket.com/' })
			),
			React.createElement(
				'div',
				{ style: { display: 'block' } },
				React.createElement(SocialBadge, {
					size: 'large',
					iconColor: 'white',
					badgeColor: 'orange',
					badgeStyle: { borderRadius: '20px' },
					url: 'http://reddit.com/r/ducks' }),
				React.createElement(SocialBadge, {
					size: 'large',
					iconColor: 'white',
					badgeColor: '#3b5998',
					url: 'http://facebook.com/mackiedrew' }),
				React.createElement(SocialBadge, { badgeColor: '#00aced', size: 'large', url: 'http://twitter.com/mackiedrew' }),
				React.createElement(SocialBadge, { iconScale: '1.3', badgeColor: 'rgba(0,0,0,0)', iconColor: 'rgb(187, 0, 0)', size: 'large', url: 'http://youtube.com/' })
			)
		);
	}
});

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

},{"react":undefined,"react-dom":undefined,"react-social-badge":undefined}]},{},[1]);
