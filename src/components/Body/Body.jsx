"use client"

import { useEffect, useRef } from "react";
import styles from "./Body.module.css";

export default function Body(){

const sectionRef = useRef(null)
const cardsRef = useRef([])

useEffect(()=>{

const observer = new IntersectionObserver(
(entries)=>{
entries.forEach((entry)=>{
if(entry.isIntersecting){
entry.target.classList.add(styles.sectionVisible)
}
})
},
{threshold:0.15}
)

if(sectionRef.current){
observer.observe(sectionRef.current)
}

cardsRef.current.forEach((card)=>{
if(card){
observer.observe(card)
}
})

},[])

const services=[
{
title:"Web Design",
desc:"Modern, responsive designs that make your brand stand out."
},
{
title:"Website Development",
desc:"Fast and scalable websites built with modern technologies."
},
{
title:"UI/UX Design",
desc:"User focused interfaces designed for better engagement."
},
{
title:"Landing Pages",
desc:"High converting landing pages optimized for marketing."
},
{
title:"Portfolio & Business Websites",
desc:"Professional websites tailored for individuals and businesses."
},
{
title:"School & College Projects",
desc:"Custom web development projects for students with proper documentation."
}
]

return(

<section ref={sectionRef} className={styles.services}>

<div className={styles.container}>

<h2 className={styles.title}>Our Services</h2>

<p className={styles.subtitle}>
Web solutions designed to elevate your online presence.
</p>

<div className={styles.grid}>

{services.map((service,index)=>(
<div
key={index}
ref={(el)=>cardsRef.current[index]=el}
className={styles.card}
style={{transitionDelay:`${index*120}ms`}}
>

<h3 className={styles.cardTitle}>{service.title}</h3>

<p className={styles.cardDesc}>{service.desc}</p>

</div>
))}

</div>

</div>

</section>

)

}