import React, { useEffect, useState } from "react";
import styled from "styled-components";

const defaultValue = () => {
  return {
    city: "Moscow",
    countryCode: "ru",
  };
};

const WeatherForm = () => {
  return (
    <Wrapper>
      <Form>
        <Input />
        <Input />
        <Button>search</Button>
      </Form>
    </Wrapper>
  );
};

export default WeatherForm;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-self: center;
`;
const Form = styled.form`
  width: 265px;
  height: 170px;
  margin: 0 auto;
  padding: 20px 30px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 30px 30px 0 0;
`;

const Input = styled.input`
  width: 189px;
  height: 33px;
  padding: 5px 18px;
  margin-bottom: 1rem;

  background: #ffffff;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(77, 108, 170, 0.3);
  border-radius: 20px;
  outline: none;
`;

const Button = styled.button`
  padding: 12px 46px;
  margin-top: 10px;
  width: 131px;
  height: 32px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  color: #ffffff;
  font-weight: lighter;
  font-size: 1rem;

  background: #0071e3;
  border-radius: 20px;
  border: unset;
`;
