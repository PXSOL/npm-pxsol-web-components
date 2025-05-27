import React from "react";
import styles from "./HeaderTravel1.module.css";
import Link from "next/link";
import Image from "next/image";

export const HeaderTravel1 = (props: any) => {
  return (
    <>
      <div className={styles.topBarHeaderWhiteSpace}></div>
      <header className={styles.header} data-header>
        <div className={styles.overlay} data-overlay></div>

        <div className={styles.headerTop}>
          <div className={styles.container}>
            <a href="tel:+11234567890" className={styles.helplineBox}>
              <div className={styles.iconBox}>
                <b className={styles.callOutline}></b>
              </div>

              <div className={styles.wrapper}>
                <p className={styles.helplineTitle}>For Further Inquiries: </p>
                <p className={styles.helplineNumber}>+1 (123) 456 7890</p>
              </div>
            </a>

            <a href="#" className={styles.logo}>
              <Image
                src="https://i.postimg.cc/zvgHq2QX/logo.png"
                alt="Tourly Logo"
                width={100}
                height={100}
              />
            </a>

            <div className={styles.headerBtnGroup}>
              <button className={styles.searchBtn} aria-label="Search">
                <b className={styles.search}></b>
              </button>

              <button
                className={styles.navOpenBtn}
                aria-label="Open Menu"
                data-nav-open-btn
              >
                <b className={styles.menuOutline}></b>
              </button>
            </div>
          </div>
        </div>

        <div className={styles.headerBottom}>
          <div className={styles.container}>
            <nav className={styles.navbar} data-navbar>
              <div className={styles.navbarTop}>
                <a href="#" className={styles.logo}>
                  <Image
                    src="https://i.postimg.cc/hvcfT8PK/logo-blue.png"
                    alt="Tourly Logo"
                    width={100}
                    height={100}
                  />
                </a>

                <button
                  className={styles.navCloseBtn}
                  aria-label="Close Menu"
                  data-nav-close-btn
                >
                  <b className={styles.closeOutline}></b>
                </button>
              </div>

              <ul className={styles.navbarList}>
                {props.buttonGroup.content.map((item: any, index: number) => (
                  <li key={index}>
                    <Link
                      href={item.content.link}
                      className={styles.navbarLink}
                      data-nav-link
                    >
                      {item.content.textButton}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <button className={styles.btnPrimary}>Book Now</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderTravel1;
