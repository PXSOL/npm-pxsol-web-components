import React from "react";
import styles from "./HeaderBeats3.module.css";
import Image from "next/image";
import Link from "next/link";

export const HeaderBeats3: React.FC<any> = React.memo((props) => {
  const [isActiveMenu, setIsActiveMenu] = React.useState(false);

  const toggleMenu = React.useCallback(() => setIsActiveMenu((prev) => !prev), []);
  const closeMenu = React.useCallback(() => setIsActiveMenu(false), []);

  const navItems = React.useMemo(() => {
    return props.groupTextHero.content.map((item: any, index: any) => (
      <li key={index} className={styles.nav__item}>
        <Link
          href={item.ctaButtonHero.content.link}
          className={styles.nav__link}
        >
          {item.ctaButtonHero.content.textButton}
        </Link>
      </li>
    ));
  }, [props.groupTextHero.content]);

  const navMenuClass = `${styles.nav__menu} ${isActiveMenu ? styles.activeMenu : ""}`;

  return (
    <>
      <div className={styles.spacingTopHeader}></div>
      <header className={styles.header} id="header">
        <nav className={`${styles.nav} ${styles.container}`}>
          <Link href="/" className={styles.nav__logo}>
            <Image
              priority={true}
              height={20}
              width={20}
              src={props.logoHeader.imageSrc}
              alt={props.logoHeader.name}
            />
          </Link>

          <div className={navMenuClass} id="nav-menu">
            <ul className={styles.nav__list}>{navItems}</ul>

            <div onClick={closeMenu} className={styles.nav__close} id="nav-close">
              <i className="ri-close-line"></i>
            </div>
          </div>

          <div onClick={toggleMenu} className={styles.nav__toggle} id="nav-toggle">
            <i className="ri-function-line"></i>
          </div>
        </nav>
      </header>
    </>
  );
});

export default HeaderBeats3;