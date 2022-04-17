import styles from "./Footer.module.css";
import { MdLocationPin } from "react-icons/md";
import { AiTwotonePhone, AiFillClockCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import certified from "../../assets/images/certified.webp";
import shaw from "../../assets/images/shaw.png";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          <div className={styles.companyInfo}>
            <p className={styles.title}>A-1 Carpet & Tile</p>
            <a href="/" className={styles.link}>
              <MdLocationPin size={20} style={{ marginRight: 10 }} />
              2136 N Main St, Dayton, Ohio 45405
            </a>
            <p className={styles.description}>
              <AiFillClockCircle size={20} style={{ marginRight: 10 }} />
              Monday - Friday 9:00 AM - 5:00 PM
            </p>
            <a href="/" className={styles.link}>
              <AiTwotonePhone size={20} style={{ marginRight: 10 }} />
              937-278-7388
            </a>
          </div>
          <div className={styles.flooring}>
            <p className={styles.title}>Flooring</p>
            <Link to="/" className={styles.link}>
              Vinyl Planks
            </Link>
          </div>
          <div className={styles.otherLinks}>
            <p className={styles.title}>Other Links</p>
            <Link to="/" className={styles.link}>
              Contact
            </Link>
            <Link to="/" className={styles.link} style={{ marginTop: 10 }}>
              Visit Store
            </Link>
          </div>
        </div>
        <div className={styles.bottomFooter}>
          <p
            className={styles.description}
            style={{ fontSize: "60%", marginTop: 0 }}
          >
            &#169; 2022 A-1 Carpet and Tile.
          </p>
          <div className={styles.logoContainer}>
            <img src={shaw} className={styles.shaw} />
            <img src={certified} className={styles.certified} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
