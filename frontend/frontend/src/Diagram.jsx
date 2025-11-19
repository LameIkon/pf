import {useState, useEffect} from "react";

function Diagram(){
    const [dataPoints, setDataPoints] = useState([]);
    useEffect(() => {dataJson()}, []);
    const dataJson = async() => {
        const data = await fetch("http://localhost:3000/api/temp/", {method: "GET", headers: {"Content-Type": "application/json"}});
        const dataJson2 = await data.json();
        console.log(dataJson2);
        setDataPoints((prevState) => [...prevState, dataJson2]);
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