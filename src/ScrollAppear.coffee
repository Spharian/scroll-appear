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
      if offset = @getAppearOffset(element.getAttribute("data-appear-offset"))
        continue if offset < 0
        @elements.push
          node: element
          offset: offset
          toggleClass:
            element.getAttribute("data-appear-toggle-class") || @defaultToggleClass
      else
        console.warn("Please set a valid data-appear-offset for #{element.outerHTML}")

  getAppearOffset: (value) ->
    return null unless value

    if intOffset = parseInt(value)
      return intOffset

    for operator in ["+", "-", "/", "*"]
      if (split = value.split(operator)).length == 2
        [value, operand] = split
        break

    try
      elementHeight = document.querySelector(value).clientHeight
      if operand then eval(elementHeight + operator + operand) else elementHeight
    catch
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
