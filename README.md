# React Social Badge

The purpose of this component is to add a cookie-cutter social badge to use as a component
in 


## Demo & Examples

Live demo: [MackieDrew.github.io/react-social-badge](http://MackieDrew.github.io/react-social-badge/)

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Installation

The easiest way to use react-social-badge is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-social-badge.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-social-badge --save
```


## Usage

You only need to include 

```
import SocialBadge from 'react-social-badge')

<SocialBadge url='http://facebook.com' />
```

### Props
| Prop              | Type       | Description |
|-------------------|------------|-------------|
| `checked`         | _boolean_  | If `true`, the toggle is checked. If `false`, the toggle is unchecked. Use this if you want to treat the toggle as a controlled component |
| `defaultChecked`  | _boolean_  | If `true` on initial render, the toggle is checked. If `false` on initial render, the toggle is unchecked. Use this if you want to treat the toggle as an uncontrolled component |
| `onChange`        | _function_ | Callback function to invoke when the user clicks on the toggle. The function signature should be the following: `function(e) { }`. To get the current checked status from the event, use `e.target.checked`. |
| `name`            | _string_   | The value of the `name` attribute of the wrapped \<input\> element |
| `value`           | _string_   | The value of the `value` attribute of the wrapped \<input\> element |
| `id`              | _string_   | The value of the `id` attribute of the wrapped \<input\> element |
| `aria-labelledby` | _string_   | The value of the `aria-labelledby` attribute of the wrapped \<input\> element |
| `aria-label`      | _string_   | The value of the `aria-label` attribute of the wrapped \<input\> element |
| `disabled`        | _boolean_  | If `true`, the toggle is enabled. If `false`, the toggle is disabled |

### Notes

__ADDITIONAL USAGE NOTES__


## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## License

MIT License (See /LICENSE for details.)

Copyright (c) 2017 Mackie Drew.

