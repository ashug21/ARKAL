import Link from "next/link";
import styles from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footerz}>
      <div className={styles.containerz}>
        <div className={styles.topz}>
          <div className={styles.brandz}>
            <h2 className={styles.logoz}>ARKAL</h2>
            <p className={styles.descz}>
              We build modern, high-performance websites designed to help
              businesses grow online with clean design and smooth user
              experience.
            </p>
          </div>

          <div className={styles.linksz}>
            <h3 className={styles.headingz}>Quick Links</h3>
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>Why Us</li>
              <li>Testimonials</li>
              <li>Enquiry</li>
            </ul>
          </div>

          <div className={styles.socialz}>
            <h3 className={styles.headingz}>Connect</h3>

            <div className={styles.iconsz}>
              <Link href="https://www.instagram.com/arkal1923/" className={styles.iconboxz}>
                <Image
                  src="/instagram.png"
                  width={32}
                  height={32}
                  alt="instagram"
                />
              </Link>

              <Link href="https://wa.me/9971911118" className={styles.iconboxz}>
                <Image
                  src="/whatsapp.png"
                  width={32}
                  height={32}
                  alt="whatsapp"
                />
              </Link>
            </div>

            <p className={styles.textz}>
              Message us anytime for website enquiries.
            </p>
          </div>
        </div>

        <div className={styles.bottomz}>
          <p>© 2026 ARKAL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
