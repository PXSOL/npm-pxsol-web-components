import React from "react";
import styles from "./HeaderTravel1.module.css"


export const HeroTravel1 = ()=>{
    return(
        <header  className={styles.header} data-header>
            <div  className={styles.overlay} data-overlay></div>

            <div  className={styles.headerTop}>
                <div  className={styles.container}>
                    <a href="tel:+11234567890"  className={styles.helplineBox}>
                        <div  className={styles.iconBox}>
                            <b className={styles.callOutline}></b>
                        </div>

                        <div  className={styles.wrapper}>
                            <p  className={styles.helplineTitle}>For Further Inquiries: </p>
                            <p  className={styles.helplineNumber}>+1 (123) 456 7890</p>
                        </div>
                    </a>

                    <a href="#"  className={styles.logo}>
                        <img src="https://i.postimg.cc/zvgHq2QX/logo.png" alt="Tourly Logo"/>
                    </a>

                    <div  className={styles.headerBtnGroup}>
                        <button  className={styles.searchBtn} aria-label="Search">
                            <b className={styles.search}></b>
                        </button>

                        <button  className={styles.navOpenBtn} aria-label="Open Menu" data-nav-open-btn>
                            <b className={styles.menuOutline}></b>
                        </button>
                    </div>
                </div>
            </div>

            <div  className={styles.headerBottom}>
                <div  className={styles.container}>
                    <ul  className={styles.socialList}>
                        <li>
                            <a href="#"  className={styles.socialLink}>
                                <b className={styles.logoFacebook}></b>
                            </a>
                        </li>

                        <li>
                            <a href="#"  className={styles.socialLink}>
                                <b className={styles.logoInstagram}></b>
                            </a>
                        </li>

                        <li>
                            <a href="#"  className={styles.socialLink}>
                                <b className={styles.logoYoutube}></b>
                            </a>
                        </li>
                    </ul>

                    <nav  className={styles.navbar} data-navbar>
                        <div  className={styles.navbarTop}>
                            <a href="#"  className={styles.logo}>
                                <img src="https://i.postimg.cc/hvcfT8PK/logo-blue.png" alt="Tourly Logo"/>
                            </a>

                            <button  className={styles.navCloseBtn} aria-label="Close Menu" data-nav-close-btn>
                                <b className={styles.closeOutline}></b>
                            </button>
                        </div>

                        <ul  className={styles.navbarList}>
                            <li><a href="#home"  className={styles.navbarLink} data-nav-link>Home</a></li>
                            <li><a href="#"  className={styles.navbarLink} data-nav-link>About us</a></li>
                            <li><a href="#destination"  className={styles.navbarLink} data-nav-link>Destinations</a></li>
                            <li><a href="#package"  className={styles.navbarLink} data-nav-link>Packages</a></li>
                            <li><a href="#gallery"  className={styles.navbarLink} data-nav-link>Gallery</a></li>
                            <li><a href="#contact"  className={styles.navbarLink} data-nav-link>Contact us</a></li>
                        </ul>
                    </nav>

                    <button  className={styles.btnPrimary}>Book Now</button>
                </div>
            </div>
        </header>
    )
}

export default HeroTravel1;