import { useEffect, useState } from "react";
import type { EwEvent } from "../EwEvent"
import { getEventsAll } from "../handlers/ewEventHandler";


const EwSummary = () => {
    const [events, setEvents] = useState([]);

    //useEffect(() => {
    //    console.log(getEventsAll());
    //    setEvents(getEventsAll());
    //}, []);

    return(
        <div>
            <h2>Übersicht über alle vergangenen Events</h2>
        </div>
    )
}

export {
    EwSummary
}