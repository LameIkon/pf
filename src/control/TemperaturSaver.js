import mongoose from "mongoose";
//import TempObj from '../model/temperatureOdense.js';
import TemperatureOdense from "../model/temperatureOdense.js";

async function fetchAPIAStore(){
    const url = "https://api.open-meteo.com/v1/forecast?timezone=Europe%2FBerlin&latitude=55.3959&longitude=10.3883&current=temperature_2m";
    //const url = "http://localhost:3500/api/temp/";
    const response = await fetch(url);
    const data = await response.json();

    const obj = new TemperatureOdense({
        timestamp: data.current.time,
        temperature: data.current.temperature_2m
    });
    

    await obj.save().catch((err) => {console.log(err)});
    //console.log(obj);
}

export default { fetchAPIAStore };