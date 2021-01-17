# Inicio rapido

1.  **Preparando proyecto.**
    Para comenzar a usar esta plantilla ejecuta:

    ```shell
    yarn install / npm install
    yarn start / npm start
    ```

2.  **Api key**
    Debe ingresar al sitio (api.openweathermap.org) y conseguir una key de acceso para poder solicitar los datos a la api.

3.  **Dentro de nuestro directorio**
    Ahora debe crear un fichero WeatherApi.js dentro de el "dir" utils/ y colocar su key id para acceder a la api.

    En este formato debe integrarlo:

```shell

    import axios from "axios";

export const getWeather = async (city, countryCode) => {
  try {
    const apiKey = "";
    const URI = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}&units=metric`;
    const response = await axios.get(URI);
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

```

4.  **Comienza a usarlo :D**

```shell

    yarn start / npm start

```
