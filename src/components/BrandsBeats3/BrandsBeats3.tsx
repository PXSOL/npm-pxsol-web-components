import styles from "./BrandsBeats3.module.css"

export const BrandsBeats3 = ()=>{

    return(
      <section className={`${styles.sponsor} ${styles.section}`}>
        <div className={`${styles.sponsor__container} ${styles.container} ${styles.grid}`}>
          <img src="https://headpones-lp.vercel.app/assets/img/sponsor1.png" alt="" className={styles.sponsor__img} />
          <img src="https://headpones-lp.vercel.app/assets/img/sponsor2.png" alt="" className={styles.sponsor__img} />
          <img src="https://headpones-lp.vercel.app/assets/img/sponsor3.png" alt="" className={styles.sponsor__img} />
          <img src="https://headpones-lp.vercel.app/assets/img/sponsor4.png" alt="" className={styles.sponsor__img} />
        </div>
      </section>
    )
}

export default BrandsBeats3;