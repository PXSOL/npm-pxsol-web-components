"use client";

import { useState, useMemo } from "react";
import styles from "./MapPxsol1.module.css";

interface ContentProps {
  name: string;
  type: string;
  dataType: string;
  content: string;
  styleData: {
    titleColor?: {
      name: string;
      styleType: string;
      styleContent: string;
    };
    titleSize?: {
      name: string;
      styleType: string;
      styleContent: string;
    };
  };
}

interface MapPxsolProps {
  Title?: ContentProps;
  Text?: ContentProps;
  idPos?: ContentProps;
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

export const MapPxsol1: React.FC<MapPxsolProps> = (props) => {
  // Accedemos a las props con los nombres correctos
  const titleHero = props.Title;
  const textHero = props.Text;
  const idPos = props.idPos;
  const sectionStyles = props.Section;
  const [loading, setLoading] = useState(true);

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

  // Función para extraer el src de un iframe completo
  const extractSrcFromIframe = (iframeString: string) => {
    const srcMatch = iframeString.match(/src="([^"]+)"/);
    return srcMatch ? srcMatch[1] : "";
  };

  // Función para manejar cuando el iframe termina de cargar
  const handleIframeLoad = () => {
    setLoading(false);
  };

  // Obtener el src del iframe
  const defaultIframe =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.3354966283405!2d-68.85213078849135!3d-32.88929686888474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e090489def92b%3A0x89f0a84aa8829689!2sDiplomatic%20Hotel!5e0!3m2!1ses!2sar!4v1749000907898!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
  const mapSrc = idPos?.content
    ? extractSrcFromIframe(idPos.content)
    : extractSrcFromIframe(defaultIframe);

  return (
    <div className={styles.container} style={sectionContainerStyles}>
      <h2
        className={styles.title}
        style={{
          color: titleHero?.styleData?.titleColor?.styleContent || "#2d3748",
          fontSize: titleHero?.styleData?.titleSize?.styleContent || "2rem",
        }}
      >
        <b>{titleHero?.content || "Nuestra Ubicación"}</b>
      </h2>
      <p
        className={styles.subtitle}
        style={{
          color: textHero?.styleData?.titleColor?.styleContent || "#718096",
          fontSize: textHero?.styleData?.titleSize?.styleContent || "1rem",
        }}
      >
        {textHero?.content ||
          "Encuentra la mejor ruta para llegar a nuestras instalaciones"}
      </p>

      <div className={styles.mapContainer}>
        {loading && (
          <div className={styles.skeleton}>
            <div className={styles.pulseAnimation}></div>
          </div>
        )}
        <iframe
          src={mapSrc}
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={handleIframeLoad}
          className={loading ? styles.hidden : ""}
        ></iframe>
      </div>
    </div>
  );
};

export default MapPxsol1;
