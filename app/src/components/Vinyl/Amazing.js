import styles from "./Vinyl.module.css";
import arcticOak from "../../assets/images/arctic_oak.jpg";
import arcticOakRoom from "../../assets/images/arctic_oak_1.jpg";
import espressoOak from "../../assets/images/espresso_oak.jpg";
import espressoOakRoom from "../../assets/images/espresso_oak_1.jpg";
import smokeyOak from "../../assets/images/smokey_oak.jpg";
import smokeyOakRoom from "../../assets/images/smokey_oak_1.jpg";
import tavernOak from "../../assets/images/tavern_oak.jpg";
import tavernOakRoom from "../../assets/images/tavern_oak_1.jpg";
import carbonizedOak from "../../assets/images/carbonized_oak.jpg";
import carbonizedOakRoom from "../../assets/images/carbonized_oak_1.jpg";
import oiledOak from "../../assets/images/oiled_oak.jpg";
import oiledOakRoom from "../../assets/images/oiled_oak_1.jpg";
import heritageOak from "../../assets/images/heritage_oak.jpg";
import heritageOakRoom from "../../assets/images/heritage_oak_1.jpg";
import nickelFinished from "../../assets/images/nickel_finished.jpg";
import nickelFinishedRoom from "../../assets/images/nickel_finished_1.jpg";
import { Link } from "react-router-dom";

const Amazing = () => {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.productContainer}>
        <img src={arcticOak} className={styles.image} />
        <div className={styles.infoContainer}>
          <p className={styles.title}>Arctic Oak</p>
          <div className={styles.buttonContainer}>
            <Link to="/" className={styles.buyNowBtn}>
              Buy Now
            </Link>
            <Link
              to="/overview"
              className={styles.detailsBtn}
              state={{
                style: "amazing",
                closeImg: arcticOak,
                roomImg: arcticOakRoom,
                color: "arctic oak",
              }}
            >
              Details
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.productContainer}>
        <img src={espressoOak} className={styles.image} />
        <div className={styles.infoContainer}>
          <p className={styles.title}>Espresso Oak</p>
          <div className={styles.buttonContainer}>
            <Link to="/" className={styles.buyNowBtn}>
              Buy Now
            </Link>
            <Link
              to="/overview"
              className={styles.detailsBtn}
              state={{
                style: "amazing",
                closeImg: espressoOak,
                roomImg: espressoOakRoom,
                color: "espresso oak",
              }}
            >
              Details
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.productContainer}>
        <img src={smokeyOak} className={styles.image} />
        <div className={styles.infoContainer}>
          <p className={styles.title}>Smokey Oak</p>
          <div className={styles.buttonContainer}>
            <Link to="/" className={styles.buyNowBtn}>
              Buy Now
            </Link>
            <Link
              to="/overview"
              className={styles.detailsBtn}
              state={{
                style: "amazing",
                closeImg: smokeyOak,
                roomImg: smokeyOakRoom,
                color: "smokey oak",
              }}
            >
              Details
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.productContainer}>
        <img src={tavernOak} className={styles.image} />
        <div className={styles.infoContainer}>
          <p className={styles.title}>Tavern Oak</p>
          <div className={styles.buttonContainer}>
            <Link to="/" className={styles.buyNowBtn}>
              Buy Now
            </Link>
            <Link
              to="/overview"
              className={styles.detailsBtn}
              state={{
                style: "amazing",
                closeImg: tavernOak,
                roomImg: tavernOakRoom,
                color: "tavern oak",
              }}
            >
              Details
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.productContainer}>
        <img src={carbonizedOak} className={styles.image} />
        <div className={styles.infoContainer}>
          <p className={styles.title}>Carbonized Oak</p>
          <div className={styles.buttonContainer}>
            <Link to="/" className={styles.buyNowBtn}>
              Buy Now
            </Link>
            <Link
              to="/overview"
              className={styles.detailsBtn}
              state={{
                style: "amazing",
                closeImg: carbonizedOak,
                roomImg: carbonizedOakRoom,
                color: "carbonized oak",
              }}
            >
              Details
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.productContainer}>
        <img src={oiledOak} className={styles.image} />
        <div className={styles.infoContainer}>
          <p className={styles.title}>Naturally Oiled Oak</p>
          <div className={styles.buttonContainer}>
            <Link to="/" className={styles.buyNowBtn}>
              Buy Now
            </Link>
            <Link
              to="/overview"
              className={styles.detailsBtn}
              state={{
                style: "amazing",
                closeImg: oiledOak,
                roomImg: oiledOakRoom,
                color: "naturally oiled oak",
              }}
            >
              Details
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.productContainer}>
        <img src={heritageOak} className={styles.image} />
        <div className={styles.infoContainer}>
          <p className={styles.title}>Heritage Oak</p>
          <div className={styles.buttonContainer}>
            <Link to="/" className={styles.buyNowBtn}>
              Buy Now
            </Link>
            <Link
              to="/overview"
              className={styles.detailsBtn}
              state={{
                style: "amazing",
                closeImg: heritageOak,
                roomImg: heritageOakRoom,
                color: "heritage oak",
              }}
            >
              Details
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.productContainer}>
        <img src={nickelFinished} className={styles.image} />
        <div className={styles.infoContainer}>
          <p className={styles.title}>Nickel Finished Oak</p>
          <div className={styles.buttonContainer}>
            <Link to="/" className={styles.buyNowBtn}>
              Buy Now
            </Link>
            <Link
              to="/overview"
              className={styles.detailsBtn}
              state={{
                style: "amazing",
                closeImg: nickelFinished,
                roomImg: nickelFinishedRoom,
                color: "nickel finished oak",
              }}
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amazing;
