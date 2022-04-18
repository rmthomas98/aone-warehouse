import styles from "./Overview.module.css";
import logo from "../../assets/images/stonecast.jpg";
import SimpleImageSlider from "react-simple-image-slider";
import arcticOak from "../../assets/images/arctic_oak.jpg";
import arcticOakRoom from "../../assets/images/arctic_oak_1.jpg";
import { Link, useLocation } from "react-router-dom";
import Collection from "../Collection/Collection";
import { useEffect, useState } from "react";
import { useWindowWidth } from "@react-hook/window-size";

const Overview = () => {
  const location = useLocation();

  const width = useWindowWidth();

  const [style, setStyle] = useState();
  const [color, setColor] = useState();
  const [img, setImg] = useState();
  const [size, setSize] = useState();

  const images = [
    {
      url: img?.room,
    },
    {
      url: img?.closeUp,
    },
  ];

  useEffect(() => {
    if (width >= 1000) {
      setSize(600);
    } else if (width > 750) {
      setSize(width - 300);
    } else {
      setSize(width - 32);
    }
  }, [width]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    setImg();
    setTimeout(() => {
      if (location.state?.style) {
        setStyle(location.state.style);
        setColor(location.state.color);
        setImg({
          closeUp: location.state.closeImg,
          room: location.state.roomImg,
        });
      } else {
        setStyle("amazing");
        setColor("arctic oak");
        setImg({ closeUp: arcticOak, room: arcticOakRoom });
      }
    }, 0.1);
  }, [location]);

  if (!img) return <div className={styles.loading}></div>;

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img src={logo} className={styles.logo} />
        <div className={styles.flexContainer}>
          <SimpleImageSlider
            height={size}
            width={size}
            images={images}
            showBullets={true}
            showNavs={true}
            navMargin={0}
            navSize={40}
            navStyle={2}
          />
          <div className={styles.infoContainer}>
            <p className={styles.style}>{style}</p>
            <p className={styles.color}>{color}</p>
            <div
              className={styles.specsContainer}
              style={{ borderTop: "1px solid #d3d9e5" }}
            >
              <p className={styles.title}>Plank Size</p>
              <p className={styles.description}>&bull; 7" x 48" nominal</p>
              <p className={styles.description}>
                &bull; 5.0 mm total thickness
              </p>
            </div>
            <div className={styles.specsContainer}>
              <p className={styles.title}>Packaging</p>
              <p className={styles.description}>
                &bull; 12 pieces per carton (42 lbs)
              </p>
              <p className={styles.description}>&bull; 28.4 SF per carton</p>
            </div>
            <div className={styles.specsContainer}>
              <p className={styles.title}>Wear Layer</p>
              <p className={styles.description}>
                &bull; 12 mil / UV-Cured Urethane
              </p>
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
              <p className={styles.description}>
                &bull; Lifetime Residential Wear
              </p>
              <p className={styles.description}>
                &bull; 10-Year Commercial Wear
              </p>
            </div>
            <div className={styles.buttonContainer}>
              <Link to="/contact" className={styles.buyBtn}>
                Buy Now
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.mobileContainer}>
          <div className={styles.specContainer}>
            <p>{style}</p>
            <p>{color}</p>
          </div>
        </div>
        <Collection color={color} style={style} />
      </div>
    </div>
  );
};

export default Overview;
