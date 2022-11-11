import styles from "./style.module.scss";
import { ReloadOutlined } from "@ant-design/icons";

const Sample = () => {
  const refresh = () => {
    window.location.reload();
  };
  return (
    <div>
      <div className={styles.weatherCard}>
        <div className={styles.weatherName}>Nairobi</div>
        <div className={styles.weatherTemperature}>30&deg;C</div>
        <div className={styles.weatherDesc}>Broken clouds</div>
        <div className={styles.weatherInfo}>
          <div className={styles.infoCard}>
            <div className={styles.info}>Sunrise</div>
            <div className={styles.info}>5.55</div>
            <div className={styles.info}>
              <img
                src="https://img.icons8.com/external-filled-outline-02-chattapat-/64/000000/external-sunrise-spring-filled-outline-02-chattapat-.png"
                alt=""
              />
            </div>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.info}>Sunset</div>
            <div className={styles.info}>18.00</div>
            <div className={styles.info}>
              <img
                src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-evening-morning-flaticons-flat-flat-icons-2.png"
                alt=""
              />
            </div>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.info}>Humidity</div>
            <div className={styles.info}>77%</div>
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
          <div className={styles.day}>Saturday</div>
          <div className={styles.time}>July 9 2022</div>
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

export default Sample;
