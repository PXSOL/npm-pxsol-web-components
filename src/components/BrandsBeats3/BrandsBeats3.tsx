import React, { useMemo } from "react";
import styles from "./BrandsBeats3.module.css";
import Image from "next/image";

export const BrandsBeats3: React.FC<any> = React.memo((props) => {
  const brandImages = useMemo(() => {
    return props.groupTextHero.content.map((item: any, index: any) => (
      <Image
        width={200}
        height={80}
        key={index}
        src={item.imgBrand.imageSrc}
        alt={item.brandName.name}
        className={styles.sponsor__img}
      />
    ));
  }, [props.groupTextHero.content]);

  return (
    <section className={`${styles.sponsor} ${styles.section}`}>
      <div className={`${styles.sponsor__container} ${styles.container} ${styles.grid}`}>
        {brandImages}
      </div>
    </section>
  );
});

export default BrandsBeats3;