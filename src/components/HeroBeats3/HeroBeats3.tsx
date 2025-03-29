import Image from "next/image";
import styles from "./HeroBeats3.module.css"
import Link from "next/link";

const HeroBeats3: React.FC<any> = (props)=>{

    return(
      <section className={`${styles.home} ${styles.section}`} id="home">
        <div className={`${styles.home__container} ${styles.container} ${styles.grid}`}>
          <div>
            <Image height={750} width={400} src={props.imageHero.imageSrc} alt={props.imageHero.name} className={styles.home__img}></Image>
          </div>

          <div className={styles.home__data}>
            <div className={styles.home__header}>
              <h1 className={styles.home__title}>
                {props.titleHero.content}
              </h1>
              <h2 className={styles.home__subtitle}>{props.subtitleHero.content}</h2>
            </div>

            <div className={styles.home__footer}>
              <h3 className={styles.home__titleDescription}>
                {props.subtitleTextHero.content}
              </h3>
              <p className={styles.home__description}>
                {props.TextHero.content}
              </p>
              <Link href={props.ctaButtonHero.content.link} className={`${styles.button} ${styles.button__flex}`}>
                <span className={styles.button__flex}>
                  <i className={`ri-shopping-bag-line ${styles.button__icon}`}></i>
                  {props.ctaButtonHero.content.textButton}
                </span>
                <span className={styles.home__price}>
                  {props.priceButton.content}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
}

export default HeroBeats3