import { useNavigate } from "react-router-dom";


const EwDateTile = (props: any) => {
    const {dayOfMonth, active, event} = props;
    let status: string = event ? "belegt" : "frei";
    const pastDateClass = active ? "" : "pastDate";
    const navigate = useNavigate();

    //const openNewEvent = () => {
    //    console.log("TODO: open new Event Side");
    //}
 
    return (
        <div className={"dateTile " + pastDateClass} key={dayOfMonth + status}>
            <p>{dayOfMonth}</p>
            {status === "frei" && 
                <>
                    <p style={{backgroundColor: "green", opacity: 0.7}}>{status}</p>
                    <input type="button" value="Hinzufügen" onClick={() => navigate('/new')} disabled={!active} />
                </>
            }
            {status !== "frei" && 
                <p style={{backgroundColor: "red", opacity: 0.7}}>{status}</p>
            }
        </div>
    )
}

export {
    EwDateTile
}