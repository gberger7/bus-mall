function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
  this.legs = 4;
  this.isAGoodDog = true;
}
Dog.prototype.says = function (bark) {
console.log(bark);
};
new Dog('Parker', 'English Shepherd').says('woof');
new Dog('Demi', 'Border Collie').legs = 3;
