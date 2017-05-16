(function() {
  var ScrollAppear,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  this.ScrollAppear = ScrollAppear = (function() {
    function ScrollAppear(selector, options) {
      this.selector = selector;
      this.toggleAppearClass = bind(this.toggleAppearClass, this);
      this.update = bind(this.update, this);
      this.setElements = bind(this.setElements, this);
      this.requestTick = bind(this.requestTick, this);
      this.onScroll = bind(this.onScroll, this);
      this.lastScrollY = 0;
      this.ticking = false;
      this.elements = [];
      this.defaultToggleClass = options.defaultToggleClass || "hidden";
      this.setElements();
      window.addEventListener("scroll", this.onScroll);
    }

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

    ScrollAppear.prototype.setElements = function() {
      var element, i, len, ref, results;
      ref = document.querySelectorAll(this.selector);
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        element = ref[i];
        if (element.dataset.appearOffset) {
          results.push(this.elements.push({
            node: element,
            offset: parseInt(element.dataset.appearOffset),
            toggleClass: element.dataset.appearToggleClass || this.defaultToggleClass
          }));
        } else {
          results.push(console.warn("Please set a data-appear-offset for " + element.outerHTML));
        }
      }
      return results;
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