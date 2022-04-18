import styles from "./Contact.module.css";
import { AiTwotonePhone, AiFillClockCircle } from "react-icons/ai";
import { HiMail } from "react-icons/hi";
import { Link as ScrollLink } from "react-scroll";
import Form from "../Form/Form";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.banner}>
        <p className={styles.header}>Contact Us</p>
        <p className={styles.subHeader}>
          We are committed to providing a high level of support to our current
          and future customers. When you need answers we are there to get the
          job done.
        </p>
      </div>
      <div className={styles.container}>
        <p className={styles.smallHeader}>How to Reach Us</p>
        <div className={styles.flexContainer}>
          <div className={styles.flexChildContainer}>
            <p className={styles.title}>By Email</p>
            <p className={styles.description}>
              Your email won&#39;t get lost in our inbox. Submit a message below
              or email us and a member of our client success team will contact
              you the same day your email is received.
            </p>
            <a href="mailto:rmthomas@aonecarpet.com" className={styles.link}>
              <HiMail style={{ marginRight: 5 }} size={20} />
              rmthomas@aonecarpet.com
            </a>
            <div className={styles.btnContainer}>
              <ScrollLink smooth to="contact-form" className={styles.actionBtn}>
                Send Message
              </ScrollLink>
            </div>
          </div>
          <div className={styles.flexChildContainer}>
            <p className={styles.title}>By Phone</p>
            <p className={styles.description}>
              There are no hold times or long phone queues with us. You can
              reach our client success team by phone at:
            </p>
            <a
              href="tel:9372787388"
              className={styles.link}
              style={{ fontSize: "70%" }}
            >
              <AiTwotonePhone size={20} style={{ marginRight: 5 }} />
              937-278-7388
            </a>
            <p className={styles.link}>
              <AiFillClockCircle size={20} style={{ marginRight: 5 }} />
              Monday-Friday: 9am - 5pm
            </p>
            <div className={styles.btnContainer}>
              <a href="tel:9372787388" className={styles.actionBtn}>
                Call Now
              </a>
            </div>
          </div>
          <div className={styles.flexChildContainer} style={{ marginRight: 0 }}>
            <p className={styles.title}>Live Chat</p>
            <p className={styles.description}>Need quick answers?</p>
            <p className={styles.description} style={{ marginTop: 20 }}>
              Use our live chat feature for immediate assistance from a member
              of our client success team.
            </p>
          </div>
        </div>
      </div>
      <Form />
    </div>
  );
};

export default Contact;
