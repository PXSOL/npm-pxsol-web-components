import React from "react";
import styles from "./HeroTravel1.module.css";
import "../reset.css";

export const HeroTravel1 = (props: any) => {
  console.log("Props de Hero travel 1", props);

  // Accedemos a las props directamente por su nombre
  const titleHero = props.Title;
  const textHero = props.Text;
  const ctaButtonHero = props["Cta button"];

  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        <h2
          className={styles.heroTitle}
          style={{
            color: titleHero?.styleData?.titleColor?.styleContent || "#fff",
            fontSize: titleHero?.styleData?.titleSize?.styleContent || "70px",
          }}
        >
          <b>{titleHero?.content || "Hospedate en Hotel Demo"}</b>
        </h2>
        <p
          className={styles.heroText}
          style={{
            color: textHero?.styleData?.titleColor?.styleContent || "#fff",
            fontSize: textHero?.styleData?.titleSize?.styleContent || "12px",
          }}
        >
          {textHero?.content ||
            "En Hotel Demo, combinamos confort, estilo y atención personalizada para que vivas una estadía inolvidable. Disfrutá de nuestras habitaciones, desayuno casero y una ubicación privilegiada. Bienvenido al descanso que merecés"}
        </p>
        <div className={styles.btnGroup}>
          <button
            className={styles.btnPrimary}
            style={{
              color:
                ctaButtonHero?.styleData?.textColor?.styleContent || "#fff",
              backgroundColor:
                ctaButtonHero?.styleData?.backgroundColor?.styleContent ||
                "#fff",
              fontSize:
                ctaButtonHero?.styleData?.buttonTextSize?.styleContent ||
                "14px",
            }}
            onClick={() =>
              (window.location.href = ctaButtonHero?.content?.link || "#")
            }
          >
            {ctaButtonHero?.content?.textButton || "Offer"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroTravel1;
