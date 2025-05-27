import React from "react";
import styles from "./GalleryTravel1.module.css";
import Image from "next/image";

export const GalleryTravel1 = () => {
  return (
    <section className={styles.gallery} id="gallery">
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
