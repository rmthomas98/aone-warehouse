import styles from "./Vinyl.module.css";
import arcticOak from "../../assets/images/arctic_oak.jpg";
import espressoOak from "../../assets/images/espresso_oak.jpg";
import smokeyOak from "../../assets/images/smokey_oak.jpg";
import tavernOak from "../../assets/images/tavern_oak.jpg";
import carbonizedOak from "../../assets/images/carbonized_oak.jpg";
import oiledOak from "../../assets/images/oiled_oak.jpg";
import heritageOak from "../../assets/images/heritage_oak.jpg";
import nickelFinished from "../../assets/images/nickel_finished.jpg";

const Amazing = () => {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.productContainer}>
        <img src={arcticOak} className={styles.image} />
        <div className={styles.infoContainer}>
          <p className={styles.title}>Arctic Oak</p>
          <div className={styles.buttonContainer}>
            <button className={styles.buyNowBtn}>Buy Now</button>
            <button className={styles.detailsBtn}>Details</button>
          </div>
        </div>
      </div>
      <div className={styles.productContainer}>
        <img src={espressoOak} className={styles.image} />
        <div className={styles.infoContainer}>
          <p className={styles.title}>Espresso Oak</p>
          <div className={styles.buttonContainer}>
            <button className={styles.buyNowBtn}>Buy Now</button>
            <button className={styles.detailsBtn}>Details</button>
          </div>
        </div>
      </div>
      <div className={styles.productContainer}>
        <img src={smokeyOak} className={styles.image} />
        <div className={styles.infoContainer}>
          <p className={styles.title}>Smokey Oak</p>
          <div className={styles.buttonContainer}>
            <button className={styles.buyNowBtn}>Buy Now</button>
            <button className={styles.detailsBtn}>Details</button>
          </div>
        </div>
      </div>
      <div className={styles.productContainer}>
        <img src={tavernOak} className={styles.image} />
        <div className={styles.infoContainer}>
          <p className={styles.title}>Tavern Oak</p>
          <div className={styles.buttonContainer}>
            <button className={styles.buyNowBtn}>Buy Now</button>
            <button className={styles.detailsBtn}>Details</button>
          </div>
        </div>
      </div>
      <div className={styles.productContainer}>
        <img src={carbonizedOak} className={styles.image} />
        <div className={styles.infoContainer}>
          <p className={styles.title}>Carbonized Oak</p>
          <div className={styles.buttonContainer}>
            <button className={styles.buyNowBtn}>Buy Now</button>
            <button className={styles.detailsBtn}>Details</button>
          </div>
        </div>
      </div>
      <div className={styles.productContainer}>
        <img src={oiledOak} className={styles.image} />
        <div className={styles.infoContainer}>
          <p className={styles.title}>Naturally Oiled Oak</p>
          <div className={styles.buttonContainer}>
            <button className={styles.buyNowBtn}>Buy Now</button>
            <button className={styles.detailsBtn}>Details</button>
          </div>
        </div>
      </div>
      <div className={styles.productContainer}>
        <img src={heritageOak} className={styles.image} />
        <div className={styles.infoContainer}>
          <p className={styles.title}>Heritage Oak</p>
          <div className={styles.buttonContainer}>
            <button className={styles.buyNowBtn}>Buy Now</button>
            <button className={styles.detailsBtn}>Details</button>
          </div>
        </div>
      </div>
      <div className={styles.productContainer}>
        <img src={nickelFinished} className={styles.image} />
        <div className={styles.infoContainer}>
          <p className={styles.title}>Nickel Finished Oak</p>
          <div className={styles.buttonContainer}>
            <button className={styles.buyNowBtn}>Buy Now</button>
            <button className={styles.detailsBtn}>Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amazing;
