import express from 'express';
import mongoose from "mongoose";
import TemperatureOdense from "../model/temperatureOdense.js";
const TempObj = mongoose.model("Temperature", TemperatureOdense.schema);

const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const databaseValues = await TempObj.find();
        console.log(databaseValues);
        const temperatureJson = databaseValues.map((temperatureRecording)=> ({
            timestamp: new Date((temperatureRecording.timestamp)),
            temperature: temperatureRecording.temperature
        }));
        console.log(temperatureJson);
        res.json(temperatureJson);
    }
    catch(err){}

});

router.get('/a', (req, res) => {
    try{
        res.status(200).json("Hello World");
        console.log("Hello called");
    }
    catch(err){}
})
export default router;