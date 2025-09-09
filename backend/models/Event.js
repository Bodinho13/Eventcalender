

const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    host: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    startTime: {
        type: Number,
        required: true,
    },
    endTime: {
        type: Number,
        required: false,
    },
    location: {
        type: String,
        required: true,
    },
    eventCategory: {
        type: String,
        required: true,
    },
    entryFee: {
        type: Number,
        required: true,
    },
    additionalInfo: {
        type: String,
        required: false,
    },
    extras: {
        type: [String],
        required: false,
    },
    /*gimmicks: {
        comedyshow: Boolean,
        dancefloor: Boolean,
        darts: Boolean,
        dj: Boolean,
        drivingService: Boolean,
        grill: Boolean,
        kicker: Boolean,
        livemusic: Boolean,
        pizza: Boolean,
        tea: Boolean,
        waffles: Boolean,
    },*/
});

module.exports = mongoose.model('Event', eventSchema);