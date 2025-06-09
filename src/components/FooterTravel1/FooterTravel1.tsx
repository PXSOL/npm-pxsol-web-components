import React, { useMemo } from "react";
import styles from "./FooterTravel1.module.css";
import "../reset.css";

interface FooterProps {
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

export const FooterTravel1: React.FC<FooterProps> = (props) => {
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
    <footer className={styles.footer} style={sectionContainerStyles}>
      <div className={styles.footerTop}>
        <div className={styles.container}>
          <div className={styles.footerBrand}>
            <a href="#" className={styles.logo}>
              <img
                src="https://i.postimg.cc/hvcfT8PK/logo-blue.png"
                alt="Tourly logo"
              />
            </a>

            <p className={styles.footerText}>
              Your passport to adventure awaits!
            </p>
          </div>

          <div className={styles.footerContact}>
            <h4 className={styles.contactTitle}>Contact Us</h4>
            <p className={styles.contactText}>Feel free to contact us!</p>

            <ul>
              <li className={styles.contactItem}>
                <b className={styles.callOutline}></b>
                <a href="tel:+01123456790" className={styles.contactLink}>
                  +01 (123) 456 7890
                </a>
              </li>

              <li className={styles.contactItem}>
                <b className={styles.mailOutline}></b>
                <a href="mailto:info.tourly.com" className={styles.contactLink}>
                  info.tourly.com
                </a>
              </li>

              <li className={styles.contactItem}>
                <b className={styles.locationOutline}></b>
                <address>3145 Koontz, California</address>
              </li>
            </ul>
          </div>

          <div className={styles.footerForm}>
            <p className={styles.formText}>
              Subscribe to our newsletter for more update & news!!
            </p>

            <form action="#" className={styles.formWrapper}>
              <input
                type="email"
                name="email"
                className={styles.inputField}
                placeholder="Enter your email"
                required
              />
              <button type="submit" className={styles.btnSecondary}>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.container}>
          <p className={styles.copyright}>
            &copy; Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quos.
          </p>

          <ul className={styles.footerBottomList}>
            <li>
              <a href="#" className={styles.footerBottomLink}>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className={styles.footerBottomLink}>
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className={styles.footerBottomLink}>
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterTravel1;
