'use strict';

// popup products section
function popup_products(el) {
  function popup_appear(target) {
    // create new div element for popup style
    let newDiv = document.createElement("div");
    newDiv.className = "popup";
    document.querySelector('body').appendChild(newDiv);
    // target.appendChild(newDiv);
  }
  const targetList = document.querySelectorAll(el);
  targetList.forEach((target) => {
    target.addEventListener('click', function() {
      popup_appear(target);
    });
  });


}


// after Load contents
document.addEventListener('DOMContentLoaded', function () {
  hero_appear('.hero');
  isob_appear('.products li');
  // popup_products('.products li');
});