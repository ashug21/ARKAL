"use client"

import Navbar from "@/components/Navbar/Navbar"
import styles from "./contact.module.css"
import Link from "next/link"
import Footer from "@/components/Footer/Footer"

const Contact = () => {
  return (
    <div className={styles.page}>

      <Navbar/>

      <section className={styles.contactSection}>

        <div className={styles.container}>

          <h1 className={styles.title}>Contact Us</h1>

          <form className={styles.form}>

            <input
              type="text"
              placeholder="Full Name"
              className={styles.input}
            />

            <input
              type="email"
              placeholder="Email Address"
              className={styles.input}
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className={styles.input}
            />

            <textarea
              placeholder="Your Message"
              className={styles.textarea}
            />

            <button className={styles.button}>
              Send Message
            </button>

          </form>

        </div>

      </section>


      <section className={styles.connectSection}>

        <div className={styles.container}>

          <h2 className={styles.connectTitle}>Connect With Us</h2>

          <div className={styles.socialGrid}>

            <Link
              href="https://www.instagram.com/arkal1923/"
              target="_blank"
              className={styles.socialCard}
            >
              <img
                src="/instagram.png"
                className={styles.icon}
              />
              Instagram
            </Link>

            <Link
              href="https://wa.me/9971911118"
              target="_blank"
              className={styles.socialCard}
            >
              <img
                src="/whatsapp.png"
                className={styles.icon}
              />
              Whatsapp
            </Link>

          </div>

          <div className={styles.phoneBox}>

            <p className={styles.phoneTitle}>
              Or Call Us at
            </p>

            <p className={styles.phoneNumbers}>
              +91 9971911118
            </p>

          </div>

        </div>

      </section>

<Footer/>
    </div>
  )
}

export default Contact