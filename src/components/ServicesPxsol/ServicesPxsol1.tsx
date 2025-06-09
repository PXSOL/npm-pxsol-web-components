"use client";

import { useEffect, useState, useMemo } from "react";
import styles from "./ServicesPxsol1.module.css";

interface Service {
  id: number;
  product_id: number;
  service_id: number;
  title: string;
  description: string;
  icon_class: string;
  image_id: number;
  lng: string;
  order: number;
  status: number;
  css_class: string;
  updated_at: string;
  created_at: string;
  deleted_at: null | string;
  image_url: string;
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

interface ServicesPxsolProps {
  Title?: ContentProps;
  Text?: ContentProps;
  idPos?: ContentProps;
  token?: string;
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

export const ServicesPxsol1: React.FC<ServicesPxsolProps> = (props) => {
  // Accedemos a las props con los nombres correctos
  const titleHero = props.Title;
  const textHero = props.Text;
  const idPos = props.idPos;
  const sectionStyles = props.Section;
  const token = props.token;

  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);

  // Extraer el productId del idPos
  const productId =
    idPos?.content !== "undefined" ? Number(idPos?.content) : undefined;

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

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        setError(null);

        // Si no hay productId, mantenemos el estado de loading
        if (!productId) {
          return;
        }

        const response = await fetch(
          `https://api.pxsol.io/v2eb/services/list/${productId}`,
          {
            headers: {
              Authorization: token || "",
            },
          },
        );
        const data = await response.json();

        if (data.response === 1 && data.list) {
          setServices(data.list);
        } else {
          setError("Error al cargar los servicios");
        }
      } catch (error) {
        setError("Error al cargar los servicios");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
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

  const totalPages = Math.ceil(services.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const visibleServices = services.slice(startIndex, startIndex + itemsPerPage);

  if (!productId || productId === undefined) {
    return (
      <div className={styles.container} style={sectionContainerStyles}>
        <h2
          className={styles.title}
          style={{
            color: titleHero?.styleData?.titleColor?.styleContent || "#2d3748",
            fontSize: titleHero?.styleData?.titleSize?.styleContent || "2rem",
          }}
        >
          <b>{titleHero?.content || "Nuestros Servicios"}</b>
        </h2>
        <p
          className={styles.subtitle}
          style={{
            color: textHero?.styleData?.titleColor?.styleContent || "#718096",
            fontSize: textHero?.styleData?.titleSize?.styleContent || "1rem",
          }}
        >
          {textHero?.content ||
            "Descubre todos los servicios que tenemos para ofrecerte"}
        </p>
        <div className={styles.servicesContainer}>
          <div className={styles.servicesGrid}>
            {Array(itemsPerPage)
              .fill(null)
              .map((_, i) => (
                <div key={i} className={styles.serviceCard}>
                  <div className={styles.imageContainer} />
                  <div className={styles.serviceContent}>
                    <div className={styles.serviceTitle} />
                    <div className={styles.serviceDescription} />
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
      <div className={styles.container} style={sectionContainerStyles}>
        <h2
          className={styles.title}
          style={{
            color: titleHero?.styleData?.titleColor?.styleContent || "#2d3748",
            fontSize: titleHero?.styleData?.titleSize?.styleContent || "2rem",
          }}
        >
          <b>{titleHero?.content || "Nuestros Servicios"}</b>
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
      <div className={styles.container} style={sectionContainerStyles}>
        <h2
          className={styles.title}
          style={{
            color: titleHero?.styleData?.titleColor?.styleContent || "#2d3748",
            fontSize: titleHero?.styleData?.titleSize?.styleContent || "2rem",
          }}
        >
          <b>{titleHero?.content || "Nuestros Servicios"}</b>
        </h2>
        <p
          className={styles.subtitle}
          style={{
            color: textHero?.styleData?.titleColor?.styleContent || "#718096",
            fontSize: textHero?.styleData?.titleSize?.styleContent || "1rem",
          }}
        >
          {textHero?.content ||
            "Descubre todos los servicios que tenemos para ofrecerte"}
        </p>
        <div className={styles.servicesContainer}>
          <div className={styles.servicesGrid}>
            {Array(itemsPerPage)
              .fill(null)
              .map((_, i) => (
                <div key={i} className={styles.serviceCard}>
                  <div className={styles.imageContainer} />
                  <div className={styles.serviceContent}>
                    <div className={styles.serviceTitle} />
                    <div className={styles.serviceDescription} />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container} style={sectionContainerStyles}>
      <h2
        className={styles.title}
        style={{
          color: titleHero?.styleData?.titleColor?.styleContent || "#2d3748",
          fontSize: titleHero?.styleData?.titleSize?.styleContent || "2rem",
        }}
      >
        <b>{titleHero?.content || "Nuestros Servicios"}</b>
      </h2>
      <p
        className={styles.subtitle}
        style={{
          color: textHero?.styleData?.titleColor?.styleContent || "#718096",
          fontSize: textHero?.styleData?.titleSize?.styleContent || "1rem",
        }}
      >
        {textHero?.content ||
          "Descubre todos los servicios que tenemos para ofrecerte"}
      </p>

      <div className={styles.servicesContainer}>
        <div className={styles.servicesGrid}>
          {visibleServices.map((service) => (
            <div
              key={service.id}
              className={`${styles.serviceCard} ${isAnimating ? styles.fadeOut : ""}`}
            >
              <div className={styles.imageContainer}>
                <img
                  src={service.image_url}
                  alt={service.title}
                  className={styles.serviceImage}
                />
                <div className={styles.iconOverlay}>
                  <i className={service.icon_class}></i>
                </div>
              </div>

              <div className={styles.serviceContent}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <div
                  className={styles.serviceDescription}
                  dangerouslySetInnerHTML={{ __html: service.description }}
                />
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

export default ServicesPxsol1;
