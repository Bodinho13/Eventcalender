import axios from "axios";
import { EwEvent } from "../EwEvent"; 

const greetDBServer = (): Promise<String> => {
    return axios.get("http://localhost:8080/events")
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log("Server did not answer.", error);
            return null;
        })
}

const getAllEvents = (): Promise<Object[]> => {
    return axios.get('http://localhost:8080/events')
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error("There was an error fetching the events.", error);
            return null;
        });
}

const createNewEvent = (newEvent: EwEvent): Promise<Response> => {
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
    greetDBServer,
    getAllEvents,
    createNewEvent
}