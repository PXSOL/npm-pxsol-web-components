import React from "react";
import styles from "./SpecsBeats3.module.css"
import 'remixicon/fonts/remixicon.css';
import Image from "next/image";

export const SpecsBeats3: React.FC<any> = (props)=>{
    return(
      <section className={`${styles.specs} ${styles.section} ${styles.grid}`} id="specs">
        <h2 className={`${styles.section__title} ${styles.section__titleGradient}`}>
          {props.titleHero.content}
        </h2>

        <div className={`${styles.specs__container} ${styles.container} ${styles.grid}`}>
          <div className={`${styles.specs__content} ${styles.grid}`}>
            {props.groupSpecs.content.map((itemSpec: any, index: any)=>{
              return(
                <div key={index} className={styles.specs__data}>
                  <i className={`${itemSpec.iconNameClass.content} ${styles.specs__icon}`}></i>
                  <h3 className={styles.specs__title}>
                    {itemSpec.specTitle.content}
                  </h3>
                  <span className={styles.specs__subtitle}>
                    {itemSpec.specDescription.content}
                  </span>
                </div>
              )
            })}
          </div>

          <div>
            <Image width={700} height={700} src={props.imgSection.imageSrc} alt={props.titleHero.name} className={styles.specs__img}></Image>
          </div>
        </div>
      </section>
    )
}

export default SpecsBeats3;