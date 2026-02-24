export type Event = {
    id: string;
    eventName: string;
    host: string;
    date: Date;
    startTime: string;
    endTime: string;
    location: string;
    eventCategory: string;
    entryFee: number;
    additionalInfo: string;
    extras: string[];
};