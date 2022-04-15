import styles from './Carpet.module.css'

const Nav = ({ tab, setTab }) => {
  return (
    <div className={styles.navContainer}>
      <p
        className={styles.navLink}
        onClick={() => setTab("shazam")}
        style={{
          background: tab === "shazam" ? "#fff" : "",
          color: tab === "shazam" ? "#000" : "",
          boxShadow: tab === "shazam" ? "0px 1px 3px #0000003b" : "",
        }}
      >
        Shazam
      </p>
      {/* <p
        className={styles.navLink}
        onClick={() => setTab("after-it")}
        style={{
          background: tab === "after-it" ? "#fff" : "",
          color: tab === "after-it" ? "#000" : "",
          boxShadow: tab === "after-it" ? "0px 1px 3px #0000003b" : "",
          marginRight: 0,
        }}
      >
        After It
      </p> */}
    </div>
  );
};

export default Nav;
