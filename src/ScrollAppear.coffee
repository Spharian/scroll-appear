@ScrollAppear = class ScrollAppear
  constructor: (@selector, options = {}) ->
    @ticking = false
    @defaultToggleClass = options.defaultToggleClass || "hidden"

    @setElements()
    window.addEventListener "scroll", @onScroll
    window.addEventListener "resize", @setElements

  setElements: =>
    @elements = []

    for element in document.querySelectorAll(@selector)
      if (offset = @getAppearOffset(element.getAttribute("data-appear-offset"))) != null
        @elements.push
          node: element
          offset: offset
          toggleClass:
            element.getAttribute("data-appear-toggle-class") || @defaultToggleClass
      else
        console.warn("Please set a valid data-appear-offset for #{element.outerHTML}")

  getAppearOffset: (offset) ->
    if parsedOffset = parseInt(offset)
      return parsedOffset

    getElement = (offset) ->
      try
        document.querySelector(offset)
      catch
        null

    for operator in ["+", "-", "/", "*"]
      if (split = offset.split(operator)).length == 2
        if element = getElement(split[0])
          return eval(element.clientHeight + operator + split[1])
    if element = getElement(offset)
      return element.clientHeight

    null

  onScroll: =>
    @requestTick() unless @ticking

  requestTick: ->
    requestAnimationFrame(@update)
    @ticking = true

  update: =>
    @scrollY = window.pageYOffset
    @toggleAppearClass element for element in @elements
    @ticking = false

  toggleAppearClass: (element) ->
    if @scrollY >= element.offset
      element.node.classList.remove(element.toggleClass)
    else
      element.node.classList.add(element.toggleClass)

module.exports = @ScrollAppear unless typeof module == "undefined"
