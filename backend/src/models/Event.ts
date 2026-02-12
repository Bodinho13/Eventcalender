// External dependencies
import { ObjectId } from "mongodb";
// Class Implementations
export default class Event {
    constructor(
        public eventName: string,
        public host: string,
        public date: Date,
        public startTime: string,
        public endTime: string,
        public location: string,
        public eventCategory: string,
        public entryFee: number,
        public additionalInfo: string,
        public id?: ObjectId
    ) {}
}