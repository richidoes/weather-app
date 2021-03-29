import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import moment from "moment";
import Context from "../Context";

const WeatherInfo = () => {
  const { weatherData } = useContext(Context);

  const city = weatherData.name;
  const { country } = weatherData.sys;
  const { temp, humidity } = weatherData.main;
  const pressure = weatherData.main.pressure / 1000;
  const { description: time } = weatherData.weather[0];
  const windSpeed = weatherData.wind.speed;

  const dayName = moment().format("dddd");
  const midDate = moment().format("D MMM");

  return (
    <Wrapper>
      <LocationContainer>
        <City>
          {city} / {country}
        </City>
        <Date>
          {midDate}, {dayName}
        </Date>
      </LocationContainer>
      <WeatherContainer>
        <Temperature>{temp} °C</Temperature>
        <Weather>{time}</Weather>
        <ExtraInfoContainer>
          <Section>
            <Value>{pressure} bar</Value>
            <Condition>Pressure</Condition>
          </Section>
          <Section>
            <Value>{humidity} %</Value>
            <Condition>Humidity</Condition>
          </Section>
          <Section>
            <Value>{windSpeed} m/s</Value>
            <Condition>Wind</Condition>
          </Section>
        </ExtraInfoContainer>
      </WeatherContainer>
    </Wrapper>
  );
};

export default WeatherInfo;

const animation = keyframes`
  from { opacity: 0; transform: translateY(-20px); filter: blur(10px); }
  to { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`;

const customColor = `
background: linear-gradient(to right, #7f00ff, #e100ff);
background-clip: text;
-webkit-background-clip: text;
color: transparent;
`;

const flexCenter = `
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 340px;
  display: grid;
  gap: 5rem;

  > * {
    //apply to immediate children
    opacity: 0;
    animation: ${animation} 1s forwards;
    :nth-child(1) {
      animation-delay: 0s;
    }
    :nth-child(2) {
      animation-delay: 0.2s;
    }
  }
`;
const LocationContainer = styled.div`
  ${flexCenter}
`;

const City = styled.h1`
  font-size: 1.875rem;
  font-weight: bold;
  margin-top: 1.75rem;

  ${customColor}
`;

const Date = styled.h4`
  font-size: 1.06rem;
  font-weight: lighter;
  margin-top: 1rem;

  ${customColor}
`;

const WeatherContainer = styled.div`
  ${flexCenter}
`;

const Temperature = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;

  ${customColor}
`;

const Weather = styled.h3`
  font-size: 1.35rem;
  margin-top: 0.5rem;

  ${customColor}
`;

const ExtraInfoContainer = styled.div`
  width: 235px;
  height: 50px;
  margin-top: 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
`;

const Section = styled.div`
  margin: auto;
`;

const Value = styled.p`
  font-size: 12px;
  text-align: center;

  ${customColor}
`;

const Condition = styled.p`
  font-size: 12px;
  margin-top: 10px;
  text-align: center;
  opacity: 0.8;
`;
