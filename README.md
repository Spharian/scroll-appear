# Vanilla Scroll Appear

A simple libary to reveal elements on vertical scroll ([demo](https://www.spharian.be/lab/scroll-appear/demo.html)).

## Usage
- Download the `scroll-appear.min.js` file and include it in your HTML: `<script src="scroll-appear.min.js"`
- Set a `data-appear-offset` attribute with an integer value to your elements and choose an "appearing" class. Example: `<button data-appear-offset="800" class="appear hidden">Appearing button</button>`
- Initiate the library somewhere in your JavaScript code: `new ScrollAppear('.appear')`. By default, an `hidden` class will be added/removed whenever the scroll reaches the given offset.

## TODO
- Make sources available
- npm/yarn/bower package
- Better documentation
