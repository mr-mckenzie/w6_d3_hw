const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let jurassicPark

  beforeEach(function () {
    trex = new Dinosaur('Tyrannosaurus-Rex', 'carnivore', 1000)
    stegosaurus = new Dinosaur('Stegosaurus', 'herbivore', 500)
    diplodocus = new Dinosaur('Diploducus', 'herbivore', 500)
    pterodactyl = new Dinosaur('Pterodactyl', 'onnivore', 750)
    triceratops = new Dinosaur('Triceratops', 'herbivore', 750)
    const dinosaurCollection = [trex, stegosaurus, diplodocus, pterodactyl, triceratops]
    jurassicPark = new Park('Parc Jurassique', 75, dinosaurCollection)
  })

  it('should have a name', function () {
    actual = jurassicPark.name
    assert.strictEqual(actual, 'Parc Jurassique')
  });

  it('should have a ticket price', function() {
    actual = jurassicPark.ticketPrice
    assert.strictEqual(actual, 75)
  });

  it('should have a collection of dinosaurs', function() {
    actual = jurassicPark.dinosaurCollection.length
    assert.strictEqual(actual, 5)
  });

  it('should be able to add a dinosaur to its collection', function(){
    jurassicPark.addDinosaur(trex)
    actual = jurassicPark.dinosaurCollection.length
    assert.strictEqual(actual,6)
  });

  it('should be able to remove a dinosaur from its collection', function() {
    jurassicPark.removeLastDinosaur()
    actual = jurassicPark.dinosaurCollection.length
    assert.strictEqual(actual, 4)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    actual = jurassicPark.findMostVisitors()
    assert.strictEqual(actual, trex)
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    jurassicPark.addDinosaur(stegosaurus)
    actual = jurassicPark.findAllBySpecies('Stegosaurus')
    assert.deepStrictEqual(actual, [1, 5])
  });

  it('should be able to calculate the total number of visitors per day', function() {
    actual = jurassicPark.getDailyVisitors()
    assert.strictEqual(actual, 3500)
  });

  it('should be able to calculate the total number of visitors per year', function() {
    actual = jurassicPark.getYearlyVisitors()
    assert.strictEqual(actual, 1225000)
  });

  it('should be able to calculate total revenue for one year', function() {
    actual = jurassicPark.getAnnualRevenue()
    assert.strictEqual(actual, 91875000)
  });

  it('should be able to remove all dinosaurs of a particular species', function () {
    jurassicPark.addDinosaur(stegosaurus)
    jurassicPark.addDinosaur(trex)
    jurassicPark.addDinosaur(pterodactyl)
    jurassicPark.addDinosaur(pterodactyl)
    jurassicPark.removeBySpecies('Stegosaurus')
    jurassicPark.removeBySpecies(trex.species)
    jurassicPark.removeBySpecies('Pterodactyl')
    actual = jurassicPark.dinosaurCollection
    assert.deepStrictEqual(actual, [diplodocus, triceratops])
  })

});
