const express = require('express'); 
const router = express.Router(); 

const cowinController = require("../controllers/cowinController"); 
const weatherController = require("../controllers/weatherController"); 
const memeController = require("../controllers/memeController");

router.get("/cowin/state", cowinController.getStates); 
router.get("/cowin/district/:stateId", cowinController.getDistrict); 
router.get("/cowin/appointment", cowinController.getAppointment); 
router.post("/cowin/getOtp", cowinController.getOtp); 
router.get("/cowin/appointmentByDistrict", cowinController.getAppointmentByDistrict); 

router.get("/weather/getWeatherByPlace", weatherController.getWeatherByPlace);
router.get("/weather/sortTemperature", weatherController.sortTemperature); 

router.post("/meme", memeController.modifyMeme); 


module.exports = router; 