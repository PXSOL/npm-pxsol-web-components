import React from "react";
import styles from "./ProductsBeats3.module.css"
import Image from "next/image";

export const ProductsBeats3: React.FC<any> = (props)=>{

    return(
      <section className={`${styles.products} ${styles.section}`} id="products">
        <h2 className={`${styles.section__title} ${styles.section__titleGradient} ${styles.products__line}`}>
          {props.titleHero.content}
        </h2>
        <div className={`${styles.products__container} ${styles.container} ${styles.grid}`}>
          {props.groupProductsSection.content.map((itemProduct: any, index: any)=>{
            return(
              <article key={index} className={styles.products__card}>
                <div className={styles.products__content}>
                  <Image height={300} width={300} src={itemProduct.imgProduct.imageSrc} alt={itemProduct.ctaButtonHero.content.textButton} className={styles.products__img}></Image>
                  <h3 className={styles.products__title}>
                    {itemProduct.ctaButtonHero.content.textButton}
                  </h3>
                  <span className={styles.products__price}>{itemProduct.productPrice.content}</span>
                  <button className={`${styles.button} ${styles.button__flex} ${styles.products__button}`}>
                    <i className={`ri-shopping-bag-line ${styles.button__icon}`}></i>
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    )
}

export default ProductsBeats3;