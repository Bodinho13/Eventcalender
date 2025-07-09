import { EwDateTile } from "./EwDateTile";
import { EwTextTile } from "./EwTextTile";
import { calcDaysOfMonth, months, weekdays } from "../utils/useCalender";
//import { getEventsAll } from "../handlers/ewEventHandler";

const EwCalender = () => {
    const today = new Date();
    const firstOfMonth: Date = new Date(today.getFullYear(), today.getMonth(), 1);
    const daysOfMonth: number = calcDaysOfMonth(today.getMonth(), today.getFullYear());
    const days = [];
    const weekTiles = [];

    //const [events, setEvents] = useState([]);

    //useEffect(() => {
    //    console.log(getEventsAll());
    //    setEvents(getEventsAll());
    //}, []);

    for (let i = 0; i < weekdays.length; i++){
        weekTiles.push(<EwTextTile text={weekdays[i]} />)
    }

    const daysLastMonth = calcDaysOfMonth(today.getMonth() - 1, today.getFullYear());
    for(let i = firstOfMonth.getDay() === 0 ? 6 : firstOfMonth.getDay() - 1; i > 0; i--) {
        days.push(<EwDateTile dayOfMonth={daysLastMonth - i + 1} active={false} />)
    }

    for(let i = 0; i < daysOfMonth; i++){
        //let event = events.find(e => new Date(today.getFullYear(), today.getMonth(), i + 1) === e.getDate());
        if(i < today.getDate() - 1)
            days.push(<EwDateTile dayOfMonth={i + 1} active={false} />);
        else 
            days.push(<EwDateTile dayOfMonth={i + 1} active={true} />);
    }

    return (
        <div>
            <h2>{months[today.getMonth()]} {today.getFullYear()}</h2>
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