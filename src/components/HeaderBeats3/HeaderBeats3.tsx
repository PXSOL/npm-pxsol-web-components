import styles from "./HeaderBeats3.module.css"

const HeaderBeats3 = ()=>{
    return(
      <>
        <div className={styles.spacingTopHeader}>
        </div>
        <header className={styles.header} id="header">
        <nav className={`${styles.nav} ${styles.container}`}>
          <a href="#" className={styles.nav__logo}>
            <img src="https://headpones-lp.vercel.app/assets/img/logo.png" alt="" />
          </a>

          <div className={styles.nav__menu} id="nav-menu">
            <ul className={styles.nav__list}>
              <li className={styles.nav__item}>
                <a href="#home" className={`${styles.nav__link} ${styles.activeLink}`}>Home</a>
              </li>
              <li className={styles.nav__item}>
                <a href="#specs" className={styles.nav__link}>Specs</a>
              </li>
              <li className={styles.nav__item}>
                <a href="#case" className={styles.nav__link}>Case</a>
              </li>
              <li className={styles.nav__item}>
                <a href="#products" className={styles.nav__link}>Products</a>
              </li>
            </ul>

            <div className={styles.nav__close} id="nav-close">
              <i className="ri-close-line"></i>
            </div>
          </div>

          <div className={styles.nav__toggle} id="nav-toggle">
            <i className="ri-function-line"></i>
          </div>
        </nav>
      </header>
      </>
    )
}

export default HeaderBeats3;