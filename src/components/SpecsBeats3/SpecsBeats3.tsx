import React, { useMemo } from "react";
import styles from "./SpecsBeats3.module.css";
import Image from "next/image";

export const SpecsBeats3: React.FC<any> = React.memo((props) => {
  const sectionClass = `${styles.specs} ${styles.section} ${styles.grid}`;
  const titleClass = `${styles.section__title} ${styles.section__titleGradient}`;
  const containerClass = `${styles.specs__container} ${styles.container} ${styles.grid}`;
  const contentClass = `${styles.specs__content} ${styles.grid}`;

  const specsData = useMemo(() => {
    return props.groupSpecs.content.map((itemSpec: any, index: any) => (
      <div key={index} className={styles.specs__data}>
        <i
          className={`${itemSpec.iconNameClass.content} ${styles.specs__icon}`}
        ></i>
        <h3 className={styles.specs__title}>{itemSpec.specTitle.content}</h3>
        <span className={styles.specs__subtitle}>
          {itemSpec.specDescription.content}
        </span>
      </div>
    ));
  }, [props.groupSpecs.content]);

  return (
    <section className={sectionClass} id="specs">
      <h2 className={titleClass}>{props.titleHero.content}</h2>
      <div className={containerClass}>
        <div className={contentClass}>{specsData}</div>
        <div>
          <Image
            width={700}
            height={700}
            src={props.imgSection.imageSrc}
            alt={props.titleHero.name}
            className={styles.specs__img}
            placeholder="blur"
            blurDataURL="/placeholder.png"
          />
        </div>
      </div>
    </section>
  );
});

export default SpecsBeats3;
