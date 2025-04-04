import React from "react";
import styles from "./CaseBeats3.module.css";
import Image from "next/image";
import Link from "next/link";

export const CaseBeats3: React.FC<any> = React.memo((props) => {
  const sectionClass = `${styles.case} ${styles.section} ${styles.grid}`;
  const containerClass = `${styles.case__container} ${styles.container} ${styles.grid}`;
  const buttonClass = `${styles.button} ${styles.button__flex}`;

  return (
    <section className={sectionClass} id="case">
      <h2 className={`${styles.section__title} ${styles.section__titleGradient}`}>
        {props.titleHero.content}
      </h2>

      <div className={containerClass}>
        <div>
          <Image
            height={700}
            width={700}
            src={props.imgSection.imageSrc}
            alt={props.titleHero.content}
            className={styles.case__img}
            placeholder="blur" // Muestra un placeholder mientras carga
            blurDataURL="/placeholder.png" // Imagen base64 para el efecto blur
          />
        </div>

        <div className={styles.case__data}>
          <p className={styles.case__description}>{props.TextSection.content}</p>
          <Link href={props.ctaButtonHero.content.link} className={buttonClass}>
            <i className={`ri-information-line ${styles.button__icon}`}></i>
            {props.ctaButtonHero.content.textButton}
          </Link>
        </div>
      </div>
    </section>
  );
});

export default CaseBeats3;