import React from "react";
import "./App.css";
import styled from "styled-components";

import WeatherInfoSide from "./components/WeatherInfoSide";

const App = () => {
  return (
    <Container>
      <FormContainer className="formContainer">
        <WeatherInfoSide />
      </FormContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(30deg, #4757bf, #6147bf, #9345c4);
  overflow: hidden;
`;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  /* background: blue; */
  margin-right: 5%;
  margin-left: 10%;
  margin-top: 80px;
  border-radius: 20px;

  overflow: hidden;
`;

export default App;
