"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import styles from "./RoomsPxsol1.module.css";

interface Photo {
  url: string;
  id: number;
  filename: string;
}

interface Amenity {
  id: number;
  type: string;
  label: string;
  icon_class: string;
}

interface Room {
  id: number;
  title: string;
  descripcion: string;
  photos: Photo[];
  json_amenities: string;
  adults: number;
  children: number;
  room_size: number;
  room_size_units: string;
}

interface StyleData {
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
}

interface ContentProps {
  name: string;
  type: string;
  dataType: string;
  content: string;
  styleData: StyleData;
}

interface RoomsPxsolProps {
  Title?: ContentProps;
  Text?: ContentProps;
  idPos?: ContentProps;
  "Slider Mode"?: ContentProps;
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

export const RoomsPxsol1: React.FC<RoomsPxsolProps> = (props) => {
  // Accedemos a las props con los nombres correctos
  const titleHero = props.Title;
  const textHero = props.Text;
  const idPos = props.idPos;
  const sliderMode = props["Slider Mode"]; // Clave con espacio
  const sectionStyles = props.Section;

  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeImageIndices, setActiveImageIndices] = useState<{
    [key: number]: number;
  }>({});
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);

  // Extraer el productId del idPos
  const productId =
    idPos?.content !== "undefined" ? Number(idPos?.content) : undefined;

  // Determinar si el modo slider está activo
  const isSliderMode = sliderMode?.content === "true";

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
    const fetchRooms = async () => {
      try {
        setLoading(true);
        setError(null);

        // Si no hay productId, mantenemos el estado de loading
        if (!productId) {
          return;
        }

        const response = await fetch(
          `https://api.pxsol.io/v2eb/sku/list/${productId}`,
        );
        const data = await response.json();

        if (data.response === 1 && data.list) {
          setRooms(data.list);
        } else {
          setError("ID de producto incorrecto");
        }
      } catch (error) {
        setError("Error al cargar las habitaciones");
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, [productId]);

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setItemsPerPage(3); // Desktop: 3 columnas
    } else if (window.innerWidth >= 640) {
      setItemsPerPage(2); // Tablet: 2 columnas
    } else {
      setItemsPerPage(1); // Mobile: 1 columna
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = useCallback(
    (roomId: number) => {
      const room = rooms.find((r) => r.id === roomId);
      if (room && room.photos && room.photos.length > 1) {
        const interval = setInterval(() => {
          setActiveImageIndices((prev) => ({
            ...prev,
            [roomId]: ((prev[roomId] || 0) + 1) % room.photos.length,
          }));
        }, 4000);

        return () => clearInterval(interval);
      }
    },
    [rooms],
  );

  const handleMouseLeave = (roomId: number) => {
    setActiveImageIndices((prev) => ({
      ...prev,
      [roomId]: 0,
    }));
  };

  const parseAmenities = (jsonString: string): Amenity[] => {
    try {
      return JSON.parse(jsonString);
    } catch {
      return [];
    }
  };

  const handlePageChange = async (newPage: number) => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentPage(newPage);
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const totalPages = Math.ceil(rooms.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const visibleRooms = isSliderMode
    ? rooms.slice(startIndex, startIndex + itemsPerPage)
    : rooms;

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
          <b>{titleHero?.content || "Nuestras Habitaciones"}</b>
        </h2>
        <p
          className={styles.subtitle}
          style={{
            color: textHero?.styleData?.titleColor?.styleContent || "#718096",
            fontSize: textHero?.styleData?.titleSize?.styleContent || "1rem",
          }}
        >
          {textHero?.content ||
            "Descubre el confort y la elegancia en cada una de nuestras habitaciones"}
        </p>
        <div className={styles.roomsContainer}>
          <div
            className={`${styles.roomsGrid} ${!isSliderMode ? styles.gridMode : ""}`}
          >
            {Array(isSliderMode ? itemsPerPage : 6)
              .fill(null)
              .map((_, i) => (
                <div key={i} className={styles.roomCard}>
                  <div className={styles.imageContainer} />
                  <div className={styles.roomContent}>
                    <div className={styles.roomTitle} />
                    <div className={styles.roomDescription} />
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
          <b>{titleHero?.content || "Nuestras Habitaciones"}</b>
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
          <b>{titleHero?.content || "Nuestras Habitaciones"}</b>
        </h2>
        <p
          className={styles.subtitle}
          style={{
            color: textHero?.styleData?.titleColor?.styleContent || "#718096",
            fontSize: textHero?.styleData?.titleSize?.styleContent || "1rem",
          }}
        >
          {textHero?.content ||
            "Descubre el confort y la elegancia en cada una de nuestras habitaciones"}
        </p>
        <div className={styles.roomsContainer}>
          <div
            className={`${styles.roomsGrid} ${!isSliderMode ? styles.gridMode : ""}`}
          >
            {Array(isSliderMode ? itemsPerPage : 6)
              .fill(null)
              .map((_, i) => (
                <div key={i} className={styles.roomCard}>
                  <div className={styles.imageContainer} />
                  <div className={styles.roomContent}>
                    <div className={styles.roomTitle} />
                    <div className={styles.roomDescription} />
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
        <b>{titleHero?.content || "Nuestras Habitaciones"}</b>
      </h2>
      <p
        className={styles.subtitle}
        style={{
          color: textHero?.styleData?.titleColor?.styleContent || "#718096",
          fontSize: textHero?.styleData?.titleSize?.styleContent || "1rem",
        }}
      >
        {textHero?.content ||
          "Descubre el confort y la elegancia en cada una de nuestras habitaciones"}
      </p>

      <div className={styles.roomsContainer}>
        <div
          className={`${styles.roomsGrid} ${!isSliderMode ? styles.gridMode : ""}`}
        >
          {visibleRooms.map((room) => (
            <div
              key={room.id}
              className={`${styles.roomCard} ${isAnimating ? styles.fadeOut : ""}`}
              onMouseEnter={() => handleMouseEnter(room.id)}
              onMouseLeave={() => handleMouseLeave(room.id)}
            >
              <div className={styles.imageContainer}>
                <img
                  src={
                    room.photos[activeImageIndices[room.id] || 0]?.url ||
                    room.photos[0]?.url
                  }
                  alt={room.title}
                  className={styles.roomImage}
                />
                {room.photos.length > 1 && (
                  <div className={styles.imageCount}>
                    {`${(activeImageIndices[room.id] || 0) + 1}/${room.photos.length}`}
                  </div>
                )}
              </div>

              <div className={styles.roomContent}>
                <h3 className={styles.roomTitle}>{room.title}</h3>
                <p className={styles.roomDescription}>{room.descripcion}</p>

                <div className={styles.roomDetails}>
                  <div className={styles.capacity}>
                    <span>
                      <i className={styles.icon}>👤</i> {room.adults} adultos
                    </span>
                    {room.children > 0 && (
                      <span>
                        <i className={styles.icon}>👶</i> {room.children} niños
                      </span>
                    )}
                  </div>

                  <div className={styles.size}>
                    <i className={styles.icon}>📏</i>
                    {room.room_size} {room.room_size_units}
                  </div>
                </div>

                <div className={styles.amenities}>
                  {parseAmenities(room.json_amenities)
                    .slice(0, 5)
                    .map((amenity) => (
                      <span key={amenity.id} className={styles.amenity}>
                        <i className={styles.icon}>✓</i>
                        {amenity.label}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {isSliderMode && totalPages > 1 && (
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

export default RoomsPxsol1;
