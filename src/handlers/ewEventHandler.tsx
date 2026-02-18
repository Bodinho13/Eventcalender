import axios from "axios";
import type { Event } from "../../shared/src/event"; 

/* const greetDBServer = (): Promise<String> => {
    return axios.get("http://localhost:8080/events")
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log("Server did not answer.", error);
            return null;
        })
} */

const getAllEvents = (): Promise<Event[]> => {
    return axios.get<Event[]>('http://localhost:8080/events')
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error("There was an error fetching the events.", error);
            return [];
        });
}

const createNewEvent = (newEvent: Event): Promise<Response> => {
    return axios.post('http://localhost:8080/events', newEvent)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.error("There was an error creating a new event.", error);
            return error;
        });
}

export {
    //greetDBServer,
    getAllEvents,
    createNewEvent
}