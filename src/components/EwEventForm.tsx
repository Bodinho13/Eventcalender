import React, { useState } from "react";


const EwEventForm = () => {

    const [event, setEvent] = useState({
        eventName: "",
        host: "",
        date: new Date(),
        startTime: 0,
        endTime: 0,
        eventCategory: "",
        entryFee: 0,
        additionalInfo: "",
        gimmicks: {
            comedyshow: false,
            dancefloor: false,
            darts: false,
            dj: false,
            drivingService: false,
            grill: false,
            kicker: false,
            livemusic: false,
            pizza: false,
            tea: false,
            waffles: false
        }
    });

    const changeEventData = (e: React.ChangeEvent) => {
        const target = e.target as HTMLFormElement;
        const name: string = target.name;
        const value: any = target.value;
        
        setEvent(values => ({...values, [name]: value}))
        console.log(event, value);
    }

    const submitEvent = (formData: any) => {
        console.log(formData);
    }

    return(
        <div>
            <h2>Neues Event anlegen</h2>
            <form action={submitEvent}>
                <label className="ew-label">
                    <span className="ew-label-text">Name des Events:</span>
                    <input className="ew-input-text" type="text" name="eventName" value={event?.eventName || ""} onChange={(e) => changeEventData(e)}/>
                </label>
                <label className="ew-label">
                    <span className="ew-label-text">Veranstalter:</span>
                    <input className="ew-input-text" type="text" name="host" value={event?.host || ""} onChange={(e) => changeEventData(e)}/>
                </label>
                <label className="ew-label">
                    <span className="ew-label-text">Datum:</span>
                    <input className="ew-input-text" type="date" name="date" value={String(event?.date) || ""} onChange={(e) => changeEventData(e)}/>
                </label>
                <label className="ew-label">
                    <span className="ew-label-text">Startzeit:</span>
                    <input className="ew-input-text" type="time" name="startTime" value={event?.startTime || ""} onChange={(e) => changeEventData(e)}/>
                </label>
                <label className="ew-label">
                    <span className="ew-label-text">Ende:</span>
                    <input className="ew-input-text" type="time" name="endTime" value={event?.endTime || ""} onChange={(e) => changeEventData(e)}/>
                </label>
                <label className="ew-label"> 
                    <span className="ew-label-text">Kategorie:</span>
                    <input className="ew-input-text" type="text" name="eventCategory" value={event?.eventCategory || ""} onChange={(e) => changeEventData(e)}/>
                </label>
                <label className="ew-label">
                    <span className="ew-label-text">Eintritt:</span>
                    <input className="ew-input-text" type="number" name="entryFee" value={event?.entryFee || ""} onChange={(e) => changeEventData(e)}/>
                </label>
                <label className="ew-label">
                    <span className="ew-label-text">Weitere Infos:</span>
                    <input className="ew-input-text" type="textarea" name="additionalInfo" value={event?.additionalInfo || ""} onChange={(e) => changeEventData(e)}/>
                </label>
                <label className="ew-label">
                    <span className="ew-label-text">Extras:</span>
                    <input className="ew-input-check" type="checkbox" name="comedyshow"/> Comedy-Show
                    <input className="ew-input-check" type="checkbox" name="darts"/> Darts
                    <input className="ew-input-check" type="checkbox" name="dj"/> DJ
                </label>
                <label className="ew-label">
                    <span className="ew-label-text"></span>
                    <input className="ew-input-check" type="checkbox" name="drivingService"/> Fahrservice
                    <input className="ew-input-check" type="checkbox" name="grill"/> Grill
                    <input className="ew-input-check" type="checkbox" name="kicker"/> Kicker
                </label>
                <label className="ew-label">
                    <span className="ew-label-text"></span>
                    <input className="ew-input-check" type="checkbox" name="livemusic"/> Live-Musik
                    <input className="ew-input-check" type="checkbox" name="pizza"/> Pizza
                    <input className="ew-input-check" type="checkbox" name="dancefloor"/> Tanzfläche
                </label>
                <label className="ew-label">
                    <span className="ew-label-text"></span>
                    <input className="ew-input-check" type="checkbox" name="tea"/> Tee-Stand
                    <input className="ew-input-check" type="checkbox" name="waffles"/> Waffel-Stand
                </label>
            </form>
        </div>
    )
}
//TODO: Kategorie --> selectbox, start- & endZeit --> string

export {
    EwEventForm
}