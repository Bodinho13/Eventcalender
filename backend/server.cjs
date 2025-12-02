require("dotenv").config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');

const cors = require('cors');
app.use(cors());

var whitelist = ['http://localhost:5173']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) != -1) {
      callback(null, true)
      console.log("whitelisted:", origin)
    } else {
      callback(new Error('Not allowed by CORS'))
      console.log("not whitelisted:", origin)
    }
  }
}

const eventRoutes = require("./routes/eventRoutes.cjs");

//Middleware
app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    console.log(req.path(), req.method());
    next();
});

//ROUTES
app.use("/events", eventRoutes);

//MongoDB Connection
mongoose.connect(process.env.MONGODB_URI , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB & listening on port 5000' /*+ process.env.dev.PORT*/);
        });
    })
    .catch((error) => console.error(error));

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to MongoDB'));

//Routes
app.get('/', cors(corsOptions), (req, res, next) => {
    res.send('Hello from Express');
    next();
});

/*app.post('/', (req, res, next) => {
    res.send('Is this the data you`ve send?', req);
    next();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});*/

//const Event = require('./models/Event');

// Create Event
/*
app.post('/event', async(req, res) => {
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
        gimmicks: [{
            comedyshow: req.body.comedyshow,
            dancefloor: req.body.dancefloor,
            darts: req.body.darts,
            dj: req.body.dj,
            drivingService: req.body.drivingService,
            grill: req.body.grill,
            kicker: req.body.kicker,
            livemusic: req.body.livemusic,
            pizza: req.body.pizza,
            tea: req.body.tea,
            waffles: req.body.waffles,
        }]
    });

    try {
        const newEvent = await event.save();
        res.status(201).json(newEvent);
    } catch(err) {
        res.status(400).json({ message: err.message });
    }
});
*/

/*
app.get('events', async(req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
});
*/