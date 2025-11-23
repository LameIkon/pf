import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    try{
       
        //res.status(200).json({"latitude":55.396263,"longitude":10.386887,"generationtime_ms":0.030875205993652344,"utc_offset_seconds":3600,"timezone":"Europe/Berlin","timezone_abbreviation":"GMT+1","elevation":18.0,"current_units":{"time":"iso8601","interval":"seconds","temperature_2m":"°C"},"current":{"time":"2025-11-14T12:30","interval":900,"temperature_2m":11.2}});
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