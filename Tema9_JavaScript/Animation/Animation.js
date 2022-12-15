/* Exercitiul original

let BlackCat = document.getElementsByTagName('img')[0];
BlackCat.style.left = '0px';
function catWalk() {
  BlackCat.style.left = (parseInt(BlackCat.style.left) + 10) + 'px';
}
window.setInterval(catWalk, 50);

*/


/* Bonus1

let BlackCat = document.getElementsByTagName('img')[0];
BlackCat.style.left = '0px';
function catWalk() {
  let currentLeft = parseInt(BlackCat.style.left);
  BlackCat.style.left = (currentLeft + 10) + 'px';
  if (currentLeft > (window.innerWidth-BlackCat.width)) {
    BlackCat.style.left = '0px';
  }
}
window.setInterval(catWalk, 50);

*/



/* Bonus2 */
let BlackCat = document.getElementsByTagName('img')[0];
BlackCat.style.left = '0px';
let walkForwards = true;
function catWalk() {
  let currentLeft = parseInt(BlackCat.style.left);
  
  if (walkForwards && (currentLeft > (window.innerWidth-BlackCat.width))) {
    walkForwards = false;
  }
  if (!walkForwards && (currentLeft <= 0)) {
    walkForwards = true;
  }
  
  if (walkForwards) {
    BlackCat.style.left = (currentLeft + 10) + 'px';
  } else {
    BlackCat.style.left = (currentLeft - 10) + 'px';
  }
}
window.setInterval(catWalk, 50);



/* Bonus3 */