import axios from "axios";


const getEventsAll = (): Promise<Object[]> => {
    return axios.get('http://localhost:5000/events')
        .then((response) => {
            console.log("All events were loaded.", response.data);
            return response.data;
        })
        .catch((error) => {
            console.error("There was an error fetching the events.", error);
            return null;
        });
}

export {
    getEventsAll
}