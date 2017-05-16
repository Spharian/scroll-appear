# Vanilla Scroll Appear

A simple Vanilla JS library to reveal elements on vertical scroll ([demo](https://www.spharian.be/lab/scroll-appear)).

## Installation

### npm

1. `npm install --save scroll-appear`
2. In your JS code, import the class and instantiate it:
```jsx
import ScrollAppear from "scroll-appear";

new ScrollAppear(".appear");
```

### HTML script include
1. Download the `lib/scroll-appear.min.js` file and include it in your HTML:
```html
<script src="scroll-appear.min.js"></script>
```

2. Instantiate the library somewhere in your JavaScript code:
```js
new ScrollAppear(".appear");
```

## Usage

Set a `data-appear-offset` attribute with an integer value to your elements and choose an "appearing" class. Example:
```html
<button data-appear-offset="800" class="appear hidden">Appearing button</button>
```

Then, by default, an `hidden` class will be added/removed whenever the scroll reaches the given offset.

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
- Better documentation
