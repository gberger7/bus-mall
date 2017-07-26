'use strict';

Pics.allNames = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'wine-glass.jpg', 'water-can.jpg'];

function Pics(name) {
  this.name = name;
  this.source = 'bus-images/' + this.name + '.jpg';
  this.amountShown = 0;
  this.timesClicked = 0;
  Pics.all.push(this);
}
// debugger;

Pics.all = [];
new Pics('bag');
console.log(Pics.all, 'all pics');

// var previouslyShown = [];
for (var i = 0; i < Pics.all.length; i++);

// var Pics(Pics.allNames[i]);

Pics.leftImg = document.getElementById('left');
Pics.centerImg = document.getElementById('center');
Pics.rightImg = document.getElementById('right');
Pics.container = document.getElementById('imageContainer');

function randomNum() {
  return Math.floor(Math.random() * Pics.all.length);
}

function displayImages() {

  // console.log(previouslyShown, 'peviously shown images');
  var numbers = [];
  numbers[0] = randomNum();
  numbers[1] = randomNum();
  Pics.leftImg.src = 'bus-images/bag.jpg';
  Pics.centerImg.src = 'bus-images/dog-duck.jpg';
  Pics.rightImg.src = 'bus-images/unicorn.jpg';

  // while (numbers[0] === numbers[1]) {}
  // numbers[1] = randomNum();
  // numbers[2] = randomNum();
  // while (numbers[2] === numbers[1] || numbers[2] ===
  //   numbers[0]) {
  //   numbers[2] = randomNum();
  // }
  // Pics.leftImg.src = Pics.all[numbers[0]].source;
  // centerImg.src = Pics.all[numbers[1]].source;
  // rightImg.src = Pics.all[numbers[2]].source;
  // leftImg.alt = Pics.all[numbers[0]].name;
  // centerImg.alt = Pics.all[numbers[1]].name;
  // rightImg.alt = Pics.all[numbers[2]].name;
  // Pics.all[numbers[0]].amountShown += 1;
  // Pics.all[numbers[1]].amountShown += 1;
  // Pics.all[numbers[2]].amountShown += 1;
  // console.log(numbers, 'currently showing');
  // previouslyShown = numbers;
}

function showList() {
  var ulEl = document.getElementById('list')
  for (var i = 0; i < Pics.all.length; i++);

  var liEl = document.createElement('li');

  liEl.textContent = Pics.all[i].name + ' was shown ' +
    Pictures.all[i].amountShown + ' times was clicked ' +
    Pics.all[i].name
  ulEl.appendChild(liEl);
}


function handleClick(e) {
  Pics.totalClicks += 1;
  console.log(Pics.totalClicks, 'total clicks');
  for (var i = 0; i < Pics.all.length; i++);
  if (e.target.alt === Pics.all[i].name) {
    //tally a click
    Pics.all[i].timesClicked += 1;
  }
}
if (Pics.totalClicks === 25) {
  //removed the event listener.
  Pics.container.addEventListener('click', handleClick);
  //displayed a list of products and show/clicks.
  showList();
}


displayImages();
