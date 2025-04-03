import React from "react";
import styles from "./HeaderBeats3.module.css"
import Image from "next/image";
import Link from "next/link";

export const HeaderBeats3: React.FC<any> = (props)=>{

    const [isActiveMenu, setIsActiveMenu] = React.useState(false);

    return(
      <>
        <div className={styles.spacingTopHeader}>
        </div>
        <header className={styles.header} id="header">
        <nav className={`${styles.nav} ${styles.container}`}>
          <Link href="/" className={styles.nav__logo}>
            <Image height={60} width={60} src={props.logoHeader.imageSrc} alt={props.logoHeader.name}></Image>
          </Link>

          <div className={`${styles.nav__menu} ${isActiveMenu && styles.activeMenu}`} id="nav-menu">
            <ul className={styles.nav__list}>
            {props.groupTextHero.content.map((item: any, index: any)=>{
              return(
                <li key={index} className={styles.nav__item}>
                  <Link
                    href={item.ctaButtonHero.content.link} 
                    className={`
                        ${styles.nav__link} 
                        // {styles.activeLink}
                      `}
                    >
                    {item.ctaButtonHero.content.textButton}
                  </Link>
                </li>
              )
            })}
            </ul>

            <div onClick={(()=>{setIsActiveMenu(false)})} className={styles.nav__close} id="nav-close">
              <i className="ri-close-line"></i>
            </div>
          </div>

          <div onClick={(()=>{setIsActiveMenu(true)})} className={styles.nav__toggle} id="nav-toggle">
            <i className="ri-function-line"></i>
          </div>
        </nav>
      </header>
      </>
    )
}

export default HeaderBeats3;