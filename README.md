# Lightweight Frontend Starter Pack

This starter kit includes Zepto, SASS and ES6 transpile, and default minification.

### Requirements

* npm (and Node v4.x+)
* bundler (and Ruby)

### Setup

* `npm install && bundle install`
* Edit `package.json` - this is important for how the minified files are named!
  * Name
  * Version
  * Description
  * Author
  * License (if appl.)
* Edit `index.html` to point to correct minified css/js -- it uses the naming convention `$npm_package_name.$npm_package_version.min.js` or `.css` respectively

### Usage

Taskrunners read from `css/index.scss` and `js/index.js` only. All additional files will need to be included via the common module patterns: `@import` for SASS and ES6 `import` statements for js.

* `npm run build` -- outputs to `build`
* `npm run watch` -- outputs to `build` and watches your css/js
* `npm run clean` -- deletes the `build` dir

