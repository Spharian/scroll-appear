# Vanilla Scroll Appear

A simple Vanilla JS library to reveal elements on vertical scroll ([demo](https://www.spharian.be/lab/scroll-appear)).

## Usage
- Download the `dist/scroll-appear.min.js` file and include it in your HTML: `<script src="scroll-appear.min.js"></script>`
- Set a `data-appear-offset` attribute with an integer value to your elements and choose an "appearing" class. Example: `<button data-appear-offset="800" class="appear hidden">Appearing button</button>`
- Initiate the library somewhere in your JavaScript code: `new ScrollAppear('.appear')`. By default, an `hidden` class will be added/removed whenever the scroll reaches the given offset.

## Browser Compatibility
- Chrome 24+
- Safari 6.1+
- iOS Safari 7.1+
- Firefox 23+
- Opera 15+
- IE10+

## Development
- `npm install`
- `gulp` or `gulp watch` if you prefer to launch a livereload server

## TODO
- npm/yarn/bower package
- Better documentation
