'use strict';

var numbers = [];

var productsChart;

var clicksPerProduct = [];
// var completePics = [];
var previouslyShown = [];
Pics.all = [];
Pics.totalClicks = 0;

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
  new Pics(Pics.allNames[i]);
}

var container = document.getElementById('imageContainer');
var leftImg = document.getElementById('left');
var centerImg = document.getElementById('center');
var rightImg = document.getElementById('right');

function randomNum() {
  return Math.floor(Math.random() * Pics.all.length);
}

function getThreeUniqueRandomNumbers() {

  // console.log(previouslyShown, 'peviously shown images');
  numbers[0] = randomNum();
  while (previouslyShown.includes(numbers[0])) {
    numbers[0] = randomNum();
  }

  numbers[1] = randomNum();
  while (numbers[0] === numbers[1] || previouslyShown.includes(numbers[1])) {
    console.log('Dupe prevented');
    numbers[1] = randomNum();
  }

  numbers[2] = randomNum();
  while (numbers[2] === numbers[1] || numbers[2] ===
    numbers[0] || previouslyShown.includes(numbers[2])) {
    numbers[2] = randomNum();
  }
}

function drawImgs() {

  // leftImg.src = Pics.all[randomNum()].source;
  leftImg.src = Pics.all[numbers[0]].source;
  // leftImg.imageContainer = Pics.all[numbers[0]].name;
  Pics.all[numbers[0]].amountShown += 1;

  // leftImg.setAttribute('src', Pics.all[previouslyShown[0]].source);
  // leftImg.dataset.productIndex = previouslyShown[0];
  // Pics.all[previouslyShown[0]].amountShown++;

  // centerImg.src = Pics.all[randomNum()].source;
  centerImg.src = Pics.all[numbers[1]].source;
  // centerImg.imageContainer = Pics.all[numbers[1]].name;
  Pics.all[numbers[1]].amountShown += 1;

  // rightImg.src = Pics.all[randomNum()].source;
  rightImg.src = Pics.all[numbers[2]].source;
  // rightImg.imageContainer = Pics.all[numbers[2]].name;
  Pics.all[numbers[2]].amountShown += 1;

  console.log(numbers, 'currently showing');
}

function showList() {
  for (var i = 0; i < Pics.all.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = Pics.all[i].name + ' was shown ' +
      Pics.all[i].timesClicked + ' times was clicked ' +
      Pics.all[i].amountShown + ' amount shown';
    container.appendChild(liEl);
  }
}

function handleClick(event) {
  Pics.totalClicks += 1;
  console.log('click', event);
  console.log(event.target.dataset.productIndex);

  if (event.target.id === 'imageContainer') {
    alert('Please click on an image');
    Pics.totalClicks -= 1;
  }
  if (event.target.id === 'left') {
    Pics.all[numbers[0]].timesClicked += 1;
  } else if (event.target.id === 'center') {
    Pics.all[numbers[1]].timesClicked += 1;
  } else if (event.target.id === 'right') {
    Pics.all[numbers[2]].timesClicked += 1;
  }

  if (Pics.totalClicks === 10) {
    for (var i = 0; i < Pics.all.length; i++) {
      clicksPerProduct.push(Pics.all[i].timesClicked);
    }

    container.removeEventListener('click', handleClick);
    // showList(); //  print the data
    drawChart();

  } else {
    for (var i = 0; i < numbers.length; i++) {
      previouslyShown[i] = numbers[i];
    }
    getThreeUniqueRandomNumbers();
    drawImgs();
  }
}

// for (var i = 0; i < Pics.all.length; i++) {
//   if (event.target.imageContainer === Pics.all[i].name) {
//     Pics.all[i].timesClicked += 1;
// if (Pics.totalClicks === 5) {
// console.log(Pics.totalClicks, 'total clicks');
// //   Pics.container.removeEventListener('click', handleClick)

getThreeUniqueRandomNumbers();

drawImgs();

container.addEventListener('click', handleClick);

var data = {
  labels: Pics.allNames, // titles array we declared earlier
  datasets: [{
    data: clicksPerProduct, // votes array we declared earlier
    backgroundColor: [
      'red',
      'red',
      'red',
      'red',
      'red',
      'red',
      'red',
      'red',
      'red',
      'red',
      'red',
      'red',
      'red',
      'red',
      'red',
      'red',
      'red',
      'red',
      'red',
      'red',

    ],
    hoverBackgroundColor: [
      'blue',
      'blue',
      'blue',
      'blue',
      'blue',
      'blue',
      'blue',
      'blue',
      'blue',
      'blue',
      'blue',
      'blue',
      'blue',
      'blue',
      'blue',
      'blue',
      'blue',
      'blue',
      'blue',
      'blue',
    ]
  }]
};

function drawChart() {
  var ctx = document.getElementById('barChart').getContext('2d');
  productsChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      responsive: false,
      animation: {
        duration: 1000,
        easing: 'easeOutBounce'
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          max: 10,
          min: 0,
          stepSize: 1.0
        }
      }]
    }
  });
  chartDrawn = true;
}
