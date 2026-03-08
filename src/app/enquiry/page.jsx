"use client";

import Navbar from "@/components/Navbar/Navbar";
import styles from "./enquiry.module.css";

export default function Enquiry() {
  return (
    <div>

        <Navbar/>

        <br/><br/>
        <br/><br/>
      <section className={styles.enquirySection}>
        <div className={styles.enquiryContainer}>
          <div className={styles.imageSide}>
            <img src="/image.png" className={styles.image} />
          </div>

          <div className={styles.formSide}>
            <h2 className={styles.title}>Make an Enquiry</h2>

            <p className={styles.subtitle}>
            Tell us about your idea, and we'll turn it into clean, scalable code that brings your vision to life.
            </p>

            <form className={styles.form}>
              <input
                type="text"
                placeholder="Your Name"
                className={styles.input}
              />

              <input
                type="email"
                placeholder="Email Address"
                className={styles.input}
              />

              <input
                type="text"
                placeholder="Business / Company Name"
                className={styles.input}
              />

              <textarea
                placeholder="Tell us about your website project"
                className={styles.textarea}
              />

              <button className={styles.submitBtn}>Send Enquiry</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
