module.exports = function Route(app){

  // Require the Mongoose Module
  var mongoose = require('mongoose');

  //Require/import the animals.js from controller folder.
  var animalsController = require('./../controllers/animals.js');

  // Routes
  // Root Request
  app.get('/', function(req, res) {
    animalsController.getAllAnimals(req, res);
  });

  //Create new animal
  app.get('/animals/new', function (request, response) {
    animalsController.createNewAnimal(request, response);
  });

  // Display Animal info
  app.get('/animals/:id', function(request, response) {
    animalsController.showAnimalInfo(request, response);
  });

  // Edit animal info
  app.get('/animals/edit/:id', function(req, res) {
    animalsController.editAnimalInfo(req, res);
  });

  //Post new message to db and redirect info to root route
  app.post('/animals', function(request, response) {
    animalsController.postNewMessage(request, response);
  });

//Update animal info
  app.post('/animals/:id', function(req, res) {
    animalsController.updateAnimalInfo(req, res);
  });

//Delete animal
  app.get('/animals/destroy/:id', function(req, res) {
    animalsController.deleteAnimalInfo(req, res);
  });

}
