import React from "react";
import styles from "./FooterBeats3.module.css";
import Link from "next/link";
import Image from "next/image";

export const FooterBeats3: React.FC<any> = React.memo((props) => {
  const footerClass = `${styles.footer} ${styles.section}`;
  const containerClass = `${styles.footer__container} ${styles.container} ${styles.grid}`;
  const buttonClass = `${styles.button} ${styles.button__flex}`;

  const column1Links = React.useMemo(() => {
    return props.groupColumn1.content.map((itemColumn: any, index: any) => (
      <li key={index}>
        <Link href={itemColumn.ctaButtonHero.content.link} className={styles.footer__link}>
          {itemColumn.ctaButtonHero.content.textButton}
        </Link>
      </li>
    ));
  }, [props.groupColumn1.content]);

  const column2Links = React.useMemo(() => {
    return props.groupColumn2.content.map((itemColumn: any, index: any) => (
      <li key={index}>
        <Link href={itemColumn.ctaButtonHero.content.link} className={styles.footer__link}>
          {itemColumn.ctaButtonHero.content.textButton}
        </Link>
      </li>
    ));
  }, [props.groupColumn2.content]);

  const socialLinks = React.useMemo(() => {
    return props.groupSocialIcons.content.map((itemSocial: any, index: any) => (
      <Link
        key={index}
        href={itemSocial.ctaButtonHero.content.link}
        target="_blank"
        className={styles.footer__socialLink}
        aria-label={`Go to ${itemSocial.ctaButtonHero.content.textButton}`}
      >
        <i className={itemSocial.ctaButtonHero.content.textButton} aria-hidden="true"></i>
      </Link>
    ));
  }, [props.groupSocialIcons.content]);

  return (
    <footer className={footerClass}>
      <div className={containerClass}>
        <a href="#" className={styles.footer__logo}>
          <Image
            width={100}
            height={100}
            src={props.imgLogoFooter.imageSrc}
            alt={props.imgLogoFooter.name}
            placeholder="blur"
            blurDataURL="/placeholder.png"
          />
        </a>

        <div className={styles.footer__content}>
          <h3 className={styles.footer__title}>{props.titleColumn1.content}</h3>
          <ul className={styles.footer__links}>{column1Links}</ul>
        </div>

        <div className={styles.footer__content}>
          <h3 className={styles.footer__title}>{props.titleColumn2.content}</h3>
          <ul className={styles.footer__links}>{column2Links}</ul>
        </div>

        <div className={styles.footer__content}>
          <form action="" className={styles.footer__form}>
            <input type="email" placeholder="Email" className={styles.footer__input} />
            <button className={buttonClass}>
              <i className={`ri-send-plane-line ${styles.button__icon}`}></i> Subscribe
            </button>
          </form>

          <div className={styles.footer__social}>{socialLinks}</div>
        </div>
      </div>

      <p className={styles.footer__copy}>
        <span className={styles.footer__copyLink}>{props.copyright.content}</span>
      </p>
    </footer>
  );
});

export default FooterBeats3;