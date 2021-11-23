'use strict';
// 
// popup products section
function popup_products(el) {
  function popup_init(target) {
    // create new div element for popup style
    let newDiv = document.createElement("div");
    newDiv.className = "popup";
    //
    // Mask area
    let newMask = document.createElement("div")
    newMask.className = "mask hidden";
    // Modal area
    let newModal = document.createElement("section");
    newModal.className = "modal hidden";
    let cloneElement = target.cloneNode(true);
    newModal.appendChild(cloneElement.querySelector("img"));
    newModal.appendChild(cloneElement.querySelector("h2"));
    newModal.appendChild(cloneElement.querySelector("p"));
    // close button
    let newClose = document.createElement("div");
    newClose.className = "close";
    newClose.textContent = "閉じる";
    newModal.appendChild(newClose);
    // append new element for popup product
    newDiv.appendChild(newMask);
    newDiv.appendChild(newModal);
    // target.appendChild(newDiv);
    document.querySelector('body').appendChild(newDiv);
    // add EventListner
    newClose.addEventListener('click', () => {
      // console.log('close clicked');
      newModal.classList.add('hidden');
      newMask.classList.add('hidden');
    });
    newMask.addEventListener('click', () => {
      // ↓　2度書きを避けるため、close要素のclickメソッドを読み出す
      newClose.click();
    });
    target.addEventListener('click', () => {
      newModal.classList.remove('hidden');
      newMask.classList.remove('hidden');
    });
  }
  const targetList = document.querySelectorAll(el);
  targetList.forEach((target) => {
    // console.log(target);
    popup_init(target);
  });
}


// after Load contents
document.addEventListener('DOMContentLoaded', function () {
  hero_appear('.hero');
  isob_appear('.products li');
  popup_products('.products ul li');
});