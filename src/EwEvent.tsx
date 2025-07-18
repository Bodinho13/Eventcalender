

class EwEvent{
    eventName: string;
    host: string;
    date: Date;
    startTime: string;
    endTime: string;
    eventCategory: string;
    entryFee: number;
    additionalInfo: string;
    extras: [string];

    constructor(eventName: string, host: string, date: Date, startTime: string, endTime: string = "", eventCategory: string = "", entryFee: number, additionalInfo: string = "", extras: [string] = [""]){
        this.eventName = eventName;
        this.host = host;
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime;
        this.eventCategory = eventCategory;
        this.entryFee = entryFee;
        this.additionalInfo = additionalInfo;
        this.extras = extras;
    }
}

export {
    EwEvent
}



    /*gimmicks: {
        comedyshow: boolean
        dancefloor: boolean
        darts: boolean
        dj: boolean
        drivingService: boolean
        grill: boolean
        kicker: boolean
        livemusic: boolean
        pizza: boolean
        tea: boolean
        waffles: boolean
    }*/