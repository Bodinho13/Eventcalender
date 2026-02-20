import { EwDateTile } from "./EwDateTile";
import { EwTextTile } from "./EwTextTile";
import { calcDaysOfMonth, months, weekdays, isSameDate } from "../utils/useCalender";
import { getAllEvents } from "../handlers/ewEventHandler";
import { useEffect, useState } from "react";
import type { Event } from "../../shared/src/event";

const EwCalender = () => {
    const today = new Date();
    const [month, setMonth] = useState(today.getMonth() + 1);
    const firstOfMonth: Date = new Date(today.getFullYear(), month, 1);
    const daysOfMonth: number = calcDaysOfMonth(month, today.getFullYear());
    const days = [];
    const weekTiles = [];

    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        getAllEvents()
            .then((res) => {
                if(res.length > 0) {
                    setEvents(res);
                }
            })
            .catch((error) => {
                console.error("Events konnten nicht geladen werden!", error);
            });
    }, []);

    for (let i = 0; i < weekdays.length; i++){
        weekTiles.push(<EwTextTile text={weekdays[i]} />)
    }

    const daysLastMonth = calcDaysOfMonth(month - 1, today.getFullYear());
    for(let i = firstOfMonth.getDay() === 0 ? 6 : firstOfMonth.getDay() - 1; i > 0; i--) {
        days.push(<EwDateTile date={new Date(today.getFullYear(), month -2, daysLastMonth - i + 1)} active={false} />)
    }

    for(let i = 1; i <= daysOfMonth; i++){
        let event = events.find(e => isSameDate(new Date(today.getFullYear(), month - 1, i), new Date(e.date)));
        days.push(<EwDateTile date={new Date(today.getFullYear(), month -1, i)} active={i >= today.getDate()} event={event} />);
    }

    return (
        <div>
            <h2>{months[month]} {today.getFullYear()}</h2>
            <div className="calenderWeek">
                {weekTiles}
                {days}
            </div>
        </div>
    );
}

export {
    EwCalender
}