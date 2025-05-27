import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./OfferBeats3.module.css";

export const OfferBeats3: React.FC<any> = React.memo((props) => {
  const sectionClass = `${styles.discount} ${styles.section}`;
  const containerClass = `${styles.discountContainer} ${styles.container} ${styles.grid}`;
  const buttonClass = `${styles.button} ${styles.buttonFlex}`;

  const title = useMemo(
    () => props.titleOffer.content,
    [props.titleOffer.content],
  );
  const description = useMemo(
    () => props.TextSection.content,
    [props.TextSection.content],
  );
  const buttonText = useMemo(
    () => props.ctaButtonCard.content.textButton,
    [props.ctaButtonCard.content.textButton],
  );
  const buttonLink = useMemo(
    () => props.ctaButtonCard.content.link,
    [props.ctaButtonCard.content.link],
  );
  const imageSrc = useMemo(
    () => props.imgSection.imageSrc,
    [props.imgSection.imageSrc],
  );

  return (
    <section className={sectionClass}>
      <div className={containerClass}>
        <div className={styles.discountAnimate}>
          <h2 className={styles.discountTitle}>{title}</h2>
          <p className={styles.discountDescription}>{description}</p>
          <Link href={buttonLink} className={buttonClass}>
            <i className={`ri-shopping-bag-line ${styles.buttonIcon}`}></i>
            {buttonText}
          </Link>
        </div>

        <Image
          height={400}
          width={400}
          src={imageSrc}
          alt={title}
          className={styles.discountImg}
          placeholder="blur"
          blurDataURL="/placeholder.png"
        />
      </div>
    </section>
  );
});

export default OfferBeats3;
