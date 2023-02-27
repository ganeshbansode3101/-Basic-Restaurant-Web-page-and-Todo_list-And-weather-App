import React, { useState, useEffect } from 'react'
import "./style.css";
import Weathercard from "./WeatherCard"

const Temp = () => {

const[searchvalue , setSearchvalue] = useState("pune");
const [TempInfo, setTempInfo]  = useState({});



const getWeatherInfo = async () =>{
    try {

        let url = `https://api.openweathermap.org/data/2.5/weather?q= ${searchvalue}&units=metric&appid=e5460e6ddc165c495cc74bf64fd14e6e`;
       
        const res = await  fetch(url);
        const data = await res.json();

        const {temp, humidity, pressure} = data.main;
        const {main : weathermood} = data.weather[0];
        const {name } = data;
        const { speed } = data.wind;
        const { country , sunset} = data.sys;
    
        const myNewWeatherInfo = {
            temp,
            humidity,
            pressure,
            speed,
            country,
            sunset,
            name,
            weathermood

        }

        setTempInfo(myNewWeatherInfo);
     

        console.log(data);

    }  catch(error){
        console.log(error);
    }
    

}



useEffect(() => {

    getWeatherInfo();
},
 []);

  

    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input type="search"
                        placeholder="search..."
                        autoFocus
                        id="search"
                        className = "searchTerm"
                        value ={searchvalue}
                        onChange = { (e) => setSearchvalue (e.target.value)}/>

                    <button className='searchButton' type='button' onClick={getWeatherInfo}>Search</button>

                </div>
            </div>


           
           <Weathercard  TempInfo = {TempInfo }/>

        </>
    )
}

export default Temp;