import React, { useState } from "react";
import { EwLabelInputBox } from "./EwLabelInputBox";


const EwEventForm = () => {

    const [event, setEvent] = useState({
        eventName: "",
        host: "",
        date: new Date(),
        startTime: "",
        endTime: "",
        eventCategory: "",
        entryFee: 0,
        additionalInfo: "",
        extras: [""]
        /*gimmicks: {
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
        }*/
    });

    const changeEventData = (e: React.ChangeEvent) => {
        const target = e.target as HTMLFormElement;
        const name: string = target.name;
        const value: any = target.value;
        
        setEvent(values => ({...values, [name]: value}))
        console.log(event, value);
    }

    const changeExtras = (e: React.ChangeEvent) => {
        const target = e.target as HTMLFormElement;
        const name: string = target.name;

        let extras = event.extras;
        if (extras.indexOf(name) > -1) {
            extras.splice(extras.indexOf(name, 0), 1);
        } else {
            extras.push(name);
        }
        setEvent(values => ({...values, extras: extras}))
        console.log(event);
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
                    <input className="ew-input-check" type="checkbox" name="comedyshow" onChange={e => changeExtras(e)}/> Comedy-Show
                    <input className="ew-input-check" type="checkbox" name="darts" onChange={e => changeExtras(e)}/> Darts
                    <input className="ew-input-check" type="checkbox" name="dj" onChange={e => changeExtras(e)}/> DJ
                </label>
                <label className="ew-label">
                    <span className="ew-label-text"></span>
                    <input className="ew-input-check" type="checkbox" name="drivingService" onChange={e => changeExtras(e)}/> Fahrservice
                    <input className="ew-input-check" type="checkbox" name="grill" onChange={e => changeExtras(e)}/> Grill
                    <input className="ew-input-check" type="checkbox" name="kicker" onChange={e => changeExtras(e)}/> Kicker
                </label>
                <label className="ew-label">
                    <span className="ew-label-text"></span>
                    <input className="ew-input-check" type="checkbox" name="livemusic" onChange={e => changeExtras(e)}/> Live-Musik
                    <input className="ew-input-check" type="checkbox" name="pizza" onChange={e => changeExtras(e)}/> Pizza
                    <input className="ew-input-check" type="checkbox" name="dancefloor" onChange={e => changeExtras(e)}/> Tanzfläche
                </label>
                <label className="ew-label">
                    <span className="ew-label-text"></span>
                    <input className="ew-input-check" type="checkbox" name="tea" onChange={e => changeExtras(e)}/> Tee-Stand
                    <input className="ew-input-check" type="checkbox" name="waffles" onChange={e => changeExtras(e)}/> Waffel-Stand
                </label>
            </form>
        </div>
    )
}
//TODO: Kategorie --> selectbox

export {
    EwEventForm
}