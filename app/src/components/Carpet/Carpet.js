import { useState } from "react";
import styles from "./Carpet.module.css";
import Nav from "./Nav";

const Carpet = () => {

  const [tab, setTab] = useState('shazam')

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Nav tab={tab} setTab={setTab} />
      </div>
    </div>
  );
};

export default Carpet;
