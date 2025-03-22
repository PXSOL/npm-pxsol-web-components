import styles from "./FooterBeats3.module.css"

export const FooterBeats3 = ()=>{

    return(
      <footer className={`${styles.footer} ${styles.section}`}>
        <div className={`${styles.footer__container} ${styles.container} ${styles.grid}`}>
          <a href="#" className={styles.footer__logo}>
            <img src="/img/logo.png" alt="" />
          </a>

          <div className={styles.footer__content}>
            <h3 className={styles.footer__title}>Products</h3>

            <ul className={styles.footer__links}>
              <li>
                <a href="#" className={styles.footer__link}>Headphones</a>
              </li>
              <li>
                <a href="#" className={styles.footer__link}>Earphones</a>
              </li>
              <li>
                <a href="#" className={styles.footer__link}>Earbuds</a>
              </li>
              <li>
                <a href="#" className={styles.footer__link}>Accesories</a>
              </li>
            </ul>
          </div>

          <div className={styles.footer__content}>
            <h3 className={styles.footer__title}>Support</h3>

            <ul className={styles.footer__links}>
              <li>
                <a href="#" className={styles.footer__link}>Product help</a>
              </li>
              <li>
                <a href="#" className={styles.footer__link}>Register</a>
              </li>
              <li>
                <a href="#" className={styles.footer__link}>Updates</a>
              </li>
              <li>
                <a href="#" className={styles.footer__link}>Provides</a>
              </li>
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
              <a href="https://www.facebook.com/" target="_blank" className={styles.footer__socialLink}>
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" className={styles.footer__socialLink}>
                <i className="ri-instagram-line"></i>
              </a>
              <a href="https://twitter.com/" target="_blank" className={styles.footer__socialLink}>
                <i className="ri-twitter-line"></i>
              </a>
            </div>
          </div>
        </div>

        <p className={styles.footer__copy}>
          <a href="https://www.youtube.com/c/Bedimcode/" target="_blank" className={styles.footer__copyLink}>
            &#169; Bedimcode. All right reserved
          </a>
        </p>
      </footer>
    )
}

export default FooterBeats3;