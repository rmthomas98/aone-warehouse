import styles from "./Vinyl.module.css";

const Nav = ({ tab, setTab }) => {
  return (
    <div className={styles.navContainer}>
      <p
        className={styles.navLink}
        onClick={() => setTab("amazing")}
        style={{
          background: tab === "amazing" ? "#fff" : "",
          color: tab === "amazing" ? "#000" : "",
          boxShadow: tab === "amazing" ? "0px 1px 3px #0000003b" : "",
        }}
      >
        Amazing
      </p>
      <p
        className={styles.navLink}
        onClick={() => setTab("incredible")}
        style={{
          background: tab === "incredible" ? "#fff" : "",
          color: tab === "incredible" ? "#000" : "",
          boxShadow: tab === "incredible" ? "0px 1px 3px #0000003b" : "",
          marginRight: 0,
        }}
      >
        Incredible
      </p>
      {/* <p
        className={styles.navLink}
        onClick={() => setTab("invincible")}
        style={{
          background: tab === "invincible" ? "#fff" : "",
          color: tab === "invincible" ? "#000" : "",
          boxShadow: tab === "invincible" ? "0px 1px 3px #0000003b" : "",
          marginRight: 0,
        }}
      >
        Invincible
      </p> */}
    </div>
  );
};

export default Nav;
