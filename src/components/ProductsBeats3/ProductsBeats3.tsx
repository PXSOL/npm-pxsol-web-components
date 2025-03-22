import styles from "./ProductsBeats3.module.css"

export const ProductsBeats3 = ()=>{

    return(
      <section className={`${styles.products} ${styles.section}`} id="products">
        <h2 className={`${styles.section__title} ${styles.section__titleGradient} ${styles.products__line}`}>
          Choose <br /> Your Style
        </h2>

        <div className={`${styles.products__container} ${styles.container} ${styles.grid}`}>
          
        <article className={styles.products__card}>
          <div className={styles.products__content}>
            <img src="https://headpones-lp.vercel.app/assets/img/product1.png" alt="" className={styles.products__img} />

            <h3 className={styles.products__title}>Black</h3>
            <span className={styles.products__price}>$249</span>

            <button className={`${styles.button} ${styles.button__flex} ${styles.products__button}`}>
              <i className={`ri-shopping-bag-line ${styles.button__icon}`}></i>
            </button>
          </div>
        </article>

        <article className={styles.products__card}>
          <div className={styles.products__content}>
            <img src="https://headpones-lp.vercel.app/assets/img/product1.png" alt="" className={styles.products__img} />

            <h3 className={styles.products__title}>Black</h3>
            <span className={styles.products__price}>$249</span>

            <button className={`${styles.button} ${styles.button__flex} ${styles.products__button}`}>
              <i className={`ri-shopping-bag-line ${styles.button__icon}`}></i>
            </button>
          </div>
        </article>

        <article className={styles.products__card}>
          <div className={styles.products__content}>
            <img src="https://headpones-lp.vercel.app/assets/img/product1.png" alt="" className={styles.products__img} />

            <h3 className={styles.products__title}>Black</h3>
            <span className={styles.products__price}>$249</span>

            <button className={`${styles.button} ${styles.button__flex} ${styles.products__button}`}>
              <i className={`ri-shopping-bag-line ${styles.button__icon}`}></i>
            </button>
          </div>
        </article>

        <article className={styles.products__card}>
          <div className={styles.products__content}>
            <img src="https://headpones-lp.vercel.app/assets/img/product1.png" alt="" className={styles.products__img} />

            <h3 className={styles.products__title}>Black</h3>
            <span className={styles.products__price}>$249</span>

            <button className={`${styles.button} ${styles.button__flex} ${styles.products__button}`}>
              <i className={`ri-shopping-bag-line ${styles.button__icon}`}></i>
            </button>
          </div>
        </article>

        <article className={styles.products__card}>
          <div className={styles.products__content}>
            <img src="https://headpones-lp.vercel.app/assets/img/product1.png" alt="" className={styles.products__img} />

            <h3 className={styles.products__title}>Black</h3>
            <span className={styles.products__price}>$249</span>

            <button className={`${styles.button} ${styles.button__flex} ${styles.products__button}`}>
              <i className={`ri-shopping-bag-line ${styles.button__icon}`}></i>
            </button>
          </div>
        </article>

        <article className={styles.products__card}>
          <div className={styles.products__content}>
            <img src="https://headpones-lp.vercel.app/assets/img/product1.png" alt="" className={styles.products__img} />

            <h3 className={styles.products__title}>Black</h3>
            <span className={styles.products__price}>$249</span>

            <button className={`${styles.button} ${styles.button__flex} ${styles.products__button}`}>
              <i className={`ri-shopping-bag-line ${styles.button__icon}`}></i>
            </button>
          </div>
        </article>


        </div>
      </section>
    )
}

export default ProductsBeats3;