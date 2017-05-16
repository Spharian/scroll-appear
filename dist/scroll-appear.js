(function() {
  var ScrollAppear,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  this.ScrollAppear = ScrollAppear = (function() {
    function ScrollAppear(selector, options) {
      this.selector = selector;
      this.update = bind(this.update, this);
      this.requestTick = bind(this.requestTick, this);
      this.onScroll = bind(this.onScroll, this);
      this.setElements = bind(this.setElements, this);
      this.lastScrollY = 0;
      this.ticking = false;
      this.elements = [];
      this.defaultToggleClass = options.defaultToggleClass || "hidden";
      this.setElements();
      window.addEventListener("scroll", this.onScroll);
    }

    ScrollAppear.prototype.setElements = function() {
      var appearOffset, element, i, len, ref, results;
      ref = document.querySelectorAll(this.selector);
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        element = ref[i];
        if (appearOffset = element.getAttribute('data-appear-offset')) {
          results.push(this.elements.push({
            node: element,
            offset: parseInt(appearOffset),
            toggleClass: element.getAttribute('data-appear-toggle-class') || this.defaultToggleClass
          }));
        } else {
          results.push(console.warn("Please set a data-appear-offset for " + element.outerHTML));
        }
      }
      return results;
    };

    ScrollAppear.prototype.onScroll = function() {
      this.lastScrollY = window.scrollY;
      return this.requestTick();
    };

    ScrollAppear.prototype.requestTick = function() {
      if (!this.ticking) {
        requestAnimationFrame(this.update);
        return this.ticking = true;
      }
    };

    ScrollAppear.prototype.update = function() {
      var element, i, len, ref;
      ref = this.elements;
      for (i = 0, len = ref.length; i < len; i++) {
        element = ref[i];
        this.toggleAppearClass(element);
      }
      return this.ticking = false;
    };

    ScrollAppear.prototype.toggleAppearClass = function(element) {
      if (window.scrollY >= element.offset) {
        return element.node.classList.remove(element.toggleClass);
      } else {
        return element.node.classList.add(element.toggleClass);
      }
    };

    return ScrollAppear;

  })();

}).call(this);
