"use client";

import styles from "./Team.module.css";

export default function Team() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <h2 className={styles.title}>Who We Are and Our Goals</h2>

          <p className={styles.description}>
            We are a passionate team of developers and UI/UX designers focused
            on building modern, scalable and visually stunning digital
            experiences. Our team consists of talented designers and engineers
            who collaborate to transform ideas into fully functional products.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Our Team</h3>
            <p className={styles.cardText}>
              Our team consists of 7–8 skilled professionals including front-end
              developers, back-end engineers and UI/UX designers. Each member
              brings unique expertise to ensure that every project is built with
              creativity, precision and modern technology.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Our Mission</h3>
            <p className={styles.cardText}>
              Our mission is to create high-quality digital solutions that help
              individuals, students and businesses establish a strong online
              presence through modern design and scalable development.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Our Vision</h3>
            <p className={styles.cardText}>
              We aim to become a trusted digital partner by delivering
              innovative solutions, clean code and intuitive user experiences
              that drive growth and long-term success.
            </p>
          </div>
        </div>

        <div className={styles.stats}>
          <div className={styles.statItem}>
            <h3>8+</h3>
            <p>Team Members</p>
          </div>

          <div className={styles.statItem}>
            <h3>20+</h3>
            <p>Projects Built</p>
          </div>

          <div className={styles.statItem}>
            <h3>100%</h3>
            <p>Client Focused</p>
          </div>
        </div>
      </div>
    </section>
  );
}
