import {useState, useEffect} from "react";
import { Line } from "react-chartjs-2";

function Diagram(){
    const [dataPoints, setDataPoints] = useState([]);
    const [time, setTime] = useState([]);
    const [temps, setTemps] = useState([]);

    const dataJson = async () => {
        const data = await fetch("http://localhost:3000/api/temp/");
        const dataJson = await data.json();

        setDataPoints(prev => {
            const newPoints = dataJson.filter(
            point => !prev.some(p => p.timestamp === point.timestamp)
        );

        if (newPoints.length === 0) return prev; // no new data, do nothing

        const updated = [...prev, ...dataJson];

        // create new arrays based on updated
        const newTime = updated.map(e => e.timestamp);
        const newTemps = updated.map(e => e.temperature);

        // update new states
        setTime(newTime);
        setTemps(newTemps);

        return updated;
        });
    };

    useEffect(() => {
        dataJson(); // initial fetch
        const interval = setInterval(dataJson, 10000); // fetch every 10s
        return () => clearInterval(interval);
    }, []);
    

    const LineChart = () => {

        const options = {
        responsive: true,
        plugins: {
        legend: {
            position: "top",
        },

        title: {

        display: true,
        text: "Line Chart: Monthly Sales Trend for Products A & B",
        },
        },
        }


        const data = {

        labels: time,

        datasets: [

        {

        label: "Temperature",
        data: temps,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132)",
      },


        ],
        }

        return <Line options={options} data={data} />

    }
    

    return (
        <div class="container">
            <LineChart/>
        </div>
    )
}

export default Diagram;