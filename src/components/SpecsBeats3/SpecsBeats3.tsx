import styles from "./SpecsBeats3.module.css"

export const SpecsBeats3 = ()=>{
    return(
      <section className={`${styles.specs} ${styles.section} ${styles.grid}`} id="specs">
        <h2 className={`${styles.section__title} ${styles.section__titleGradient}`}>Specs</h2>

        <div className={`${styles.specs__container} ${styles.container} ${styles.grid}`}>
          <div className={styles.specs__content}>
            <div className={styles.specs__data}>
              <i className={`ri-bluetooth-line ${styles.specs__icon}`}></i>
              <h3 className={styles.specs__title}>Connection</h3>
              <span className={styles.specs__subtitle}>Bluetooth v5.2</span>
            </div>

            <div className={styles.specs__data}>
              <i className={`ri-battery-charge-line ${styles.specs__icon}`}></i>
              <h3 className={styles.specs__title}>Battery</h3>
              <span className={styles.specs__subtitle}>Duration 40h</span>
            </div>

            <div className={styles.specs__data}>
              <i className={`ri-plug-line ${styles.specs__icon}`}></i>
              <h3 className={styles.specs__title}>Load</h3>
              <span className={styles.specs__subtitle}>Fast charge 4.2-AAC</span>
            </div>

            <div className={styles.specs__data}>
              <i className={`ri-mic-line ${styles.specs__icon}`}></i>
              <h3 className={styles.specs__title}>Microphone</h3>
              <span className={styles.specs__subtitle}>Supports Apple Siri <br /> and Google</span>
            </div>
          </div>

          <div>
            <img src="https://headpones-lp.vercel.app/assets/img/specs.png" alt="" className={styles.specs__img} />
          </div>
        </div>
      </section>
    )
}

export default SpecsBeats3;