import React from "react";
import styles from "./FooterBeats3.module.css"
import Link from "next/link";
import Image from "next/image";

export const FooterBeats3: React.FC<any> = (props)=>{

    return(
      <footer className={`${styles.footer} ${styles.section}`}>
        <div className={`${styles.footer__container} ${styles.container} ${styles.grid}`}>
          <a href="#" className={styles.footer__logo}>
            <Image width={100} height={100} src={props.imgLogoFooter.imageSrc} alt={props.imgLogoFooter.name}></Image>
          </a>

          <div className={styles.footer__content}>
            <h3 className={styles.footer__title}>
              {props.titleColumn1.content}
            </h3>

            <ul className={styles.footer__links}>
              {props.groupColumn1.content.map((itemColumn: any, index: any)=>{
                return(
                  <li key={index}>
                    <Link href={itemColumn.ctaButtonHero.content.link} className={styles.footer__link}>
                      {itemColumn.ctaButtonHero.content.textButton}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className={styles.footer__content}>
            <h3 className={styles.footer__title}>
              {props.titleColumn2.content}
            </h3>

            <ul className={styles.footer__links}>
              {props.groupColumn2.content.map((itemColumn: any, index: any)=>{
                return(
                  <li key={index}>
                    <Link href={itemColumn.ctaButtonHero.content.link} className={styles.footer__link}>
                      {itemColumn.ctaButtonHero.content.textButton}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className={styles.footer__content}>
            <form action="" className={styles.footer__form}>
              <input type="email" placeholder="Email" className={styles.footer__input} />
              <button className={`${styles.button} ${styles.button__flex}`}>
                <i className={`ri-send-plane-line ${styles.button__icon}`}></i> Subscribe
              </button>
            </form>

            <div className={styles.footer__social}>
              {props.groupSocialIcons.content.map((itemSocial: any, index: any)=>{
                return(
                  <Link key={index} href={itemSocial.ctaButtonHero.content.link} target="_blank" className={styles.footer__socialLink}>
                    <i className={itemSocial.ctaButtonHero.content.textButton}></i>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        <p className={styles.footer__copy}>
          <span className={styles.footer__copyLink}>
            {props.copyright.content}
          </span>
        </p>
      </footer>
    )
}

export default FooterBeats3;