import styles from "./Testimonals.module.css";

export default function Testimonials() {
  const testimonials = [
    {
      name: "JustBreathe Studios",
      review:
        "Thank you @arkal1923 for Excellent website with clear content and smooth navigation, a good website experience 🥰",
    },
    {
      name: "College Project",
      review:
        "Big thanks to you for building such a clean, smooth, and professional website for me. Loved every detail 👏🙌",
    },
    {
      name: "Startup Founder",
      review:
        "ARKAL delivered exactly what we needed. The website is fast, modern and perfectly represents our brand.",
    },
    {
      name: "Business Owner",
      review:
        "Professional work and great communication throughout the project. The final website exceeded my expectations.",
    },
    {
      name: "E-commerce Client",
      review:
        "Our online store now looks premium and runs smoothly. Customers love the design and navigation.",
    },
    {
      name: "Agency Partner",
      review:
        "Reliable developer with great design sense. The website was delivered on time and works flawlessly.",
    },
  ];

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>What Our Clients Say</h2>

        <div className={styles.grid}>
          {testimonials.map((t, index) => (
            <div key={index} className={styles.card}>
              <p className={styles.review}>{t.review}</p>
              <span className={styles.name}>— {t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
