import React, { useMemo } from "react";
import styles from "./EngineFormTravel1.module.css";

interface EngineFormProps {
  Section?: {
    content: string;
    styleData: {
      backgroundColor: { styleContent: string };
      margin: { styleContent: string };
      padding: { styleContent: string };
      borderRadius: { styleContent: string };
    };
    type: string;
    dataType: string;
    name: string;
    _id?: string;
  };
}

export const EngineFormTravel1: React.FC<EngineFormProps> = (props) => {
  const sectionStyles = props.Section;

  const sectionContainerStyles = useMemo(() => {
    return {
      backgroundColor:
        sectionStyles?.styleData?.backgroundColor?.styleContent || "#fff",
      margin:
        sectionStyles?.styleData?.margin?.styleContent || "0px 0px 0px 0px",
      padding:
        sectionStyles?.styleData?.padding?.styleContent || "0px 0px 0px 0px",
      borderRadius:
        sectionStyles?.styleData?.borderRadius?.styleContent ||
        "0px 0px 0px 0px",
    };
  }, [
    sectionStyles?.styleData?.backgroundColor?.styleContent,
    sectionStyles?.styleData?.margin?.styleContent,
    sectionStyles?.styleData?.padding?.styleContent,
    sectionStyles?.styleData?.borderRadius?.styleContent,
  ]);

  return (
    <section className={styles.tourSearch} style={sectionContainerStyles}>
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
