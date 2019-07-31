/* explanation of 'splat' operator aka 'spread' syntax.
The Spread Syntax
The spread syntax is simply three dots: ...
It allows an iterable to expand in places where 0+ arguments are expected.
*/

grid.addEventListener('click', (ev)=> {
  const cell = ev.target;
  const row = cell.parentNode;
  //need to find where target is located on the grid
  const cdx = [...row.children].indexOf(cell); // use spread 'splat' operator * see splat.js
  const rdx = [...row.parentNode.children].indexOf(cell); //fyi row.parentNode is the grid
  console.log(cdx, rdx);
});


/*
example line 11:
let's find where target is located
look at row---row has children, which one is target
use [...] operator because row.children isn't array but want to treat is like ans array so you can use indexOf on it.
Basically,
          -take collection
          -splat it out
          -put it in an Array
*/
