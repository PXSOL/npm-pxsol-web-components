import Image from "next/image";
import Link from "next/link";
import styles from "./OfferBeats3.module.css"

export const OfferBeats3: React.FC<any> = (props)=>{

    return(
        <section className={`${styles.discount} ${styles.section}`}>
          <div className={`${styles.discountContainer} ${styles.container} ${styles.grid}`}>
            <div className={styles.discountAnimate}>
              <h2 className={styles.discountTitle}>
                {props.titleOffer.content}
              </h2>
              <p className={styles.discountDescription}>
                {props.TextSection.content}
              </p>
              <Link href={props.ctaButtonCard.content.link} className={`${styles.button} ${styles.buttonFlex}`}>
                <i className={`ri-shopping-bag-line ${styles.buttonIcon}`}></i>
                 {props.ctaButtonCard.content.textButton}
              </Link>
            </div>

            <Image height={500} width={500} src={props.imgSection.imageSrc} alt={props.titleOffer.content} className={styles.discountImg}></Image>
          </div>
        </section>
    )
}

export default OfferBeats3;