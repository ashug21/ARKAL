"use client"

import styles from "./WhyUs.module.css";

export default function WhyChooseUs(){

return(

<section className={styles.section}>

<div className={styles.container}>

<div className={styles.left}>

<h2 className={styles.title}>Why Choose Us</h2>

<p className={styles.subtitle}>
We build modern, scalable websites using the latest technologies and development practices.
</p>

<ul className={styles.points}>

<li>Modern JavaScript frameworks and libraries</li>

<li>Choose the language or tech stack for your project</li>

<li>Clean and scalable development practices</li>

<li>Fast and reliable project delivery</li>

<li>Modern UI/UX design</li>

<li>Affordable solutions for students and businesses</li>

</ul>

</div>

<div className={styles.right}></div>

</div>

</section>

)

}