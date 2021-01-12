import axios from "axios";

export const getWeather = async (city, countryCode) => {
  try {
    const apiKey = "daabe511835cf8a08989deaed17b52c2";
    const URI = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}&units=metric`;
    const response = await axios.get(URI);
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
