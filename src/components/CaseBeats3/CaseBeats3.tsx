import styles from "./CaseBeats3.module.css"

export const CaseBeats3 = ()=>{

    return(
      <section className={`${styles.case} ${styles.section} ${styles.grid}`} id="case">
        <h2 className={`${styles.section__title} ${styles.section__titleGradient}`}>Case</h2>

        <div className={`${styles.case__container} ${styles.container} ${styles.grid}`}>
          <div>
            <img src="https://headpones-lp.vercel.app/assets/img/case.png" alt="" className={styles.case__img} />
          </div>

          <div className={styles.case__data}>
            <p className={styles.case__description}>
              With a comfortable and adaptable case so that you can store it whenever you want,
              and keep your durability forever.
            </p>
            <a href="#" className={`${styles.button} ${styles.button__flex}`}>
              <i className={`ri-information-line ${styles.button__icon}`}></i> More info
            </a>
          </div>
        </div>
      </section>
    )
}

export default CaseBeats3;