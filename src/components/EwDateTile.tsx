import { useNavigate } from "react-router-dom";


const EwDateTile = (props: any) => {
    const {date, active, event} = props;
    let status: string = event ? "belegt" : "frei";
    const pastDateClass = active ? "" : "pastDate";
    const navigate = useNavigate();

    let options: Intl.DateTimeFormatOptions = {year: "numeric", month: "numeric", day: "numeric"};
    let formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);

    //const openNewEvent = () => {
    //    console.log("TODO: open new Event Side");
    //}
 
    return (
        <div className={"dateTile " + pastDateClass} key={date.getDate() + status}>
            <p>{date.getDate()}</p>
            {status === "frei" && 
                <>
                    <p style={{backgroundColor: "green", opacity: 0.7}}>{status}</p>
                    <input type="button" value="Hinzufügen" onClick={() => navigate(`/event?date=${formattedDate}`)} disabled={!active} />
                </>
            }
            {status !== "frei" && 
                <>
                    <p style={{backgroundColor: "red", opacity: 0.7}}>{status}</p>
                    <input type="button" value="Event ansehen" onClick={() => navigate(`/event/${event.id}`)} />
                </>
            }
        </div>
    )
}

export {
    EwDateTile
}