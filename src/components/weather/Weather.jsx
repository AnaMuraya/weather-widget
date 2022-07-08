import moment from "moment";

const Weather = ({ weatherData }) => {
    const refresh = () => {
        window.location.reload()
    }

  return (
    <div>
      <div>
        <div>City: {weatherData.name}</div>
        <div>Temperature: {weatherData.main.temp}&deg;C</div>
        <div>
          Sunrise:
          {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString("en-IN")}
        </div>
        <div>
          Sunset:
          {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString("en-IN")}
        </div>
        <div>Description: {weatherData.weather[0].description}</div>
        <div>Humidity: {weatherData.main.humidity}%</div>
        <div>Day: {moment().format("dddd")}</div>
        <div>Date: {moment().format("LL")}</div>
        <button onClick={()=>refresh()}>Refresh</button>
      </div>
    </div>
  );
};

export default Weather;
