import React from "react";
import styles from "./PromosTravel1.module.css";
import Image from "next/image";

export const PromosTravel1 = () => {
  return (
    <section className={styles.package} id="package">
      <div className={styles.container}>
        <p className={styles.sectionSubtitle}>Popular Packages</p>
        <h2 className={styles.sectionTitle}>Checkout Our Packages</h2>
        <p className={styles.sectionText}>
          See What Everyones Talking About! Dive into our collection of Popular
          Packages
        </p>

        <ul className={styles.packageList}>
          <li>
            <div className={styles.packageCard}>
              <figure className={styles.cardBanner}>
                <Image
                  src="https://i.postimg.cc/kMytXrhZ/packege-1.jpg"
                  alt="Experience the great holiday on beach"
                  loading="lazy"
                  width={100}
                  height={100}
                />
              </figure>

              <div className={styles.cardContent}>
                <h3 className={styles.h3CardTitle}>
                  Experience the great holiday on beach
                </h3>

                <p className={styles.cardText}>
                  Turquoise waters, golden sands, and pure relaxation.
                  Experience the great beach holiday of your dreams
                </p>

                <ul className={styles.cardMetaList}>
                  <li className={styles.cardMetaItem}>
                    <div className={styles.metaBox}>
                      <b className={styles.time}></b>

                      <p className={styles.text}>7D / 6N</p>
                    </div>
                  </li>

                  <li className={styles.cardMetaItem}>
                    <div className={styles.metaBox}>
                      <b className={styles.people}></b>

                      <p className={styles.text}>Max People: 10</p>
                    </div>
                  </li>

                  <li className={styles.cardMetaItem}>
                    <div className={styles.metaBox}>
                      <b className={styles.location}></b>

                      <p className={styles.text}>Malaysia</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className={styles.cardPrice}>
                <div className={styles.wrapper}>
                  <p className={styles.reviews}>(25 Reviews)</p>

                  <div className={styles.cardRating}>
                    <b className={styles.star}>★</b>
                    <b className={styles.star}>★</b>
                    <b className={styles.star}>★</b>
                    <b className={styles.star}>★</b>
                    <b className={styles.star}>★</b>
                  </div>
                </div>

                <p className={styles.price}>
                  $1025 <span>/per person</span>
                </p>
                <button className={styles.btnSecondary}>Book Now</button>
              </div>
            </div>
          </li>

          <li>
            <div className={styles.packageCard}>
              <figure className={styles.cardBanner}>
                <Image
                  src="https://i.postimg.cc/5ySDr51P/packege-2.jpg"
                  alt="Summer Holiday to the Oxolotan River"
                  loading="lazy"
                  width={100}
                  height={100}
                />
              </figure>

              <div className={styles.cardContent}>
                <h3 className={styles.h3CardTitle}>
                  Summer Holiday to the Oxolotan River
                </h3>

                <p className={styles.cardText}>
                  Discover emerald waters, lush rainforests, and the vibrant
                  life of the Oxolotan River
                </p>

                <ul className={styles.cardMetaList}>
                  <li className={styles.cardMetaItem}>
                    <div className={styles.metaBox}>
                      <b className={styles.time}></b>

                      <p className={styles.text}>7D / 6N</p>
                    </div>
                  </li>

                  <li className={styles.cardMetaItem}>
                    <div className={styles.metaBox}>
                      <b className={styles.people}></b>

                      <p className={styles.text}>Max People: 10</p>
                    </div>
                  </li>

                  <li className={styles.cardMetaItem}>
                    <div className={styles.metaBox}>
                      <b className={styles.location}></b>

                      <p className={styles.text}>Mexico</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className={styles.cardPrice}>
                <div className={styles.wrapper}>
                  <p className={styles.reviews}>(20 Reviews)</p>

                  <div className={styles.cardRating}>
                    <b className={styles.star}>★</b>
                    <b className={styles.star}>★</b>
                    <b className={styles.star}>★</b>
                    <b className={styles.star}>★</b>
                    <b className={styles.star}>★</b>
                  </div>
                </div>

                <p className={styles.price}>
                  $1325<span>/per person</span>
                </p>
                <button className={styles.btnSecondary}>Book Now</button>
              </div>
            </div>
          </li>

          <li>
            <div className={styles.packageCard}>
              <figure className={styles.cardBanner}>
                <Image
                  src="https://i.postimg.cc/Y9WJkKNy/packege-3.jpg"
                  alt="Santorini Island's Weekend Vacation"
                  loading="lazy"
                  width={100}
                  height={100}
                />
              </figure>

              <div className={styles.cardContent}>
                <h3 className={styles.h3CardTitle}>
                  Santorini Islands Weekend Vacation
                </h3>

                <p className={styles.cardText}>
                  Discover white-washed villages, cascading down volcanic
                  cliffs, overlooking the Aegeans endless blue
                </p>

                <ul className={styles.cardMetaList}>
                  <li className={styles.cardMetaItem}>
                    <div className={styles.metaBox}>
                      <b className={styles.time}></b>

                      <p className={styles.text}>7d / 6N</p>
                    </div>
                  </li>

                  <li className={styles.cardMetaItem}>
                    <div className={styles.metaBox}>
                      <b className={styles.people}></b>

                      <p className={styles.text}>Max People: 10</p>
                    </div>
                  </li>

                  <li className={styles.cardMetaItem}>
                    <div className={styles.metaBox}>
                      <b className={styles.location}></b>

                      <p className={styles.text}>Greece</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className={styles.cardPrice}>
                <div className={styles.wrapper}>
                  <p className={styles.reviews}>(40 Reviews)</p>

                  <div className={styles.cardRating}>
                    <b className={styles.star}>★</b>
                    <b className={styles.star}>★</b>
                    <b className={styles.star}>★</b>
                    <b className={styles.star}>★</b>
                    <b className={styles.star}>★</b>
                  </div>
                </div>

                <p className={styles.price}>
                  $2200<span>/per person</span>
                </p>
                <button className={styles.btnSecondary}>
                  View All Packages
                </button>
              </div>
            </div>
          </li>
        </ul>

        <button className={styles.btnPrimary}>View All Packages</button>
      </div>
    </section>
  );
};

export default PromosTravel1;
