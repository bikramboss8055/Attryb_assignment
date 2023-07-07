const express = require("express");
const { createCar, delCar, delMulCar, editCar } = require("../controller/cars.controller");
const { getSingleCar, getAllCars, getAllCarsDealer } = require("../controller/getcars");
const carRoute = express.Router();

// get all cars available
carRoute.get('/', getAllCars)

// get dealers posted cars
carRoute.get('/:id' , getAllCarsDealer)

// get single car details
carRoute.get('/single/:id', getSingleCar)

// add new second hand cars
carRoute.post('/create' , createCar)

// del multiple cars in one go
carRoute.delete('/manydel/:id' , delMulCar)

// del single car
carRoute.delete('/del/:id' , delCar)

// edit a car
carRoute.put('/edit/:id' , editCar)


module.exports = carRoute;