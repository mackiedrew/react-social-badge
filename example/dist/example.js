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

},{"react":undefined,"react-dom":undefined,"react-social-badge":undefined}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9tYWNraWUvQ29kZS9yZWFjdC1zb2NpYWwtYmFkZ2UvZXhhbXBsZS9zcmMvZXhhbXBsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdCLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNwQyxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQzs7QUFFaEQsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7O0FBQzNCLE9BQU0sRUFBQyxrQkFBRztBQUNULFNBQ0M7OztHQUNDOztNQUFLLEtBQUssRUFBRSxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQUFBQztJQUM5QixvQkFBQyxXQUFXLElBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxHQUFHLEVBQUMsOEJBQThCLEdBQUc7SUFDL0Qsb0JBQUMsV0FBVyxJQUFDLEdBQUcsRUFBQywrQkFBK0IsR0FBRztJQUNuRCxvQkFBQyxXQUFXLElBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxHQUFHLEVBQUMsc0NBQXNDLEdBQUc7SUFDdkUsb0JBQUMsV0FBVyxJQUFDLFNBQVMsRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLEtBQUssRUFBQyxHQUFHLEVBQUMsdUJBQXVCLEdBQUc7SUFDbEU7R0FDTjs7TUFBSyxLQUFLLEVBQUUsRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEFBQUM7SUFDN0Isb0JBQUMsV0FBVztBQUNYLFNBQUksRUFBQyxPQUFPO0FBQ1osY0FBUyxFQUFDLE9BQU87QUFDakIsZUFBVSxFQUFDLFFBQVE7QUFDbkIsZUFBVSxFQUFFLEVBQUMsWUFBWSxFQUFFLE1BQU0sRUFBQyxBQUFDO0FBQ25DLFFBQUcsRUFBQywyQkFBMkIsR0FBRztJQUNuQyxvQkFBQyxXQUFXO0FBQ1gsU0FBSSxFQUFDLE9BQU87QUFDWixjQUFTLEVBQUMsT0FBTztBQUNqQixlQUFVLEVBQUMsU0FBUztBQUNwQixRQUFHLEVBQUMsZ0NBQWdDLEdBQUc7SUFDeEMsb0JBQUMsV0FBVyxJQUFDLFVBQVUsRUFBQyxTQUFTLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxHQUFHLEVBQUMsK0JBQStCLEdBQUc7SUFDckYsb0JBQUMsV0FBVyxJQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsVUFBVSxFQUFDLGVBQWUsRUFBQyxTQUFTLEVBQUMsZ0JBQWdCLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxHQUFHLEVBQUMscUJBQXFCLEdBQUc7SUFDdkg7R0FDRCxDQUNOO0VBQ0Q7Q0FDRCxDQUFDLENBQUE7O0FBRUYsUUFBUSxDQUFDLE1BQU0sQ0FBQyxvQkFBQyxHQUFHLE9BQUcsRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xudmFyIFNvY2lhbEJhZGdlID0gcmVxdWlyZSgncmVhY3Qtc29jaWFsLWJhZGdlJyk7XG5cbnZhciBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdHJlbmRlciAoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnYmxvY2snfX0+XG5cdFx0XHRcdFx0PFNvY2lhbEJhZGdlIHNpemU9J3NtYWxsJyB1cmw9J2h0dHA6Ly9naXRodWIuY29tL21hY2tpZWRyZXcnIC8+XG5cdFx0XHRcdFx0PFNvY2lhbEJhZGdlIHVybD0naHR0cDovL3R3aXR0ZXIuY29tL21hY2tpZWRyZXcnIC8+XG5cdFx0XHRcdFx0PFNvY2lhbEJhZGdlIHNpemU9J2xhcmdlJyB1cmw9J2h0dHA6Ly9jYS5saW5rZWRpbi5jb20vaW4vbWFja2llZHJldycgLz5cblx0XHRcdFx0XHQ8U29jaWFsQmFkZ2UgaWNvbkNvbG9yPSdnb2xkJyBzaXplPScxNTAnIHVybD0naHR0cDovL2JpdGJ1Y2tldC5jb20vJyAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBzdHlsZT17e2Rpc3BsYXk6J2Jsb2NrJ319PlxuXHRcdFx0XHRcdDxTb2NpYWxCYWRnZSBcblx0XHRcdFx0XHRcdHNpemU9J2xhcmdlJ1xuXHRcdFx0XHRcdFx0aWNvbkNvbG9yPSd3aGl0ZSdcblx0XHRcdFx0XHRcdGJhZGdlQ29sb3I9J29yYW5nZSdcblx0XHRcdFx0XHRcdGJhZGdlU3R5bGU9e3tib3JkZXJSYWRpdXM6ICcyMHB4J319XG5cdFx0XHRcdFx0XHR1cmw9J2h0dHA6Ly9yZWRkaXQuY29tL3IvZHVja3MnIC8+XG5cdFx0XHRcdFx0PFNvY2lhbEJhZGdlIFxuXHRcdFx0XHRcdFx0c2l6ZT0nbGFyZ2UnXG5cdFx0XHRcdFx0XHRpY29uQ29sb3I9J3doaXRlJ1xuXHRcdFx0XHRcdFx0YmFkZ2VDb2xvcj0nIzNiNTk5OCdcblx0XHRcdFx0XHRcdHVybD0naHR0cDovL2ZhY2Vib29rLmNvbS9tYWNraWVkcmV3JyAvPlxuXHRcdFx0XHRcdDxTb2NpYWxCYWRnZSBiYWRnZUNvbG9yPScjMDBhY2VkJyBzaXplPSdsYXJnZScgdXJsPSdodHRwOi8vdHdpdHRlci5jb20vbWFja2llZHJldycgLz5cblx0XHRcdFx0XHQ8U29jaWFsQmFkZ2UgaWNvblNjYWxlPScxLjMnIGJhZGdlQ29sb3I9J3JnYmEoMCwwLDAsMCknIGljb25Db2xvcj0ncmdiKDE4NywgMCwgMCknIHNpemU9J2xhcmdlJyB1cmw9J2h0dHA6Ly95b3V0dWJlLmNvbS8nIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59KVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKVxuIl19
