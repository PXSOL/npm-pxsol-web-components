import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "./HeroSlider1.module.css";
import "../reset.css";

// Interface completamente nueva y simple
interface HeroSliderProps {
  Section?: {
    content: string;
    styleData: {
      backgroundColor: { styleContent: string };
      margin: { styleContent: string };
      padding: { styleContent: string };
      borderRadius: { styleContent: string };
    };
  };

  // 4 Imágenes individuales
  Image1?: {
    imageSrc: string;
    styleData: {
      filterImage: { styleContent: string };
    };
  };
  Image2?: {
    imageSrc: string;
    styleData: {
      filterImage: { styleContent: string };
    };
  };
  Image3?: {
    imageSrc: string;
    styleData: {
      filterImage: { styleContent: string };
    };
  };
  Image4?: {
    imageSrc: string;
    styleData: {
      filterImage: { styleContent: string };
    };
  };

  // 4 Títulos individuales
  Title1?: {
    content: string;
    styleData: {
      titleColor: { styleContent: string };
      titleSize: { styleContent: string };
    };
  };
  Title2?: {
    content: string;
    styleData: {
      titleColor: { styleContent: string };
      titleSize: { styleContent: string };
    };
  };
  Title3?: {
    content: string;
    styleData: {
      titleColor: { styleContent: string };
      titleSize: { styleContent: string };
    };
  };
  Title4?: {
    content: string;
    styleData: {
      titleColor: { styleContent: string };
      titleSize: { styleContent: string };
    };
  };

  // 4 Descripciones individuales
  Description1?: {
    content: string;
    styleData: {
      titleColor: { styleContent: string };
      titleSize: { styleContent: string };
    };
  };
  Description2?: {
    content: string;
    styleData: {
      titleColor: { styleContent: string };
      titleSize: { styleContent: string };
    };
  };
  Description3?: {
    content: string;
    styleData: {
      titleColor: { styleContent: string };
      titleSize: { styleContent: string };
    };
  };
  Description4?: {
    content: string;
    styleData: {
      titleColor: { styleContent: string };
      titleSize: { styleContent: string };
    };
  };
}

export const HeroSlider1: React.FC<HeroSliderProps> = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Construir array de slides desde las props individuales
  const slides = [
    {
      image:
        props.Image1?.imageSrc ||
        "https://i.postimg.cc/D0c2FLPM/hero-banner.jpg",
      imageFilter: props.Image1?.styleData?.filterImage?.styleContent || "",
      title: props.Title1?.content || "Slide 1 Title",
      titleColor: props.Title1?.styleData?.titleColor?.styleContent || "#fff",
      titleSize: props.Title1?.styleData?.titleSize?.styleContent || "3.5rem",
      description: props.Description1?.content || "Slide 1 description",
      descriptionColor:
        props.Description1?.styleData?.titleColor?.styleContent || "#fff",
      descriptionSize:
        props.Description1?.styleData?.titleSize?.styleContent || "1.2rem",
    },
    {
      image:
        props.Image2?.imageSrc ||
        "https://i.postimg.cc/7YQK2Jvf/hero-banner-2.jpg",
      imageFilter: props.Image2?.styleData?.filterImage?.styleContent || "",
      title: props.Title2?.content || "Slide 2 Title",
      titleColor: props.Title2?.styleData?.titleColor?.styleContent || "#fff",
      titleSize: props.Title2?.styleData?.titleSize?.styleContent || "3.5rem",
      description: props.Description2?.content || "Slide 2 description",
      descriptionColor:
        props.Description2?.styleData?.titleColor?.styleContent || "#fff",
      descriptionSize:
        props.Description2?.styleData?.titleSize?.styleContent || "1.2rem",
    },
    {
      image:
        props.Image3?.imageSrc ||
        "https://i.postimg.cc/9FKZnHPT/hero-banner-3.jpg",
      imageFilter: props.Image3?.styleData?.filterImage?.styleContent || "",
      title: props.Title3?.content || "Slide 3 Title",
      titleColor: props.Title3?.styleData?.titleColor?.styleContent || "#fff",
      titleSize: props.Title3?.styleData?.titleSize?.styleContent || "3.5rem",
      description: props.Description3?.content || "Slide 3 description",
      descriptionColor:
        props.Description3?.styleData?.titleColor?.styleContent || "#fff",
      descriptionSize:
        props.Description3?.styleData?.titleSize?.styleContent || "1.2rem",
    },
    {
      image:
        props.Image4?.imageSrc ||
        "https://i.postimg.cc/D0c2FLPM/hero-banner.jpg",
      imageFilter: props.Image4?.styleData?.filterImage?.styleContent || "",
      title: props.Title4?.content || "Slide 4 Title",
      titleColor: props.Title4?.styleData?.titleColor?.styleContent || "#fff",
      titleSize: props.Title4?.styleData?.titleSize?.styleContent || "3.5rem",
      description: props.Description4?.content || "Slide 4 description",
      descriptionColor:
        props.Description4?.styleData?.titleColor?.styleContent || "#fff",
      descriptionSize:
        props.Description4?.styleData?.titleSize?.styleContent || "1.2rem",
    },
  ];

  // Auto-slide cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // Funciones de navegación
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Estilos de la sección
  const sectionStyles = {
    backgroundColor:
      props.Section?.styleData?.backgroundColor?.styleContent || "#000",
    margin: props.Section?.styleData?.margin?.styleContent || "0px",
    padding: props.Section?.styleData?.padding?.styleContent || "0px",
    borderRadius: props.Section?.styleData?.borderRadius?.styleContent || "0px",
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className={styles.heroSlider} style={sectionStyles}>
      <div className={styles.sliderContainer}>
        {/* Imágenes del slider */}
        <div className={styles.imageSlider}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`${styles.slide} ${index === currentSlide ? styles.active : ""}`}
            >
              <Image
                priority={index === 0}
                src={slide.image}
                alt={`Slide ${index + 1}`}
                fill
                className={styles.sliderImage}
                style={{
                  objectFit: "cover",
                  filter: slide.imageFilter,
                }}
                sizes="100vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
          ))}
        </div>

        {/* Controles de navegación */}
        <button
          className={`${styles.sliderArrow} ${styles.prevArrow}`}
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          className={`${styles.sliderArrow} ${styles.nextArrow}`}
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Contenido superpuesto */}
        <div className={styles.contentOverlay}>
          <div className={styles.contentContainer}>
            <h1
              className={styles.heroTitle}
              style={{
                color: currentSlideData.titleColor,
                fontSize: currentSlideData.titleSize,
              }}
            >
              {currentSlideData.title}
            </h1>
            <p
              className={styles.heroText}
              style={{
                color: currentSlideData.descriptionColor,
                fontSize: currentSlideData.descriptionSize,
              }}
            >
              {currentSlideData.description}
            </p>
          </div>
        </div>

        {/* Indicadores de puntos */}
        <div className={styles.sliderDots}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider1;
