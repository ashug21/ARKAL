import Navbar from "@/components/Navbar/Navbar";
import styles from "./portfolio.module.css";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";

export default function Portfolio() {
  return (
    <div>
        <Navbar/>

        <br/><br/>
        <br/><br/>
        <br/><br/>
      <section className={styles.portfolioSectionz}>
        <div className={styles.containerz}>
          <h2 className={styles.titlez}>About Our Team</h2>

          <div className={styles.gridz}>
            <div className={styles.cardz}>
              <h3 className={styles.rolez}>Web Developer / Coding Team Lead</h3>
              <p className={styles.descz}>
                Explore modern, fast and scalable websites built with clean
                design and strong performance.
              </p>

              <div className={styles.actionsz}>
                <Link
                  href="https://portfolio-kz5w.vercel.app"
                  target="_blank"
                  className={styles.primarybtnz}
                >
                  Visit Portfolio
                </Link>

                <Link 
                  href="/resume/Ashmeet_Resume.pdf"
                  download
                  className={styles.secondarybtnz}
                >
                  Download Resume
                </Link>
              </div>
            </div>

            <div className={styles.cardz}>
              <h3 className={styles.rolez}>UI / UX Designer</h3>
              <p className={styles.descz}>
                Discover creative interface designs, modern layouts and
                user-focused digital experiences.
              </p>

              <div className={styles.actionsz}>
                <a
                  href="https://your-designer-portfolio-link.com"
                  target="_blank"
                  className={styles.primarybtnz}
                >
                  Visit Portfolio
                </a>

                <a
                  href="/designer-resume.pdf"
                  download
                  className={styles.secondarybtnz}
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.emptySection}>
  Empty section
</div>

      <Footer/>
    </div>
  );
}
