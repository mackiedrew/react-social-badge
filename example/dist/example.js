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
				React.createElement(SocialBadge, { iconScale: 1.3, badgeColor: 'rgba(0,0,0,0)', iconColor: 'rgb(187, 0, 0)', size: 'large', url: 'http://youtube.com/' })
			)
		);
	}
});

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

},{"react":undefined,"react-dom":undefined,"react-social-badge":undefined}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9tYWNraWUvQ29kZS9yZWFjdC1zb2NpYWwtYmFkZ2UvZXhhbXBsZS9zcmMvZXhhbXBsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdCLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNwQyxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQzs7QUFFaEQsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7O0FBQzNCLE9BQU0sRUFBQyxrQkFBRztBQUNULFNBQ0M7OztHQUNDOztNQUFLLEtBQUssRUFBRSxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQUFBQztJQUM5QixvQkFBQyxXQUFXLElBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxHQUFHLEVBQUMsOEJBQThCLEdBQUc7SUFDL0Qsb0JBQUMsV0FBVyxJQUFDLEdBQUcsRUFBQywrQkFBK0IsR0FBRztJQUNuRCxvQkFBQyxXQUFXLElBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxHQUFHLEVBQUMsc0NBQXNDLEdBQUc7SUFDdkUsb0JBQUMsV0FBVyxJQUFDLFNBQVMsRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLEtBQUssRUFBQyxHQUFHLEVBQUMsdUJBQXVCLEdBQUc7SUFDbEU7R0FDTjs7TUFBSyxLQUFLLEVBQUUsRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEFBQUM7SUFDN0Isb0JBQUMsV0FBVztBQUNYLFNBQUksRUFBQyxPQUFPO0FBQ1osY0FBUyxFQUFDLE9BQU87QUFDakIsZUFBVSxFQUFDLFFBQVE7QUFDbkIsZUFBVSxFQUFFLEVBQUMsWUFBWSxFQUFFLE1BQU0sRUFBQyxBQUFDO0FBQ25DLFFBQUcsRUFBQywyQkFBMkIsR0FBRztJQUNuQyxvQkFBQyxXQUFXO0FBQ1gsU0FBSSxFQUFDLE9BQU87QUFDWixjQUFTLEVBQUMsT0FBTztBQUNqQixlQUFVLEVBQUMsU0FBUztBQUNwQixRQUFHLEVBQUMsZ0NBQWdDLEdBQUc7SUFDeEMsb0JBQUMsV0FBVyxJQUFDLFVBQVUsRUFBQyxTQUFTLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxHQUFHLEVBQUMsK0JBQStCLEdBQUc7SUFDckYsb0JBQUMsV0FBVyxJQUFDLFNBQVMsRUFBRSxHQUFHLEFBQUMsRUFBQyxVQUFVLEVBQUMsZUFBZSxFQUFDLFNBQVMsRUFBQyxnQkFBZ0IsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxxQkFBcUIsR0FBRztJQUN2SDtHQUNELENBQ047RUFDRDtDQUNELENBQUMsQ0FBQTs7QUFFRixRQUFRLENBQUMsTUFBTSxDQUFDLG9CQUFDLEdBQUcsT0FBRyxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0RE9NID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG52YXIgU29jaWFsQmFkZ2UgPSByZXF1aXJlKCdyZWFjdC1zb2NpYWwtYmFkZ2UnKTtcblxudmFyIEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0cmVuZGVyICgpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdibG9jayd9fT5cblx0XHRcdFx0XHQ8U29jaWFsQmFkZ2Ugc2l6ZT0nc21hbGwnIHVybD0naHR0cDovL2dpdGh1Yi5jb20vbWFja2llZHJldycgLz5cblx0XHRcdFx0XHQ8U29jaWFsQmFkZ2UgdXJsPSdodHRwOi8vdHdpdHRlci5jb20vbWFja2llZHJldycgLz5cblx0XHRcdFx0XHQ8U29jaWFsQmFkZ2Ugc2l6ZT0nbGFyZ2UnIHVybD0naHR0cDovL2NhLmxpbmtlZGluLmNvbS9pbi9tYWNraWVkcmV3JyAvPlxuXHRcdFx0XHRcdDxTb2NpYWxCYWRnZSBpY29uQ29sb3I9J2dvbGQnIHNpemU9JzE1MCcgdXJsPSdodHRwOi8vYml0YnVja2V0LmNvbS8nIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7ZGlzcGxheTonYmxvY2snfX0+XG5cdFx0XHRcdFx0PFNvY2lhbEJhZGdlIFxuXHRcdFx0XHRcdFx0c2l6ZT0nbGFyZ2UnXG5cdFx0XHRcdFx0XHRpY29uQ29sb3I9J3doaXRlJ1xuXHRcdFx0XHRcdFx0YmFkZ2VDb2xvcj0nb3JhbmdlJ1xuXHRcdFx0XHRcdFx0YmFkZ2VTdHlsZT17e2JvcmRlclJhZGl1czogJzIwcHgnfX1cblx0XHRcdFx0XHRcdHVybD0naHR0cDovL3JlZGRpdC5jb20vci9kdWNrcycgLz5cblx0XHRcdFx0XHQ8U29jaWFsQmFkZ2UgXG5cdFx0XHRcdFx0XHRzaXplPSdsYXJnZSdcblx0XHRcdFx0XHRcdGljb25Db2xvcj0nd2hpdGUnXG5cdFx0XHRcdFx0XHRiYWRnZUNvbG9yPScjM2I1OTk4J1xuXHRcdFx0XHRcdFx0dXJsPSdodHRwOi8vZmFjZWJvb2suY29tL21hY2tpZWRyZXcnIC8+XG5cdFx0XHRcdFx0PFNvY2lhbEJhZGdlIGJhZGdlQ29sb3I9JyMwMGFjZWQnIHNpemU9J2xhcmdlJyB1cmw9J2h0dHA6Ly90d2l0dGVyLmNvbS9tYWNraWVkcmV3JyAvPlxuXHRcdFx0XHRcdDxTb2NpYWxCYWRnZSBpY29uU2NhbGU9ezEuM30gYmFkZ2VDb2xvcj0ncmdiYSgwLDAsMCwwKScgaWNvbkNvbG9yPSdyZ2IoMTg3LCAwLCAwKScgc2l6ZT0nbGFyZ2UnIHVybD0naHR0cDovL3lvdXR1YmUuY29tLycgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn0pXG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpXG4iXX0=
