# Vanilla Scroll Appear

A simple Vanilla JS library to reveal elements on vertical scroll (1.2 KB minified and gzipped, no dependencies).

Check the [live demo](https://www.spharian.be/lab/scroll-appear).

## Installation

### npm

Install the package:
```
$ npm install --save scroll-appear
```

Import the class:
```jsx
import ScrollAppear from "scroll-appear";
```

### HTML script tag
Download the `lib/scroll-appear.min.js` file and include it in your HTML:
```html
<script src="scroll-appear.min.js"></script>
```

## Usage

In your HTML, set a [`data-appear-offset`](#integer-offset) attribute to your elements and choose an "appearing" class.

In your JavaScript, instantiate the `ScrollAppear` class:
```js
new ScrollAppear(".appear");
```

By default, an `hidden` class will be added/removed whenever the scroll reaches the given offset. Read the [Configuration](#integer-data-appear-offset) section to change this class name.

### Integer offset
```html
<button data-appear-offset="800" class="appear hidden">Appearing button</button>
```

### Element based offset
```html
<button data-appear-offset="#element+100" class="appear hidden">Appearing button</button>
```
Uses (`#element`'s height `+ 100`)  as offset.

**Operators available:** `+` `-` `/` `*`

## Configuration

The `ScrollAppear` class accepts an options hash as second argument. Available options:

Option               | Type   | Default  | Description
-------------------- | ------ | -------- | -----------
`defaultToggleClass` | string | `hidden` | Name of the added/removed class when the element scroll offset is reached/unreached.

Some data attributes are also available for the **DOM elements**:

Option               | Type    | Default         | Description
-------------------- | ------- | --------------- | -----------
`data-appear-offset` | integer, string | null (required) | Whenever the scroll height is equal to this value, the default class (`hidden` if not changed in global options) is removed.
`data-appear-toggle-class` | string | null | Name of the added/removed class when the element scroll offset is reached/unreached. Overrides the global options.

## Browser Compatibility
- Chrome 24+
- Safari 6.1+
- iOS Safari 7.1+
- Firefox 23+
- Opera 15+
- IE10+

## Development
- Clone this repo
- `npm install`
- `gulp` or `gulp watch` if you prefer to launch a livereload server
