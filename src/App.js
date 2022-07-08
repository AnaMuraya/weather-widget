import { useEffect, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import "./App.scss";
import Weather from "./components/weather/Weather";

function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
        });
    };

    fetchData();
  }, [lat, long]);

  return (
    <div className="App" data-testid="app">
      <div className="heading">
        <h3>Weather!!!</h3>
      </div>
      <div className="widget">
        {typeof data.main != "undefined" ? (
          <Weather weatherData={data} />
        ) : (
          <div>
            Relax*** <br /> <LoadingOutlined />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
