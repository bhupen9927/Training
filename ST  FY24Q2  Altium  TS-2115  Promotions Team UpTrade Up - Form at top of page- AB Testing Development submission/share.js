function live(selector, event, callback, context) {
  function addEvent(el, type, handler) {
    if (el.attachEvent) el.attachEvent('on' + type, handler);
    else el.addEventListener(type, handler);
  }
  this.Element &&
    (function (ElementPrototype) {
      ElementPrototype.matches =
        ElementPrototype.matches ||
        ElementPrototype.matchesSelector ||
        ElementPrototype.webkitMatchesSelector ||
        ElementPrototype.msMatchesSelector ||
        function (selector) {
          var node = this,
            nodes = (node.parentNode || node.document).querySelectorAll(selector),
            i = -1;
          while (nodes[++i] && nodes[i] != node);
          return !!nodes[i];
        };
    })(Element.prototype);
  function live(selector, event, callback, context) {
    addEvent(context || document, event, function (e) {
      var found,
        el = e.target || e.srcElement;
      while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
      if (found) callback.call(el, e);
    });
  }
  live(selector, event, callback, context);
};


live('.s-hero__block-btn .chat-btn, .s-features__btn .chat-btn', 'click', function () {
  console.log('Chat to learn more');
});

live('.s-features__features .b-features-2__block a', 'click', function () {
  console.log('Click on Learn more');
});



