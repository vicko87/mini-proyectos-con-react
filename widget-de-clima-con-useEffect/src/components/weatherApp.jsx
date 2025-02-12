import { useState, useEffect } from "react";
import WeatherForm from "./weatherForm";
import WeatherMainInfo from "./weatherMainInfo";
import Loading from "./loading"

import styles from "./weatherApp.module.css";

export default function WeatherApp() {
    const [weather, setWeather] = useState(null);
    console.log({ styles })
    useEffect(() => {
        loadInfo();
    }, []);

    useEffect(() => {
        document.title = `Weather | ${weather?.location.name ?? ""} `;
    }, [weather]);

    async function loadInfo(city = "london") {
        try {
            const request = await fetch(`${import.meta.env.VITE_APP_URL}&key=${import.meta.env.VITE_APP_KEY}&q=${city}`);

            const json = await request.json();

            setTimeout(() => {

            }, 2000);
            setWeather(json);

            console.log(json);
        } catch (error) { }

    }



    function handleChangeCity(city) {
        setWeather(null);
        loadInfo(city);
    }

    return (
        <div className={styles.weatherContainer}>
            <WeatherForm onChangeCity={handleChangeCity} />
            {weather ? <WeatherMainInfo weather={weather} /> : <Loading />}
        </div>
    )
}

