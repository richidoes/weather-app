import React from "react";
import "./App.css";
import styled from "styled-components";
import WeatherInfo from "./components/WeatherInfo";
import WeatherForm from "./components/WeatherForm";
import bigsur from "./images/big-sur.png";

const App = () => {
  return (
    <Container>
      <Wrapper>
        <WeatherInfo />
        <WeatherForm />
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
