import styles from "./Collection.module.css";
import Amazing from "./Amazing";
import Incredible from "./Incredible";

const Collection = ({ color, style }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.header}>More From {style}</p>
        {style === "amazing" && <Amazing color={color} />}
        {style === "incredible" && <Incredible color={color} />}
      </div>
    </div>
  );
};

export default Collection;
