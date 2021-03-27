import { useEffect, useState } from "react";
import axios from "axios";

export const useGetWeather = (city, countryCode) => {
  const [data, setData] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const apiKey = "daabe511835cf8a08989deaed17b52c2";

  const URI = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}&units=metric`;

  useEffect(() => {
    const doFetch = async () => {
      const fetchData = async () => {
        try {
          setIsFetching(true);
          const response = await axios.get(URI);
          const data = await response.data;
          setData(data);
        } catch (e) {
          setError(e);
        } finally {
          setIsFetching(false);
        }
      };
      fetchData();
    };
    doFetch();
  }, [URI]);

  return {
    data,
    isFetching,
    error,
  };
};
