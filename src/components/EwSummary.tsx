import { useEffect, useState } from "react";
import type { Event } from "../../shared/src/event";
import { getAllEvents } from "../handlers/ewEventHandler";


const EwSummary = () => {
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        getAllEvents()
            .then(res => {
                if(res.length > 0){
                    setEvents(res);
                }
            })
    }, []);

    return(
        <div>
            <h2>Übersicht über alle vergangenen Events</h2>
        </div>
    )
}

export {
    EwSummary
}