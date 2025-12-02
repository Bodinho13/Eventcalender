const express = require("express");

const {
    createNewEvent,
    getAllEvents,
    getEventsByDate,
} = require("../controllers/eventController");

const router = express.Router();

//GET all events
router.get("/events", getAllEvents);

//GET events on specific date
router.get("/events/:date", getEventsByDate);

//POST create a new event
router.post("/event", createNewEvent);

//Export router
module.exports = router;