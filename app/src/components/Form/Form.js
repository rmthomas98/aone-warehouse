import styles from "./Form.module.css";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  const onSubmit = (data) => {
    setIsLoading(true);
    toast.promise(
      emailjs
        .sendForm(
          "service_tjig6tw",
          "template_9n4qiam",
          form.current,
          "user_14Adg2wdRXHSoBLbvlPeZ"
        )
        .then(
          (result) => {
            console.log("sent");
            setIsLoading(false);
            reset();
          },
          (error) => {
            console.log("error");
            setIsLoading(false);
          }
        ),
      {
        pending: "Sending Message",
        success: "Message Sent!",
        error: "Failed to Send",
      }
    );
  };

  return (
    <div className={styles.wrapper} id="contact-form">
      <ToastContainer position="top-center" theme="dark" />
      <form
        className={styles.container}
        onSubmit={handleSubmit(onSubmit)}
        ref={form}
      >
        <p className={styles.smallHeader}>Contact Form</p>
        <p className={styles.description}>Reach out to us with any questions you may have and we will get back with you shortly.</p>
        <div className={styles.nameContainer}>
          <div className={`${styles.inputContainer} ${styles.first}`}>
            <p
              className={`${styles.label} ${
                watch("first") ? styles.filled : ""
              }`}
            >
              First Name
            </p>
            <input
              className={styles.input}
              type="text"
              name="first"
              {...register("first", { required: true })}
            />
            {errors.first && <p className={styles.error}>* Required</p>}
          </div>
          <div className={styles.inputContainer}>
            <p
              className={`${styles.label} ${
                watch("last") ? styles.filled : ""
              }`}
            >
              Last Name
            </p>
            <input
              className={styles.input}
              type="text"
              name="last"
              {...register("last", { required: true })}
            />
            {errors.last && <p className={styles.error}>* Required</p>}
          </div>
        </div>
        <div className={styles.inputContainer}>
          <p
            className={`${styles.label} ${watch("email") ? styles.filled : ""}`}
          >
            Email
          </p>
          <input
            className={styles.input}
            type="email"
            name="email"
            {...register("email", { required: true })}
          />
          {errors.email && <p className={styles.error}>* Required</p>}
        </div>
        <div className={styles.inputContainer}>
          <p
            className={`${styles.label} ${watch("phone") ? styles.filled : ""}`}
          >
            Phone Number
          </p>
          <input
            className={styles.input}
            type="tel"
            name="phone"
            {...register("phone", { required: true })}
          />
          {errors.phone && <p className={styles.error}>* Required</p>}
        </div>
        <div className={styles.inputContainer}>
          <p
            className={`${styles.label} ${styles.textareaLabel} ${
              watch("message") ? styles.filled : ""
            }`}
          >
            Your Message
          </p>
          <textarea
            className={`${styles.input} ${styles.textarea}`}
            name="message"
            {...register("message", { required: true })}
          />
          {errors.message && <p className={styles.error}>* Required</p>}
        </div>
        <div className={styles.btnContainer}>
          <button
            type="submit"
            className={styles.submitBtn}
            disabled={isLoading}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
