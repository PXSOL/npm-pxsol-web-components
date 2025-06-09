"use client";

import { useEffect, useState, useMemo } from "react";
import styles from "./ReviewsPxsol1.module.css";

interface Review {
  id: number;
  service: string;
  building: string;
  location: string;
  clean: string;
  staff: string;
  price_quality: string;
  spa: string;
  restaurant: string;
  breakfast: string;
  recommendation: string;
  best_txt: string;
  worst_txt: string;
  type: string;
  country: string;
  province: string;
  name: string;
  score: string;
  base: string;
  wifi: string;
  created_at: string;
}

interface Average {
  service: number;
  building: number;
  staff: number;
  cleanliness: number;
  comfort: number;
  location: number;
  facilities: number;
  value: number;
  all: number;
  clean: number;
  price_quality: number;
  score: string;
}

interface ReviewSettings {
  showAverage: boolean;
  showDate: boolean;
  showUserName: boolean;
  showScores: {
    service: boolean;
    building: boolean;
    staff: boolean;
    cleanliness: boolean;
    comfort: boolean;
    location: boolean;
    facilities: boolean;
    value: boolean;
  };
  maxReviews: number;
  minScore: number;
}

interface ReviewsResponse {
  response: number;
  message: string;
  code: number;
  average: Average;
  list: {
    current_page: number;
    data: Review[];
    last_page: number;
    total: number;
  };
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

interface ReviewsPxsolProps {
  Title?: ContentProps;
  Text?: ContentProps;
  idPos?: ContentProps;
  token?: string;
  "Review Settings"?: {
    name: string;
    type: string;
    dataType: string;
    content: ReviewSettings;
    styleData: Record<string, any>;
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

export const ReviewsPxsol1: React.FC<ReviewsPxsolProps> = (props) => {
  const titleHero = props.Title;
  const textHero = props.Text;
  const idPos = props.idPos;
  const token = props.token;
  const reviewSettings = props["Review Settings"];
  const sectionStyles = props.Section;

  const [reviews, setReviews] = useState<Review[]>([]);
  const [average, setAverage] = useState<Average | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);

  // Extract settings from Review Settings prop
  const settings: ReviewSettings = (
    typeof reviewSettings?.content === "object"
      ? reviewSettings.content
      : {
          showAverage: true,
          showDate: true,
          showUserName: true,
          showScores: {
            service: true,
            building: true,
            staff: true,
            cleanliness: true,
            comfort: true,
            location: true,
            facilities: true,
            value: true,
          },
          maxReviews: 5,
          minScore: 80,
        }
  ) as ReviewSettings;

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

  // Extraer el productId del idPos
  const productId =
    idPos?.content !== "undefined" ? Number(idPos?.content) : undefined;

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        setError(null);

        // Si no hay productId, mantenemos el estado de loading
        if (!productId) {
          return;
        }

        const apiUrl = `https://api.pxsol.io/v2eb/comments/list?product_id=${productId}&limit=${settings.maxReviews}&score=${settings.minScore}&avoidCache=true`;

        const response = await fetch(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data: ReviewsResponse = await response.json();

        if (data.response === 1 && data.list?.data) {
          setReviews(data.list.data);
          setAverage(data.average);
        } else {
          setError("Error al cargar las reseñas");
        }
      } catch (error) {
        setError("Error al cargar las reseñas");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [productId, token, settings.maxReviews, settings.minScore]);

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
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const totalPages = Math.ceil(reviews.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const visibleReviews = reviews.slice(startIndex, startIndex + itemsPerPage);

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
          <b>{titleHero?.content || "Opiniones de nuestros huéspedes"}</b>
        </h2>
        <p
          className={styles.subtitle}
          style={{
            color: textHero?.styleData?.titleColor?.styleContent || "#718096",
            fontSize: textHero?.styleData?.titleSize?.styleContent || "1rem",
          }}
        >
          {textHero?.content ||
            "Descubre lo que opinan nuestros huéspedes sobre su experiencia"}
        </p>
        <div className={styles.reviewsContainer}>
          <div className={styles.reviewsGrid}>
            {Array(itemsPerPage)
              .fill(null)
              .map((_, i) => (
                <div key={i} className={styles.reviewCard}>
                  <div className={styles.reviewContent}>
                    <div className={styles.reviewTitle} />
                    <div className={styles.reviewDescription} />
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
          <b>{titleHero?.content || "Opiniones de nuestros huéspedes"}</b>
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
          <b>{titleHero?.content || "Opiniones de nuestros huéspedes"}</b>
        </h2>
        <p
          className={styles.subtitle}
          style={{
            color: textHero?.styleData?.titleColor?.styleContent || "#718096",
            fontSize: textHero?.styleData?.titleSize?.styleContent || "1rem",
          }}
        >
          {textHero?.content ||
            "Descubre lo que opinan nuestros huéspedes sobre su experiencia"}
        </p>
        <div className={styles.reviewsContainer}>
          <div className={styles.reviewsGrid}>
            {Array(itemsPerPage)
              .fill(null)
              .map((_, i) => (
                <div key={i} className={styles.reviewCard}>
                  <div className={styles.reviewContent}>
                    <div className={styles.reviewTitle} />
                    <div className={styles.reviewDescription} />
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
        <b>{titleHero?.content || "Opiniones de nuestros huéspedes"}</b>
      </h2>
      <p
        className={styles.subtitle}
        style={{
          color: textHero?.styleData?.titleColor?.styleContent || "#718096",
          fontSize: textHero?.styleData?.titleSize?.styleContent || "1rem",
        }}
      >
        {textHero?.content ||
          "Descubre lo que opinan nuestros huéspedes sobre su experiencia"}
      </p>

      {average && settings.showAverage && (
        <div className={styles.averageContainer}>
          <div className={styles.scoreCircle}>
            <span className={styles.scoreNumber}>{average.score}</span>
            <span className={styles.scoreLabel}>Puntuación general</span>
          </div>
          <div className={styles.averageDetails}>
            {settings.showScores.service && (
              <div className={styles.averageItem}>
                <span>Servicio</span>
                <div className={styles.ratingBar}>
                  <div
                    className={styles.ratingFill}
                    style={{ width: `${average.service * 10}%` }}
                  />
                </div>
                <span>{average.service}</span>
              </div>
            )}
            {settings.showScores.cleanliness && (
              <div className={styles.averageItem}>
                <span>Limpieza</span>
                <div className={styles.ratingBar}>
                  <div
                    className={styles.ratingFill}
                    style={{ width: `${average.clean * 10}%` }}
                  />
                </div>
                <span>{average.clean}</span>
              </div>
            )}
            {settings.showScores.location && (
              <div className={styles.averageItem}>
                <span>Ubicación</span>
                <div className={styles.ratingBar}>
                  <div
                    className={styles.ratingFill}
                    style={{ width: `${average.location * 10}%` }}
                  />
                </div>
                <span>{average.location}</span>
              </div>
            )}
            {settings.showScores.value && (
              <div className={styles.averageItem}>
                <span>Calidad-Precio</span>
                <div className={styles.ratingBar}>
                  <div
                    className={styles.ratingFill}
                    style={{ width: `${average.price_quality * 10}%` }}
                  />
                </div>
                <span>{average.price_quality}</span>
              </div>
            )}
          </div>
        </div>
      )}

      <div className={styles.reviewsContainer}>
        <div className={styles.reviewsGrid}>
          {visibleReviews.map((review) => (
            <div
              key={review.id}
              className={`${styles.reviewCard} ${isAnimating ? styles.fadeOut : ""}`}
            >
              <div className={styles.reviewHeader}>
                <div className={styles.reviewerInfo}>
                  {settings.showUserName && <h3>{review.name}</h3>}
                  <p>
                    {review.country}, {review.province}
                  </p>
                  <span className={styles.tripType}>{review.type}</span>
                </div>
                <div className={styles.reviewScore}>{review.score}%</div>
              </div>

              <div className={styles.reviewContent}>
                {review.best_txt && (
                  <div className={styles.reviewHighlight}>
                    <h4>Lo mejor:</h4>
                    <p>{review.best_txt}</p>
                  </div>
                )}
                {review.worst_txt && (
                  <div className={styles.reviewHighlight}>
                    <h4>A mejorar:</h4>
                    <p>{review.worst_txt}</p>
                  </div>
                )}
                {settings.showDate && (
                  <div className={styles.reviewDate}>
                    <p>Fecha de la estadía: {formatDate(review.created_at)}</p>
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

export default ReviewsPxsol1;
