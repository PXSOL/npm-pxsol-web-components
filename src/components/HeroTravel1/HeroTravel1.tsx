import React, { useMemo } from "react";
import Image from "next/image";
import styles from "./HeroTravel1.module.css";

interface HeroProps {
  Title?: {
    content: string;
    styleData: {
      titleColor: { styleContent: string };
      titleSize: { styleContent: string };
    };
    type: string;
    dataType: string;
    name: string;
    _id?: string;
  };
  Text?: {
    content: string;
    styleData: {
      titleColor: { styleContent: string };
      titleSize: { styleContent: string };
    };
    type: string;
    dataType: string;
    name: string;
    _id?: string;
  };
  "Cta button"?: {
    content: {
      textButton: string;
      link: string;
    };
    styleData: {
      textColor: { styleContent: string };
      backgroundColor: { styleContent: string };
      buttonTextSize: { styleContent: string };
    };
    type: string;
    dataType: string;
    name: string;
    _id?: string;
  };
  "Main image"?: {
    imageSrc: string;
    content: string;
    styleData: {
      filterImage: {
        name: string;
        styleContent: string;
        styleType: string;
        value: Array<{ name: string; value: string }>;
      };
      imageWidth?: {
        styleContent: string;
      };
      imageHeight?: {
        styleContent: string;
      };
    };
    type: string;
    dataType: string;
    name: string;
    _id?: string;
  };
  Section?: {
    content: string;
    styleData: {
      backgroundColor: { styleContent: string };
      margin: { styleContent: string };
      padding: { styleContent: string };
      borderRadius: { styleContent: string };
    };
    type: string;
    dataType: string;
    name: string;
    _id?: string;
  };
}

export const HeroTravel1: React.FC<HeroProps> = (props) => {
  // Accedemos a las props con los nombres correctos
  const titleHero = props.Title;
  const textHero = props.Text;
  const ctaButtonHero = props["Cta button"];
  const imageHero = props["Main image"];
  const sectionStyles = props.Section;

  const imageHeroStyles = useMemo(() => {
    const filterString = imageHero?.styleData?.filterImage?.styleContent || "";

    return {
      objectFit: "cover" as const,
      filter: filterString,
    };
  }, [imageHero?.styleData?.filterImage?.styleContent]);

  const sectionContainerStyles = useMemo(() => {
    return {
      backgroundColor:
        sectionStyles?.styleData?.backgroundColor?.styleContent || "#fff",
      margin:
        sectionStyles?.styleData?.margin?.styleContent || "0px 0px 0px 0px",
      padding:
        sectionStyles?.styleData?.padding?.styleContent || "0px 0px 0px 0px",
      borderRadius:
        sectionStyles?.styleData?.borderRadius?.styleContent ||
        "0px 0px 0px 0px",
    };
  }, [
    sectionStyles?.styleData?.backgroundColor?.styleContent,
    sectionStyles?.styleData?.margin?.styleContent,
    sectionStyles?.styleData?.padding?.styleContent,
    sectionStyles?.styleData?.borderRadius?.styleContent,
  ]);

  return (
    <section className={styles.hero} id="home" style={sectionContainerStyles}>
      <div className={styles.imageWrapper}>
        <Image
          priority={true}
          style={imageHeroStyles}
          height={650}
          width={300}
          src={
            imageHero?.imageSrc ||
            "https://i.postimg.cc/D0c2FLPM/hero-banner.jpg"
          }
          alt={imageHero?.name || "Hero background"}
          className={styles.home__img}
          placeholder="blur"
          blurDataURL="/placeholder.png"
        />
      </div>
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

        <button
          className={styles.btnPrimary}
          style={{
            color: ctaButtonHero?.styleData?.textColor?.styleContent || "#fff",
            backgroundColor:
              ctaButtonHero?.styleData?.backgroundColor?.styleContent ||
              "#5692f1",
            fontSize:
              ctaButtonHero?.styleData?.buttonTextSize?.styleContent || "14px",
          }}
          onClick={() =>
            (window.location.href = ctaButtonHero?.content?.link || "#")
          }
        >
          {ctaButtonHero?.content?.textButton || "Offer"}
        </button>
      </div>
    </section>
  );
};

export default HeroTravel1;
