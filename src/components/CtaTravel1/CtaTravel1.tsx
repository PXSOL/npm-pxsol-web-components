import React from "react";
import styles from "./CtaTravel1.module.css";

export const CtaTravel1 = () => {
  return (
    <section className={styles.cta} id="cta">
      <div className={styles.container}>
        <div className={styles.ctaContent}>
          <p className={styles.sectionSubtitle}>Get booking today</p>
          <h2 className={styles.sectionTitle}>
            Check these and much more future tours!
          </h2>
          <p className={styles.sectionText}>
            Get ready for adventure! Stay tuned for upcoming tours, promising
            unforgettable experiences and unique destinations
          </p>
        </div>
        <button className={styles.btnSecondary}>Contact us!</button>
      </div>
    </section>
  );
};

export default CtaTravel1;
