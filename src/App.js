import React, { useEffect, useState } from "react";
import "./App.css";
import styled from "styled-components";
import toast, { Toaster } from "react-hot-toast";
import Context from "./Context";
import WeatherInfo from "./components/WeatherInfo";
import WeatherForm from "./components/WeatherForm";
import { doFetch } from "./utils/doFetch";
import bigsur from "./images/big-sur.png";

const apiKey = process.env.REACT_APP_API_KEY;
const initialURL = `https://api.openweathermap.org/data/2.5/weather?q=moscow,ru&appid=${apiKey}&units=metric`;

const App = () => {
  const [weatherData, setWeatherData] = useState();

  //fetch default data on first render
  useEffect(() => {
    if (localStorage.getItem("defaultData")) {
      setWeatherData(JSON.parse(localStorage.getItem("defaultData")));
    }
    doFetch(initialURL)
      .then((weather) => {
        setWeatherData(weather.data);
        localStorage.setItem("defaultData", JSON.stringify(weather.data));
      })
      .catch((err) => {
        console.log(err);
        toast.error("Data could not be obtained, please try again");
      });
  }, []);

  //handle submited search
  const getWeather = async (e) => {
    const city = e.target.elements.city.value;
    const countryCode = e.target.elements.country.value;
    const URI = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}&units=metric`;

    doFetch(URI)
      .then((weather) => {
        setWeatherData(weather.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Data could not be obtained, please try again");
      });
  };

  return (
    <Container>
      <Wrapper>
        <Context.Provider value={{ getWeather, weatherData }}>
          {weatherData && <WeatherInfo />}
          <WeatherForm />
          <Toaster />
        </Context.Provider>
      </Wrapper>
    </Container>
  );
};

const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${bigsur});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Wrapper = styled.article`
  width: 20.56rem;
  height: 34rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  border-radius: 30px;
`;

export default App;
