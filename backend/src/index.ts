import express from "express";
import cors from "cors";
import { connectToDatabase } from "./services/database.service.js";
import { eventRouter } from "./routes/events_router.js";
import { errorMiddleware } from "./middleware/error.middleware.js";

const app = express();
const port = 8080; // default port to listen

async function start() {

    await connectToDatabase();

    app.use(cors());

    app.use("/events", eventRouter);
    app.use(errorMiddleware);

    app.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`);
    });
}

start();
