// External Dependencies
import {ObjectId} from "mongodb";
import { collections } from "../services/database.service.js";
import {Event} from "../models/Event.js";
import express from "express";
// Global Config
export const eventRouter = express.Router();

eventRouter.use(express.json());
// GET
eventRouter.get("/", async (_req, res) => {
    const events = (await collections.events?.find({}).toArray());
    res.status(200).json(events);
});

eventRouter.get("/:id", async (req, res) => {
    const id = req?.params?.id;

    try {
        const query = { _id: new ObjectId(id) };
        const event = (await collections.events?.findOne(query));

        if (event) {
            res.status(200).send(event);
        }
    } catch (error: any) {
        res.status(500).send(`Unable to find matching document with id: ${req.params.id}`);
    }
});
//POST
eventRouter.post("/", async (req, res) => {
    const newEvent: Event = req.body;
    const result = await collections.events?.insertOne(newEvent);

    res.status(201).json({insertedId: result?.insertedId});
});
//PUT
eventRouter.put("/:id", async (req, res) => {
    const id = req?.params?.id;

    try {
        const updatedEvent: Event = req.body as Event;
        const query = { _id: new ObjectId(id) };

        const result = await collections.events?.updateOne(query, { $set: updatedEvent });

        result ? res.status(200).send(`Successfully updated event with id ${id}`)
             : res.status(304).send(`Event with id: ${id} not updated`);
    } catch (error: any) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
});
//DELETE
eventRouter.delete("/:id", async (req, res) => {
    const id = req?.params?.id;

    try {
        const query = { _id: new ObjectId(id) };
        const result = await collections.events?.deleteOne(query);

        if (result && result.deletedCount) {
            res.status(202).send(`Successfully removed event with id ${id}`);
        } else if (!result) {
            res.status(400).send(`Failed to remove event with id ${id}`);
        } else if (!result.deletedCount) {
            res.status(404).send(`Event with id ${id} does not exist`);
        }
    } catch (error: any) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
})