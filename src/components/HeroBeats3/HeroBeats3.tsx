import styles from "./HeroBeats3.module.css"

const HeroBeats3 = ()=>{

    return(
      <section className={`${styles.home} ${styles.section}`} id="home">
        <div className={`${styles.home__container} ${styles.container} ${styles.grid}`}>
          <div>
            <img src="https://headpones-lp.vercel.app/assets/img/home.png" alt="" className={styles.home__img} />
          </div>

          <div className={styles.home__data}>
            <div className={styles.home__header}>
              <h1 className={styles.home__title}>On ear</h1>
              <h2 className={styles.home__subtitle}>Beats 3</h2>
            </div>

            <div className={styles.home__footer}>
              <h3 className={styles.home__titleDescription}>Overview</h3>
              <p className={styles.home__description}>
                Enjoy award-winning Beats sound with wireless listening freedom and a sleek,
                streamlined design with comfortable padded earphones, delivering first-rate playback.
              </p>
              <a href="#" className={`${styles.button} ${styles.button__flex}`}>
                <span className={styles.button__flex}>
                  <i className={`ri-shopping-bag-line ${styles.button__icon}`}></i> Add to Bag
                </span>
                <span className={styles.home__price}>$299</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    )
}

export default HeroBeats3