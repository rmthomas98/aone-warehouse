import styles from "./Vinyl.module.css";
import lightOak from "../../assets/images/light_oak.jpg";
import silverRustic from "../../assets/images/silver_rustic.jpg";
import toasted from "../../assets/images/toasted.jpg";
import antique from "../../assets/images/antique.jpg";
import wheatfeild from "../../assets/images/wheatfeild.jpg";
import dawn from "../../assets/images/dawn.jpg";
import weathered from "../../assets/images/weathered.jpg";
import twine from "../../assets/images/twine.jpg";

const Incredible = () => {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.productContainer}>
        <img src={lightOak} className={styles.image} />
        <div className={styles.infoContainer}>
          <p className={styles.title}>Light Oak</p>
          <div className={styles.buttonContainer}>
            <button className={styles.buyNowBtn}>Buy Now</button>
            <button className={styles.detailsBtn}>Details</button>
          </div>
        </div>
      </div>
      <div className={styles.productContainer}>
        <img src={silverRustic} className={styles.image} />
        <div className={styles.infoContainer}>
          <p className={styles.title}>Silver Rustic Oak</p>
          <div className={styles.buttonContainer}>
            <button className={styles.buyNowBtn}>Buy Now</button>
            <button className={styles.detailsBtn}>Details</button>
          </div>
        </div>
      </div>
      <div className={styles.productContainer}>
        <img src={toasted} className={styles.image} />
        <div className={styles.infoContainer}>
          <p className={styles.title}>Toasted Barnboard</p>
          <div className={styles.buttonContainer}>
            <button className={styles.buyNowBtn}>Buy Now</button>
            <button className={styles.detailsBtn}>Details</button>
          </div>
        </div>
      </div>
      <div className={styles.productContainer}>
        <img src={antique} className={styles.image} />
        <div className={styles.infoContainer}>
          <p className={styles.title}>Antique Oak</p>
          <div className={styles.buttonContainer}>
            <button className={styles.buyNowBtn}>Buy Now</button>
            <button className={styles.detailsBtn}>Details</button>
          </div>
        </div>
      </div>
      <div className={styles.productContainer}>
        <img src={wheatfeild} className={styles.image} />
        <div className={styles.infoContainer}>
          <p className={styles.title}>Wheatfeild</p>
          <div className={styles.buttonContainer}>
            <button className={styles.buyNowBtn}>Buy Now</button>
            <button className={styles.detailsBtn}>Details</button>
          </div>
        </div>
      </div>
      <div className={styles.productContainer}>
        <img src={dawn} className={styles.image} />
        <div className={styles.infoContainer}>
          <p className={styles.title}>Dawn's Early Light</p>
          <div className={styles.buttonContainer}>
            <button className={styles.buyNowBtn}>Buy Now</button>
            <button className={styles.detailsBtn}>Details</button>
          </div>
        </div>
      </div>
      <div className={styles.productContainer}>
        <img src={weathered} className={styles.image} />
        <div className={styles.infoContainer}>
          <p className={styles.title}>Weathered Barnboard</p>
          <div className={styles.buttonContainer}>
            <button className={styles.buyNowBtn}>Buy Now</button>
            <button className={styles.detailsBtn}>Details</button>
          </div>
        </div>
      </div>
      <div className={styles.productContainer}>
        <img src={twine} className={styles.image} />
        <div className={styles.infoContainer}>
          <p className={styles.title}>Light Twine</p>
          <div className={styles.buttonContainer}>
            <button className={styles.buyNowBtn}>Buy Now</button>
            <button className={styles.detailsBtn}>Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Incredible;
