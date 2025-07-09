


export interface EwEvent{
    eventName: string;
    host: string;
    date: Date;
    startTime: number;
    endTime: number;
    eventCategory: string;
    entryFee: number;
    additionalInfo: string;
    gimmicks: {
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
    };
}