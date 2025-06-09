import React, { useMemo } from "react";
import styles from "./BookingPxsol1.module.css";
import "../reset.css";

interface ContentProps {
  name: string;
  type: string;
  dataType: string;
  content: string;
  styleData: {
    titleColor?: {
      name: string;
      styleType: string;
      styleContent: string;
    };
    titleSize?: {
      name: string;
      styleType: string;
      styleContent: string;
    };
  };
}

interface CtaButtonProps {
  name: string;
  type: string;
  dataType: string;
  content: {
    textButton: string;
    link: string;
  };
  styleData: {
    textColor?: {
      name: string;
      styleType: string;
      styleContent: string;
    };
    backgroundColor?: {
      name: string;
      styleType: string;
      styleContent: string;
    };
    buttonTextSize?: {
      name: string;
      styleType: string;
      styleContent: string;
    };
  };
}

interface BookingPxsolProps {
  Title?: ContentProps;
  Text?: ContentProps;
  "Cta button"?: CtaButtonProps;
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

export const BookingPxsol1: React.FC<BookingPxsolProps> = (props) => {
  const titleBooking = props.Title;
  const textBooking = props.Text;
  const ctaButtonBooking = props["Cta button"];
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

  const handleBookingClick = () => {
    const link = ctaButtonBooking?.content?.link;
    if (link) {
      if (link.startsWith("http") || link.startsWith("https")) {
        window.open(link, "_blank");
      } else {
        window.location.href = link;
      }
    }
  };

  return (
    <section className={styles.bookingSection} style={sectionContainerStyles}>
      <div className={styles.container}>
        <div className={styles.bookingCard}>
          <div className={styles.contentWrapper}>
            <div className={styles.textContent}>
              <h2
                className={styles.bookingTitle}
                style={{
                  color:
                    titleBooking?.styleData?.titleColor?.styleContent ||
                    "#2d3748",
                  fontSize:
                    titleBooking?.styleData?.titleSize?.styleContent || "2rem",
                }}
              >
                {titleBooking?.content || "Reserva tu estadía"}
              </h2>
              <p
                className={styles.bookingText}
                style={{
                  color:
                    textBooking?.styleData?.titleColor?.styleContent ||
                    "#718096",
                  fontSize:
                    textBooking?.styleData?.titleSize?.styleContent || "1rem",
                }}
              >
                {textBooking?.content ||
                  "Asegura tu lugar y disfruta de una experiencia inolvidable. Reserva ahora y obtén las mejores tarifas disponibles."}
              </p>
            </div>

            <div className={styles.buttonWrapper}>
              <button
                className={styles.bookingButton}
                onClick={handleBookingClick}
                style={{
                  color:
                    ctaButtonBooking?.styleData?.textColor?.styleContent ||
                    "#fff",
                  backgroundColor:
                    ctaButtonBooking?.styleData?.backgroundColor
                      ?.styleContent || "#3b82f6",
                  fontSize:
                    ctaButtonBooking?.styleData?.buttonTextSize?.styleContent ||
                    "16px",
                }}
              >
                <svg
                  className={styles.bookingIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="15" r="2" fill="currentColor" />
                </svg>
                <span className={styles.buttonText}>
                  {ctaButtonBooking?.content?.textButton || "Reservar Ahora"}
                </span>
                <svg
                  className={styles.arrowIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12h14m-7-7l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingPxsol1;
