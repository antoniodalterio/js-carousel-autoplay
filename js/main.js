'use strict';

// Dichiarazioni variabili
const images = [
  'img/01.jpg',
  'img/02.jpg',
  'img/03.jpg',
  'img/04.jpg',
  'img/05.jpg',
];
const items = document.querySelector('.items');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
let currentItem = 0;

// Ciclo for conteggio = larghezza Array(images)
for (let i = 0; i < images.length; i++) {
  // elemento creato div
  const item = document.createElement('div');
  item.classList.add('item');

  items.append(item);

  if (i === currentItem) {
    item.classList.add('active');
  }

  // elemento creato img
  const img = document.createElement('img');
  item.append(img);
  img.src = images[i];
}

// selettore di tipo per le classi item
const allItem = document.querySelectorAll('.item');

// funzione evento al click della freccia next

let myIntervall;

play.addEventListener('click', function () {
  myIntervall = setInterval(myFun, 1_500);
  return myIntervall;
});
stop.addEventListener('click', function () {
  clearInterval(myIntervall);
});

// funzione evento al click della freccia next

prev.addEventListener('click', function () {
  if (currentItem > 0) {
    allItem[currentItem].classList.remove('active');

    currentItem--;
    allItem[currentItem].classList.add('active');
    console.log(currentItem);
  } else if (currentItem === 0) {
    allItem[currentItem].classList.remove('active');

    currentItem = 4;
    allItem[currentItem].classList.add('active');
  }
});

function myFun() {
  if (currentItem < allItem.length - 1) {
    allItem[currentItem].classList.remove('active');

    currentItem++;
    allItem[currentItem].classList.add('active');
  } else if (currentItem === 4) {
    allItem[currentItem].classList.remove('active');

    currentItem = 0;
    allItem[currentItem].classList.add('active');
  }
}
