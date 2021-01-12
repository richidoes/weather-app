import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import moment from "moment";

import { getWeather } from "../utils/weatherApi";

const WeatherSide = ({ weatherInfo }) => {
  const [weather, setWeather] = useState(defaultValue());
  const [data, setData] = useState({});
  const [renderItem, setRenderItem] = useState(false);

  const transition = useSpring({
    transform: renderItem ? "tranlate(0,0%)" : "translate(100%,0%)",
  });
  const dayName = moment().format("dddd");
  const fullDate = moment().format("D MMM YYYY");

  //get default weather data and refresh on new request
  useEffect(() => {
    if (!weatherInfo) {
      getWeather(weather.city, weather.countryCode).then((weatherData) => {
        setData(weatherData);
        setRenderItem(true);
      });
    } else if (weatherInfo) {
      setWeather(weatherInfo);
      getWeather(weather.city, weather.countryCode).then((weatherData) => {
        setData(weatherData);
        setRenderItem(true);
      });
    } else {
      setRenderItem(false);
    }
    return () => {};
  }, [weatherInfo, weather.city, weather.countryCode]);

  if (!renderItem) {
    return (
      <>
        <div className="loading">
          <span>Loading...</span>
        </div>
        <div className="loading loadingForm">
          <span>Loading...</span>
        </div>
      </>
    );
  }

  return (
    <>
      <Weather className="weatherView">
        <div className="weather-gradient"></div>
        <animated.div style={transition}>
          <DateContainer className="date-container">
            <DayName className="date-dayname">{dayName}</DayName>
            <Day className="date-day">{fullDate}</Day>
            <Location className="location">
              {data.name} / {data.sys.country}
            </Location>
          </DateContainer>
        </animated.div>
        <animated.div className="weather-container">
          <Temp className="weather-temp">{data.main.temp} °C</Temp>
          <Time className="weather-desc">
            {data.weather[0]["description"].toUpperCase()}
          </Time>
        </animated.div>
      </Weather>
      <Info className="weatherInfo">
        <animated.div style={transition}>
          <DataContainer className="pressure">
            <span className="title" style={{ float: "left" }}>
              PRESSURE
            </span>
            <span className="value" style={{ float: "right" }}>
              {data.main.pressure / 1000} bar
            </span>
            <Clean />
          </DataContainer>
          <DataContainer className="humidity">
            <span className="title" style={{ float: "left" }}>
              HUMIDITY
            </span>
            <span className="value" style={{ float: "right" }}>
              {data.main.humidity} %
            </span>
            <Clean />
          </DataContainer>
          <DataContainer className="wind">
            <span className="title" style={{ float: "left" }}>
              WIND
            </span>
            <span className="value" style={{ float: "right" }}>
              {data.wind.speed} m/s
            </span>
            <Clean />
          </DataContainer>
        </animated.div>
      </Info>
    </>
  );
};

const defaultValue = () => {
  return {
    city: "Moscow",
    countryCode: "ru",
  };
};

const Weather = styled.div`
  position: absolute;
  background: linear-gradient(135deg, #72edf2 10%, #5151e5 100%);
  opacity: 100%;
  color: #fff;
  width: 300px;
  height: 53vh;
  margin: 2%;
  margin-left: -400px;
  padding: 20px;
  border-radius: 20px;
  transition: 0.5s;

  :hover {
    -webkit-transform: scale(1.1) perspective(1500px) rotateY(10deg);
    transform: scale(1.1) perspective(1500px) rotateY(10deg);
  }
`;

const DateContainer = styled.div`
  height: 65%;
`;

const Day = styled.span`
  display: block;
  font-size: 1rem;
  font-weight: 400;
`;

const Location = styled.span`
  display: block;
  margin-top: 20px;
  font-size: 1.4rem;
  font-weight: 700;
`;

const Temp = styled.h1`
  font-weight: 700;
  font-size: 2.5em;
  margin-top: 100px;
`;

const DayName = styled.h2`
  font-size: 1.5rem;
`;

const Time = styled.h3`
  margin-top: 10px;
  font-size: 1.5rem;
`;

const Info = styled.div`
  position: absolute;
  overflow: hidden;
  width: 350px;
  height: 20vh;
  margin-top: -240px;
  margin-left: 180px;
  padding: 40px;
  border-radius: 20px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  color: #fff;
`;

const DataContainer = styled.div`
  margin-bottom: 10px;
  font-weight: 700;
`;

const Clean = styled.div`
  clear: both;
`;
export default WeatherSide;
