import styles from "./Overview.module.css";
import logo from "../../assets/images/stonecast.jpg";
import SimpleImageSlider from "react-simple-image-slider";
import arcticOak from "../../assets/images/arctic_oak.jpg";
import arcticOakRoom from "../../assets/images/arctic_oak_1.jpg";
import { Link } from "react-router-dom";

const Overview = () => {
  const images = [
    {
      url: arcticOak,
    },
    {
      url: arcticOakRoom,
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img src={logo} className={styles.logo} />
        <div className={styles.flexContainer}>
          <SimpleImageSlider
            width={600}
            height={600}
            images={images}
            showBullets={true}
            showNavs={true}
            navMargin={0}
            navSize={40}
            navStyle={2}
          />
          <div className={styles.infoContainer}>
            <p className={styles.style}>Amazing</p>
            <p className={styles.color}>Arctic Oak</p>
            <div className={styles.specsContainer} style={{borderTop: '1px solid #d3d9e5'}}>
              <p className={styles.title}>Plank Size</p>
              <p className={styles.description}>&bull; 7" x 48" nominal</p>
              <p className={styles.description}>&bull; 5.0 mm total thickness</p>
            </div>
          <div className={styles.specsContainer}>
            <p className={styles.title}>Packaging</p>
            <p className={styles.description}>&bull; 12 pieces per carton (42 lbs)</p>
            <p className={styles.description}>&bull; 28.4 SF per carton</p>
          </div>
          <div className={styles.specsContainer}>
            <p className={styles.title}>Wear Layer</p>
            <p className={styles.description}>&bull; 12 mil / UV-Cured Urethane</p>
          </div>
          <div className={styles.specsContainer}>
            <p className={styles.title}>Edge Treatment</p>
            <p className={styles.description}>&bull; Four-Sided Microbevel</p>
          </div>
          <div className={styles.specsContainer}>
            <p className={styles.title}>Installation</p>
            <p className={styles.description}>&bull; Click floating floor</p>
          </div>
          <div className={styles.specsContainer}>
            <p className={styles.title}>Warranties</p>
            <p className={styles.description}>&bull; Lifetime Residential Wear</p>
            <p className={styles.description}>&bull; 10-Year Commercial Wear</p>
          </div>
          <div className={styles.buttonContainer}>
          <Link to="/contact" className={styles.buyBtn}>Buy Now</Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
