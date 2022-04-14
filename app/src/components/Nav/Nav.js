import styles from "./Nav.module.css";
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Link to="/" className={styles.title}>A-1 Carpet Warehouse</Link>
        <div className={styles.linkContainer}>
          <Link to="/" smooth className={styles.link}>
            Vinyl Planks
          </Link>
          <Link to="/carpet" smooth className={styles.link}>
            Carpet
          </Link>
          <Link to="/contact" smooth className={styles.link}>
            Contact
          </Link>
          <button className={styles.visitBtn}>Visit Store</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
