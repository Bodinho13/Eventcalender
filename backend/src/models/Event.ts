// External dependencies
import { ObjectId } from "mongodb";
// Class Implementations
export interface Event {
    id?: ObjectId
    eventName: string,
    host: string,
    date: Date,
    startTime: string,
    endTime: string,
    location: string,
    eventCategory: string,
    entryFee: number,
    additionalInfo: string
}