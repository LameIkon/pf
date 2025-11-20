import {useState, useEffect} from "react";

function Diagram(){
    const [dataPoints, setDataPoints] = useState([]);
    useEffect(() => {dataJson()}, []);
    const dataJson = async() => {
        const data = await fetch("http://localhost:3000/api/temp/", {method: "GET", headers: {"Content-Type": "application/json"}});
        const dataJson = await data.json();
        console.log(dataJson);
        setDataPoints((prevState) => [...prevState, dataJson]);
        console.log(dataPoints);
    }
    return (
        <div>
            <p>{dataPoints}</p>
            <p>Hello World</p>
        </div>
    )
}

export default Diagram;