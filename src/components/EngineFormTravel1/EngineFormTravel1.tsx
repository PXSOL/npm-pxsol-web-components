import React from "react";
import styles from "./EngineFormTravel1.module.css";

export const EngineFormTravel1 = () => {
  return (
    <section className={styles.tourSearch}>
      <div className={styles.container}>
        <form action="" className={styles.tourSearchForm}>
          <div className={styles.inputWrapper}>
            <label htmlFor="destination" className={styles.inputLabel}>
              Search Destination
            </label>
            <input
              type="text"
              name="destination"
              id="destination"
              required
              placeholder="Enter Destination"
              className={styles.inputField}
            />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="people" className={styles.inputLabel}>
              Number of People
            </label>
            <input
              type="number"
              name="people"
              id="people"
              required
              placeholder="Enter Number of People"
              className={styles.inputField}
            />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="checkin" className={styles.inputLabel}>
              Check-in Date
            </label>
            <input
              type="date"
              name="checkin"
              id="checkin"
              required
              className={styles.inputField}
            />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="checkout" className={styles.inputLabel}>
              Check-out Date
            </label>
            <input
              type="date"
              name="checkout"
              id="checkout"
              required
              className={styles.inputField}
            />
          </div>
          <button type="submit" className={styles.btnSecondary}>
            Inquire Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default EngineFormTravel1;
