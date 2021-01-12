import React, { useState } from "react";
import styled from "styled-components";
import swal from "sweetalert";
import WeatherSide from "./WeatherSide";

const WeatherInfoSide = () => {
  const [formData, setformData] = useState(defaultFormData());
  const [weatherInfo, setWeatherInfo] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();

    const { city, countryCode } = formData;

    if (!city.trim()) {
      swal("Need city!", "Please enter city!", "warning");
    } else if (!countryCode.trim()) {
      swal("Need contry code!", "Please enter country code!", "warning");
    } else {
      setWeatherInfo({
        city,
        countryCode,
      });
      setformData(defaultFormData());
    }
  };

  const onChange = (e, type) => {
    setformData({ ...formData, [type]: e.target.value });
  };

  return (
    <>
      <WeatherSide weatherInfo={weatherInfo} />
      <Info className="formInfo">
        <Form onSubmit={onSubmit}>
          <InputField className="inputContainer">
            <Input
              placeholder=" City "
              onChange={(e) => onChange(e, "city")}
              value={formData.city}
            />
          </InputField>
          <InputField className="inputContainer">
            <Input
              placeholder=" Country code "
              onChange={(e) => onChange(e, "countryCode")}
              value={formData.countryCode}
            />
          </InputField>
          <Submit type="submit">Change location</Submit>
        </Form>
      </Info>
    </>
  );
};

const defaultFormData = () => {
  return {
    city: "",
    countryCode: "",
  };
};

const Info = styled.div`
  overflow: hidden;
  height: 51vh;
  margin-left: 200px;
  padding: 40px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  color: #fff;
`;
const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 200px;
  margin-right: 5%;
  margin-left: 5%;
  margin-top: 150px;
  border-radius: 20px;
`;

const InputField = styled.div`
  max-width: 380px;
  width: 100%;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.3);
  margin: 10px 0;
  border-radius: 55px;
  display: grid;
  padding: 0.4rem;
`;
const Input = styled.input`
  padding-right: 20px;
  padding-left: 20px;
  background: none;
  outline: none;
  border: none;
  line-height: 1;
  font-weight: 700;
  font-size: 1.1rem;
  color: #fff;
  overflow: hidden;

  &&::placeholder {
    color: #aaa;
    font-weight: 500;
  }
`;
const Submit = styled.button`
  width: 230px;
  height: 35px;
  border: none;
  outline: none;
  border-radius: 49px;
  cursor: pointer;
  background: linear-gradient(135deg, #72edf2 10%, #5151e5 100%);
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  transition: 0.5s;

  :hover {
    -webkit-transform: scale(0.95);
    -ms-transform: scale(0.95);
    transform: scale(0.95);
  }
`;

export default WeatherInfoSide;
