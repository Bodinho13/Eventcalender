import React, { useState } from "react";
import { EwLabelInputBox } from "./EwLabelInputBox";


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
                <EwLabelInputBox labelVal="Name des Events:" inputName="eventName" inputVal={event?.eventName} 
                    handleChange={(e: React.ChangeEvent) => changeEventData(e)} required={true} />

                <EwLabelInputBox labelVal="Veranstalter:" inputName="host" inputVal={event?.host} 
                    handleChange={(e: React.ChangeEvent) => changeEventData(e)} required={true} />

                <EwLabelInputBox labelVal="Datum:" inputName="date" inputVal={event?.date} 
                    handleChange={(e: React.ChangeEvent) => changeEventData(e)} inputType="date" required={true} />
                    
                <EwLabelInputBox labelVal="Startzeit:" inputName="startTime" inputVal={event?.startTime} 
                    handleChange={(e: React.ChangeEvent) => changeEventData(e)} inputType="time" required={true} />
                
                <EwLabelInputBox labelVal="Ende:" inputName="endTime" inputVal={event?.endTime} 
                    handleChange={(e: React.ChangeEvent) => changeEventData(e)} inputType="time" />

                <EwLabelInputBox labelVal="Kategorie:" inputName="eventCategory" inputVal={event?.eventCategory} 
                    handleChange={(e: React.ChangeEvent) => changeEventData(e)} />

                <EwLabelInputBox labelVal="Eintritt:" inputName="entryFee" inputVal={event?.entryFee} 
                    handleChange={(e: React.ChangeEvent) => changeEventData(e)} inputType="number" required={true} />
                
                <EwLabelInputBox labelVal="Weitere Infos:" inputName="additionalInfo" inputVal={event?.additionalInfo} 
                    handleChange={(e: React.ChangeEvent) => changeEventData(e)} inputType="textarea" />
                
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
//TODO: Kategorie --> selectbox

export {
    EwEventForm
}