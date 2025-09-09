const mongoose = require("mongoose");

const Event = require("../models/Event");

const getAllEvents = async(req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json(events);
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
}

const getEventsByDate = async (req, res) => {
    const {date} = req.params;

    const events = await Event.find({date: date}).exec();

    if(!events) {
        return res.status(404).json({error: "No events on this date"});
    }

    res.status(200).json(events);
}

const createNewEvent = async(req, res) => {
    const event = new Event({
        name: req.body.name,
        host: req.body.host,
        date: req.body.date,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        location: req.body.location,
        eventCategory: req.body.eventCategory,
        entryFee: req.body.entryFee,
        additionalInfo: req.body.additionalInfo,
        extras: req.body.extras
    });
    
    try {
        const newEvent = await Event.create(event);
        res.status(200).json(newEvent);
    } catch(err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = {
    createNewEvent,
    getAllEvents,
    getEventsByDate,
};