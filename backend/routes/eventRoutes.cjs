const express = require("express");

const {
    createNewEvent,
    getAllEvents,
    getEventsByDate,
} = require("../controllers/eventController");

const router = express.Router();

//GET all events
router.get("/", getAllEvents);

//GET events on specific date
router.get("/:date", getEventsByDate);

//POST create a new event
router.post("/", createNewEvent);

//Export router
module.exports = router;