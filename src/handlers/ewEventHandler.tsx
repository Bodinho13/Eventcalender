import axios from "axios";
import { EwEvent } from "../EwEvent"; 

const greetDBServer = (): Promise<String> => {
    return axios.get("http://localhost:8080/events")
        .then((response) => {
            console.log("Server response", response);
            return response.data;
        })
        .catch((error) => {
            console.log("Server did not answer.", error);
            return null;
        })
}

const getAllEvents = (): Promise<Object[]> => {
    return axios.get('http://localhost:5000/')
        .then((response) => {
            console.log("All events were loaded.", response.data);
            return response.data;
        })
        .catch((error) => {
            console.error("There was an error fetching the events.", error);
            return null;
        });
}

const createNewEvent = (newEvent: EwEvent): Promise<Response> => {
    const raw = JSON.stringify({
        "eventName": newEvent.eventName,
        "host": newEvent.host,
        "date": newEvent.date,
        "startTime": newEvent.startTime,
        "endTime": newEvent.endTime,
        "location": newEvent.location,
        "eventCategory": newEvent.eventCategory,
        "entryFee": newEvent.entryFee,
        "additionalInfo": newEvent.additionalInfo,
        "extras": newEvent.extras,
    });

    return axios.post('http://localhost:5000/event', raw, {
        headers: {
            //'Content-Type': 'application/json'
        }
    })
        .then((response) => {
            console.log('The event was created', response.status);
            console.log(response.data.json);
            return response;
        })
        .catch((error) => {
            console.error("There was an error creating a new event.", error);
            return error;
        });
}

export {
    greetDBServer,
    getAllEvents,
    createNewEvent
}