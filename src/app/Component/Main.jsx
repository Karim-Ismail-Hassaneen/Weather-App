"use client";
import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import Weather from "./Weather";

const Main = () => {
  const [weather, setWeather] = useState("");
  const [location, setLocation] = useState({});
  const getData = (e) => {
    e.preventDefault();
    axios.get(fetchApi).then((response) => {
      setWeather(response.data);
    });
    setLocation("");
  };
  
  const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const BASE_URL = "https://api.openweathermap.org";
  const fetchApi = `${BASE_URL}/data/2.5/weather?q=${location}&units=imperial&appid=${WEATHER_API_KEY}`;

  return (
    <div>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/45 z-[1]" />
      <Image
        src="/weather.jpg"
        layout="fill"
        alt="Weather app"
        className="object-cover"
      />
      <div className="relative flex justify-between items-center max-w-[600px] w-full m-auto p-3  text-white z-10">
        <form onSubmit={getData} className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-full">
          <input onChange={(e) => setLocation(e.target.value)} type="text" placeholder="Enter You City..." className="w-[95%] bg-transparent border-none text-white focus:outline-none text-1xl"/>
          <button onClick={getData}><BsSearch size={20}/></button>
        </form>
      </div>
      {weather.main && <Weather data={weather}/>}
    </div>
  );
};

export default Main;
