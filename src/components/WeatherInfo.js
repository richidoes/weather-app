import React from "react";
import styled from "styled-components";
import moment from "moment";

const WeatherInfo = ({ data, error, isFetching }) => {
  const city = data;
  console.log(city);
  // const { temp, humidity, pressure } = data.main;
  // const { country } = data.sys;
  // const weather = data.weather[0].description;
  // const wind = data.wind.speed;

  const dayName = moment().format("dddd");
  // const fullDate = moment().format("D MMM YYYY");
  const midDate = moment().format("D MMM");

  return (
    <Wrapper>
      {isFetching ? (
        <span>Loading</span>
      ) : (
        <>
          <LocationContainer>
            <City>{/* {city} / {country} */}</City>
            <Date>
              {midDate}, {dayName}
            </Date>
          </LocationContainer>
          <WeatherContainer>
            <Temperature> °C</Temperature>
            <Weather></Weather>
            <ExtraInfoContainer>
              <Section>
                <Value> bar</Value>
                <Condition>Pressure</Condition>
              </Section>
              <Section>
                <Value> %</Value>
                <Condition>Humidity</Condition>
              </Section>
              <Section>
                <Value> m/s</Value>
                <Condition>Wind</Condition>
              </Section>
            </ExtraInfoContainer>
          </WeatherContainer>
        </>
      )}
    </Wrapper>
  );
};

export default WeatherInfo;

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
