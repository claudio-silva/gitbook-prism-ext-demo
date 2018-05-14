Prism.hooks.add ('complete', function (env) {
  if (!env.code) return;

  var lnumbers = env.element.querySelector ('.line-numbers-rows');
  if (lnumbers) {
    // Hide the line numbers when there is only one.
    if (lnumbers.children.length == 1) {
      lnumbers.remove ();
      env.element.parentElement.className = env.element.parentElement.className.replace (/line-numbers/, '');
    }
  }
});
