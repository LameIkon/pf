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

//setInterval(tempSaver.fetchAPIAStore, 5000)
//tempSaver.fetchAPIAStore().catch((err) => {console.log("Could not fetch temperature and store data")});

app.listen("3000")

import TemperatureOdense from "./src/model/temperatureOdense.js";
const TempObj = mongoose.model("Temperature", TemperatureOdense);
const Obj = mongoose.model("Temperature", TempObj);
const TemperObj = new TempObj();
const objs = await Obj.find();
console.log(objs);