import styles from "./Nav.module.css";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Link to="/" className={styles.title}>
          A-1 Carpet & Tile
        </Link>
        <div className={styles.linkContainer}>
          <Link
            to="/"
            className={styles.link}
            style={{
              color: pathname === "/" ? "#000" : "",
              fontWeight: pathname === "/" ? "700" : "",
            }}
          >
            Vinyl Planks
          </Link>
          {/* <Link
            to="/carpet"
            className={styles.link}
            style={{ color: pathname === "/carpet" ? "#000" : "", fontWeight: pathname === "/carpet" ? "700" : "" }}
          >
            Carpet
          </Link> */}
          <Link
            to="/contact"
            className={styles.link}
            style={{
              color: pathname === "/contact" ? "#000" : "",
              fontWeight: pathname === "/contact" ? "700" : "",
            }}
          >
            Contact
          </Link>
          <button className={styles.visitBtn}>Visit Store</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
