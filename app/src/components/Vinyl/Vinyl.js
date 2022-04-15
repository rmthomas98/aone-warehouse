import styles from "./Vinyl.module.css";
import Amazing from "./Amazing";
import { useState } from "react";
import Nav from "./Nav";
import Incredible from "./Incredible";

const Vinyl = () => {
  const [tab, setTab] = useState("amazing");

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Nav tab={tab} setTab={setTab} />
        {tab === "amazing" && <Amazing />}
        {tab === "incredible" && <Incredible />}
      </div>
    </div>
  );
};

export default Vinyl;
