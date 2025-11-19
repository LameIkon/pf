import mongoose from "mongoose";
import express from "express";
import cors from "cors";

import tempRouter from "./src/route/temperatureRoute.js";
import tempSaver from "./src/control/TemperaturSaver.js";

const dbString = "mongodb://localhost:27017/PF_Project";
const app = express();

mongoose.connect(dbString)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));


app.use(express.json());
app.use(cors());
app.use("/api/temp", tempRouter);

tempSaver.fetchAPIAStore().catch((err) => {console.log("Could not fetch temperature and store data")});

setInterval(tempSaver.fetchAPIAStore, 10000)

app.listen("3000");