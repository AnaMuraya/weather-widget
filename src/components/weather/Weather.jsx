import moment from "moment";
import { ReloadOutlined } from "@ant-design/icons";
import styles from "./style.module.scss";

const Weather = ({ weatherData }) => {
  const refresh = () => {
    window.location.reload();
  };

  return (
    <div>
      <div className={styles.weatherCard}>
        <div className={styles.weatherName}>{weatherData.name}</div>
        <div className={styles.weatherTemperature}>
          {weatherData.main.temp}&deg;C
        </div>
        <div className={styles.weatherDesc}>
          {weatherData.weather[0].description}
        </div>
        <div className={styles.weatherInfo}>
          <div className={styles.infoCard}>
            <div className={styles.info}>Sunrise</div>
            <div className={styles.info}>
              {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(
                "en-IN"
              )}
            </div>
            <div className={styles.info}>
              <img
                src="https://img.icons8.com/external-filled-outline-02-chattapat-/64/000000/external-sunrise-spring-filled-outline-02-chattapat-.png"
                alt=""
              />
            </div>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.info}>Sunset</div>
            <div className={styles.info}>
              {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
                "en-IN"
              )}
            </div>
            <div className={styles.info}>
              <img
                src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-evening-morning-flaticons-flat-flat-icons-2.png"
                alt=""
              />
            </div>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.info}>Humidity</div>
            <div className={styles.info}>{weatherData.main.humidity}%</div>
            <div className={styles.info}>
              <img
                src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-humidity-plants-flaticons-flat-flat-icons-2.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={styles.dayTime}>
          {/*add weather img*/}
          <div className={styles.day}>{moment().format("dddd")}</div>
          <div className={styles.time}>{moment().format("LL")}</div>
        </div>
        <div className={styles.weatherRefresh}>
          <button onClick={() => refresh()}>
            <ReloadOutlined />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Weather;
