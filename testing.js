'use strict';

var completePics = [];
var totalClicks = 0;
var previouslyShown = [];
Pics.all = [];
Pics.allImgz = [document.getElementById('center'), document.getElementById('right'), document.getElementById('left')];

Pics.allNames = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg',
  'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg',
  'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png',
  'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'wine-glass.jpg', 'water-can.jpg'
];


function Pics(name) {
  this.name = name;
  this.source = 'bus-images/' + this.name;
  this.amountShown = 0;
  this.timesClicked = 0;
  Pics.all.push(this);
}


// debugger;
for (var i = 0; i < Pics.allNames.length; i++) {
  Pics.all.push(new Pics(Pics.allNames[i]));
}

var container = document.getElementById('imageContainer');

function randomNum() {
  return Math.floor(Math.random() * Pics.all.length);
}

function displayImages() {
  // console.log(previouslyShown, 'peviously shown images');
  var numbers = [];
  numbers[0] = randomNum();
  numbers[1] = randomNum();
  while (Pics.previouslyShown.indexOf(numbers[0]) !== -1) {
    console.log('Pic was just shown. Fixing!');
    numbers[0] = randomNum();
  }
  numbers[1] = randomNum();
  while (numbers[0] === numbers[1] || Pics.previouslyShown.indexOf(previouslyShown[1]) !== -1) {
    console.log('Dupe prevented');
    numbers[1] = randomNum();
  }
  numbers[2] = randomNum();
  while (numbers[0] === numbers[2] || numbers[1] === numbers[2] ||
    Pics.previouslyShown.indexOf(numbers[2]) !== -1) {
    console.log('Dupe on 3rd Pic. Fixing!');
    numbers[2] = randomNum();
  }
  for (var i = 0; i < 3; i++) {
    Pics.allImgz[i].src = Pics.all[numbers[i]].push;
    Pics.allImgz[i].id = Pics.all[numbers[i]].name;
    Pics.all[numbers[i]].amountShown += 1;
    Pics.previouslyShown[i] = numbers[i];
  }
}

function drawImgs() {

  leftImg.src = Pics.all[randomNum()].source;
  leftImg.src = Pics.all[numbers[0]].source;
  leftImg.imageContainer = Pics.all[numbers[0]].name;
  Pics.all[numbers[0]].amountShown += 1;

  leftImg.setAttribute('src', Pics.all[previouslyShown[0]].source);
  leftImg.dataset.productIndex = previouslyShown[0];
  Pics.all[previouslyShown[0]].amountShown++;

  centerImg.src = Pics.all[randomNum()].source;
  centerImg.src = Pics.all[numbers[1]].source;
  centerImg.imageContainer = Pics.all[numbers[1]].name;
  all[numbers[1]].amountShown += 1;

  rightImg.src = Pics.all[randomNum()].source;
  rightImg.src = Pics.all[numbers[2]].source;
  rightImg.imageContainer = Pics.all[numbers[2]].name;
  all[numbers[2]].amountShown += 1;

  console.log(numbers, 'currently showing');
}
drawImgs();

function showList() {
  var containerEl = document.getElementById('imageContainer');
  for (var i = 0; i < Pics.all.length; i++);

  var liEl = document.createElement('li');

  liEl.textContent = Pics.all[i].name + ' was shown ' +
    Pics.all[i].amountShown + ' times was clicked ' +
    Pics.all[i].name;
  containerEl.appendChild(liEl);
}
container.addEventListener('click', handleClick);

function handleClick(event) {
  console.log(Pics.totalClicks, 'total clicks');
  if (Pics.totalClicks > 24) {
    Pics.container.removeEventListener('click', handleClick);
    showList();
  }

  if (event.target.id === 'imageContainer') {
    return alert('Please click on an image.');
  }

  Pics.totalClicks += 1;
  for (var i = 0; i < Pics.names.length; i++) {
    if (event.target.id === Pics.all[i].name) {
      Pics.all[i].timesClicked += 1;
    }
    console.log(event.target.id + 'has' + Pics.all[i].timesClicked + 'clicks on' + Pics.all[i].timesClicked + 'timesClicked');
    // completePics[event.target.dataset.productIndex].timesClicked++;

  }
}
//  === Pics.all[i].name) {
// Pics.all[i].timesClicked += 1;
// if (Pics.totalClicks === 5) {
//   console.log(Pics.totalClicks, 'total clicks');
//   Pics.container.removeEventListener('click', handleClick)

displayImages();
