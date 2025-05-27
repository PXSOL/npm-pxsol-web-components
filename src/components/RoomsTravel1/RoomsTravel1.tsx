import React from "react";
import styles from "./RoomsTravel1.module.css";
import "../reset.css";
import Image from "next/image";

export const HeroTravel1 = () => {
  return (
    <section className={styles.popular} id="destination">
      <div className={styles.container}>
        <p className={styles.sectionSubtitle}>Uncover Place</p>
        <h2 className={styles.sectionTitle}>Popular Destination</h2>
        <p className={styles.sectionText}>
          The world is a tapestry of breathtaking landscapes, vibrant cultures,
          and untold stories. Step outside your comfort zone, challenge your
          perspectives, and embrace the unknown
        </p>
        <ul className={styles.popularList}>
          <li>
            <div className={styles.popularCard}>
              <figure className={styles.cardImg}>
                <Image
                  src="https://i.postimg.cc/fRNkQ8MC/popular-1.jpg"
                  alt="San Miguel, Italy"
                  loading="lazy"
                  width={100}
                  height={100}
                />
              </figure>
              <div className={styles.cardContent}>
                <div className={styles.cardRating}>
                  <b className={styles.star}>★</b>
                  <b className={styles.star}>★</b>
                  <b className={styles.star}>★</b>
                  <b className={styles.star}>★</b>
                  <b className={styles.star}>★</b>
                </div>

                <p className={styles.cardSubtitle}>
                  <a href="#">Italy</a>
                </p>
                <h3 className={styles.h3CardTitle}>
                  <a href="#">San Miguel</a>
                </h3>
                <p className={styles.cardText}>
                  Embark in one of the islands in the Venetian Lagoon, known as
                  a place of peace and remembrance
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.popularCard}>
              <figure className={styles.cardImg}>
                <Image
                  src="https://i.postimg.cc/Nj9DZffm/popular-2.jpg"
                  alt="Burj Khalifa, Dubai"
                  loading="lazy"
                  width={100}
                  height={100}
                />
              </figure>
              <div className={styles.cardContent}>
                <div className={styles.cardRating}>
                  <b className={styles.star}>★</b>
                  <b className={styles.star}>★</b>
                  <b className={styles.star}>★</b>
                  <b className={styles.star}>★</b>
                  <b className={styles.star}>★</b>
                </div>
                <p className={styles.cardSubtitle}>
                  <a href="#">Dubai</a>
                </p>
                <h3 className={styles.h3CardTitle}>
                  <a href="#">Burj Khalifa</a>
                </h3>
                <p className={styles.cardText}>
                  Discover the iconic skyscraper in Dubai, that holds the title
                  of the worlds tallest building
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.popularCard}>
              <figure className={styles.cardImg}>
                <Image
                  src="https://i.postimg.cc/Hkwcrf6F/popular-3.jpg"
                  alt="Kyoto Temple, Japan"
                  loading="lazy"
                  width={100}
                  height={100}
                />
              </figure>
              <div className={styles.cardContent}>
                <div className={styles.cardRating}>
                  <b className={styles.star}>★</b>
                  <b className={styles.star}>★</b>
                  <b className={styles.star}>★</b>
                  <b className={styles.star}>★</b>
                  <b className={styles.star}>★</b>
                </div>
                <p className={styles.cardSubtitle}>
                  <a href="#">Japan</a>
                </p>
                <h3 className={styles.h3CardTitle}>
                  <a href="#">Kyoto Temple</a>
                </h3>
                <p className={styles.cardText}>
                  Discover the unique histories and characteristics of stunning
                  temples around Kyoto
                </p>
              </div>
            </div>
          </li>
        </ul>
        <button className={styles.btnPrimary}>More Destination</button>
      </div>
    </section>
  );
};

export default HeroTravel1;
