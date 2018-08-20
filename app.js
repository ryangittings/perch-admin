$helps = document.querySelectorAll(".inline-help");

$helps.forEach(help => {
  var found = [],          // an array to collect the strings that are found
    rxp = /{([^}]+)}/g,
    curMatch;

  while( curMatch = rxp.exec( help.innerHTML ) ) {
    found.push( curMatch[1] );
  }

  found.forEach(brace => {
    var $target = document.querySelector("[id*='_" + brace + "']");
    help.innerHTML = help.innerHTML.replace('{' + brace + '}', $target.value);
  });
});