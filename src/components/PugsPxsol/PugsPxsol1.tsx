"use client";

import { useEffect, useState } from "react";
import styles from "./PugsPxsol1.module.css";

interface Pug {
  id: number;
  name: string;
  description: string;
  conditions: string;
  image_url: string;
  startdate: string;
  enddate: string;
  actiontype: string;
  actionvalue: string;
  currency: string;
  action_amount_type: string;
}

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

interface PugsPxsolProps {
  Title?: ContentProps;
  Text?: ContentProps;
  idPos?: ContentProps;
  token?: string;
}

export const PugsPxsol1: React.FC<PugsPxsolProps> = (props) => {
  // Accedemos a las props con los nombres correctos
  const titleHero = props.Title;
  const textHero = props.Text;
  const idPos = props.idPos;
  const token = props.token;

  const [pugs, setPugs] = useState<Pug[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);

  // Extraer el productId del idPos
  const productId =
    idPos?.content !== "undefined" ? Number(idPos?.content) : undefined;

  useEffect(() => {
    const fetchPugs = async () => {
      try {
        setLoading(true);
        setError(null);

        // Si no hay productId, mantenemos el estado de loading
        if (!productId) {
          return;
        }

        const response = await fetch(
          `https://api.pxsol.io/v2eb/pug/list/${productId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        const data = await response.json();

        if (Array.isArray(data)) {
          setPugs(data);
        } else {
          setError("Error al cargar las promociones");
        }
      } catch (error) {
        setError("Error al cargar las promociones");
      } finally {
        setLoading(false);
      }
    };

    fetchPugs();
  }, [productId, token]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 640) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePageChange = async (newPage: number) => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentPage(newPage);
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const formatDate = (dateString: string) => {
    if (dateString === "0000-00-00") return "Sin fecha límite";
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatDiscount = (pug: Pug) => {
    if (pug.actiontype === "discount") {
      const value =
        parseFloat(pug.actionvalue) /
        (pug.action_amount_type === "percentage" ? 100 : 1);
      return pug.action_amount_type === "percentage"
        ? `${value}% de descuento`
        : `${value} ${pug.currency} de descuento`;
    }
    return "";
  };

  const totalPages = Math.ceil(pugs.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const visiblePugs = pugs.slice(startIndex, startIndex + itemsPerPage);

  if (!productId || productId === undefined) {
    return (
      <div className={styles.container}>
        <h2
          className={styles.title}
          style={{
            color: titleHero?.styleData?.titleColor?.styleContent || "#2d3748",
            fontSize: titleHero?.styleData?.titleSize?.styleContent || "2rem",
          }}
        >
          <b>{titleHero?.content || "Nuestras Promociones"}</b>
        </h2>
        <p
          className={styles.subtitle}
          style={{
            color: textHero?.styleData?.titleColor?.styleContent || "#718096",
            fontSize: textHero?.styleData?.titleSize?.styleContent || "1rem",
          }}
        >
          {textHero?.content || "Descubre todas las promociones disponibles"}
        </p>
        <div className={styles.pugsContainer}>
          <div className={styles.pugsGrid}>
            {Array(itemsPerPage)
              .fill(null)
              .map((_, i) => (
                <div key={i} className={styles.pugCard}>
                  <div className={styles.imageContainer} />
                  <div className={styles.pugContent}>
                    <div className={styles.pugTitle} />
                    <div className={styles.pugDescription} />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <h2
          className={styles.title}
          style={{
            color: titleHero?.styleData?.titleColor?.styleContent || "#2d3748",
            fontSize: titleHero?.styleData?.titleSize?.styleContent || "2rem",
          }}
        >
          <b>{titleHero?.content || "Nuestras Promociones"}</b>
        </h2>
        <div className={styles.errorContainer}>
          <div className={styles.errorIcon}>✕</div>
          <p className={styles.errorMessage}>{error}</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className={styles.container}>
        <h2
          className={styles.title}
          style={{
            color: titleHero?.styleData?.titleColor?.styleContent || "#2d3748",
            fontSize: titleHero?.styleData?.titleSize?.styleContent || "2rem",
          }}
        >
          <b>{titleHero?.content || "Nuestras Promociones"}</b>
        </h2>
        <p
          className={styles.subtitle}
          style={{
            color: textHero?.styleData?.titleColor?.styleContent || "#718096",
            fontSize: textHero?.styleData?.titleSize?.styleContent || "1rem",
          }}
        >
          {textHero?.content || "Descubre todas las promociones disponibles"}
        </p>
        <div className={styles.pugsContainer}>
          <div className={styles.pugsGrid}>
            {Array(itemsPerPage)
              .fill(null)
              .map((_, i) => (
                <div key={i} className={styles.pugCard}>
                  <div className={styles.imageContainer} />
                  <div className={styles.pugContent}>
                    <div className={styles.pugTitle} />
                    <div className={styles.pugDescription} />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2
        className={styles.title}
        style={{
          color: titleHero?.styleData?.titleColor?.styleContent || "#2d3748",
          fontSize: titleHero?.styleData?.titleSize?.styleContent || "2rem",
        }}
      >
        <b>{titleHero?.content || "Nuestras Promociones"}</b>
      </h2>
      <p
        className={styles.subtitle}
        style={{
          color: textHero?.styleData?.titleColor?.styleContent || "#718096",
          fontSize: textHero?.styleData?.titleSize?.styleContent || "1rem",
        }}
      >
        {textHero?.content || "Descubre todas las promociones disponibles"}
      </p>

      <div className={styles.pugsContainer}>
        <div className={styles.pugsGrid}>
          {visiblePugs.map((pug) => (
            <div
              key={pug.id}
              className={`${styles.pugCard} ${isAnimating ? styles.fadeOut : ""}`}
            >
              <div className={styles.imageContainer}>
                <img
                  src={pug.image_url}
                  alt={pug.name}
                  className={styles.pugImage}
                />
                <div className={styles.discountBadge}>
                  {formatDiscount(pug)}
                </div>
              </div>

              <div className={styles.pugContent}>
                <h3 className={styles.pugTitle}>{pug.name}</h3>
                <div
                  className={styles.pugDescription}
                  dangerouslySetInnerHTML={{ __html: pug.description }}
                />
                <div className={styles.pugDates}>
                  <p>Válido desde: {formatDate(pug.startdate)}</p>
                  <p>Hasta: {formatDate(pug.enddate)}</p>
                </div>
                {pug.conditions && (
                  <div className={styles.pugConditions}>
                    <h4>Condiciones:</h4>
                    <p>{pug.conditions}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className={styles.navigationButtons}>
            <button
              className={styles.navButton}
              onClick={() => handlePageChange(Math.max(0, currentPage - 1))}
              disabled={currentPage === 0 || isAnimating}
              aria-label="Previous page"
            >
              ‹
            </button>
            <button
              className={styles.navButton}
              onClick={() =>
                handlePageChange(Math.min(totalPages - 1, currentPage + 1))
              }
              disabled={currentPage === totalPages - 1 || isAnimating}
              aria-label="Next page"
            >
              ›
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PugsPxsol1;
