@ScrollAppear = class ScrollAppear
  constructor: (@selector, options) ->
    @lastScrollY = 0
    @ticking = false
    @elements = []
    @defaultToggleClass = options.defaultToggleClass || "hidden"

    @setElements()
    window.addEventListener "scroll", @onScroll

  setElements: =>
    for element in document.querySelectorAll(@selector)
      if element.dataset.appearOffset
        @elements.push
          node: element
          offset: parseInt(element.dataset.appearOffset)
          toggleClass: element.dataset.appearToggleClass || @defaultToggleClass
      else
        console.warn("Please set a data-appear-offset for #{element.outerHTML}")

  onScroll: =>
    @lastScrollY = window.scrollY
    @requestTick()

  requestTick: =>
    unless @ticking
      requestAnimationFrame @update
      @ticking = true

  update: =>
    @toggleAppearClass element for element in @elements
    @ticking = false

  toggleAppearClass: (element) ->
    if window.scrollY >= element.offset
      element.node.classList.remove(element.toggleClass)
    else
      element.node.classList.add(element.toggleClass)
