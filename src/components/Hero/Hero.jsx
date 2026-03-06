"use client";

import { useState, useEffect } from "react";
import styles from "./Hero.module.css";

export default function Hero() {

  const images = [
    "/hero/1.png",
    "/hero/2.png",
    "/hero/3.png"
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {

    const interval = setInterval(() => {

      setFade(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 400);

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  return (
    <section className={styles.heroSection}>

      <div className={styles.heroContainer}>

        <div className={styles.leftSide}>

          <div className={styles.badge}>
            ARKAL WEB SOLUTIONS
          </div>

          <h1 className={styles.heroTitle}>
            We Build <span>Powerful Websites</span>  
            That Grow Your Business
          </h1>

          <p className={styles.heroDescription}>
            We design and develop high-performance websites that help
            brands stand out, attract customers and scale faster.
          </p>

          <div className={styles.services}>
            <span>Web Design</span>
            <span>Website Development</span>
            <span>UI / UX Design</span>
            <span>Landing Pages</span>
            <span>Business Websites</span>
          </div>

          <div className={styles.buttons}>
            <button className={styles.primaryBtn}>
              Get Your Website
            </button>

            <button className={styles.secondaryBtn}>
              View Our Work
            </button>
          </div>

        </div>

        <div className={styles.rightSide}>

          <div className={styles.deviceFrame}>

            <img
              src={images[index]}
              alt="Website preview"
              className={`${styles.previewImage} ${fade ? styles.fadeIn : styles.fadeOut}`}
            />

          </div>

        </div>

      </div>

    </section>
  );
}