import React, { useMemo } from "react";
import styles from "./CtaTravel1.module.css";
import "../reset.css";

interface CtaProps {
  Section?: {
    content: string;
    styleData: {
      backgroundColor: {
        styleContent: string;
        backgroundType?: string;
        gradientDirection?: string;
        gradientShape?: string;
        gradientColors?: Array<{ color: string; position: string }>;
      };
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

export const CtaTravel1: React.FC<CtaProps> = (props) => {
  const sectionStyles = props.Section;

  const sectionContainerStyles = useMemo(() => {
    // Use 'background' instead of 'backgroundColor' to support gradients
    return {
      background:
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
    <section className={styles.cta} id="cta" style={sectionContainerStyles}>
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
