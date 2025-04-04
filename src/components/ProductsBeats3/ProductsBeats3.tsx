import React, { useMemo } from "react";
import styles from "./ProductsBeats3.module.css";
import Image from "next/image";

export const ProductsBeats3: React.FC<any> = React.memo((props) => {
  const sectionClass = `${styles.products} ${styles.section}`;
  const titleClass = `${styles.section__title} ${styles.section__titleGradient} ${styles.products__line}`;
  const containerClass = `${styles.products__container} ${styles.container} ${styles.grid}`;
  const buttonClass = `${styles.button} ${styles.button__flex} ${styles.products__button}`;

  const productCards = useMemo(() => {
    return props.groupProductsSection.content.map((itemProduct: any, index: any) => (
      <article key={index} className={styles.products__card}>
        <div className={styles.products__content}>
          <Image
            height={65}
            width={65}
            src={itemProduct.imgProduct.imageSrc}
            alt={itemProduct.ctaButtonHero.content.textButton}
            className={styles.products__img}
            loading="lazy"
            placeholder="blur"
            blurDataURL="/placeholder.png"
          />
          <div className={styles.products__data}>
          
          <h3 className={styles.products__title}>
            {itemProduct.ctaButtonHero.content.textButton}
          </h3>
          <span className={styles.products__price}>{itemProduct.productPrice.content}</span>
          </div>
          <button
            className={buttonClass}
            aria-label="Add to cart"
          >
            Add to cart
          </button>
        </div>
      </article>
    ));
  }, [props.groupProductsSection.content]);

  return (
    <section className={sectionClass} id="products">
      <h2 className={titleClass}>{props.titleHero.content}</h2>
      <div className={containerClass}>{productCards}</div>
    </section>
  );
});

export default ProductsBeats3;