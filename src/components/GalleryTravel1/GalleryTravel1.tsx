import React, { useMemo } from "react";
import styles from "./GalleryTravel1.module.css";
import "../reset.css";
import Image from "next/image";

interface GalleryProps {
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

export const GalleryTravel1: React.FC<GalleryProps> = (props) => {
  const sectionStyles = props.Section;

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
    <section
      className={styles.gallery}
      id="gallery"
      style={sectionContainerStyles}
    >
      <div className={styles.container}>
        <p className={styles.sectionSubtitle}>Photo Gallery</p>
        <h2 className={styles.sectionTitle}>Photos from travellers</h2>
        <p className={styles.sectionText}>
          Imagine a world painted with vibrant hues, captured not by
          professional lenses, but by the eyes of passionate explorers. Browse
          through the gallery and let your imagination take flight
        </p>
        <ul className={styles.galleryList}>
          <li className={styles.galleryItem}>
            <figure className={styles.galleryImage}>
              <Image
                src="https://i.postimg.cc/6qfpc2mw/gallery-1.jpg"
                alt="gallery image"
                width={100}
                height={100}
              />
            </figure>
          </li>
          <li className={styles.galleryItem}>
            <figure className={styles.galleryImage}>
              <Image
                src="https://i.postimg.cc/yY7ddjDN/gallery-2.jpg"
                alt="gallery image"
                width={100}
                height={100}
              />
            </figure>
          </li>
          <li className={styles.galleryItem}>
            <figure className={styles.galleryImage}>
              <Image
                src="https://i.postimg.cc/PrKq8DDQ/gallery-3.jpg"
                alt="gallery image"
                width={100}
                height={100}
              />
            </figure>
          </li>
          <li className={styles.galleryItem}>
            <figure className={styles.galleryImage}>
              <Image
                src="https://i.postimg.cc/13j5vZJg/gallery-4.jpg"
                alt="gallery image"
                width={100}
                height={100}
              />
            </figure>
          </li>
          <li className={styles.galleryItem}>
            <figure className={styles.galleryImage}>
              <Image
                src="https://i.postimg.cc/XvBNhDzs/gallery-5.jpg"
                alt="gallery image"
                width={100}
                height={100}
              />
            </figure>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default GalleryTravel1;
