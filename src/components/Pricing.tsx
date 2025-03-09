"use client"

import { FunctionComponent, useEffect, useRef, useState } from "react";

export const Pricing: FunctionComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    const videoElements = [videoRef1.current, videoRef2.current];
    videoElements.forEach((video) => video && observer.observe(video));

    return () => {
      videoElements.forEach((video) => video && observer.unobserve(video));
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      videoRef1.current?.play();
      videoRef2.current?.play();
    } else {
      videoRef1.current?.pause();
      videoRef2.current?.pause();
    }
  }, [isVisible]);

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="pricing-content">
          <p className="section-subtitle">Conoce nuestro constructor</p>
          <h2 className="h3 section-title">Elippser Builder-1</h2>
          <p className="section-text">
            Mucho más que un simple constructor de sitios web. Te ofrece la
            libertad de diseñar, gestionar y expandir tus proyectos digitales
            con facilidad. Desde blogs y e-commerce hasta sistemas completos
            con usuarios y productos, esta plataforma tiene todo lo que
            necesitas para llevar tu idea al siguiente nivel. ¿Lo mejor?
            Funciona con tecnología moderna, es fácil de usar y está diseñada
            para crecer contigo.
          </p>
          <button className="btn btn-primary">Comenzar Ahora</button>
        </div>
        <figure className="pricing-banner">
          <video
            ref={videoRef1}
            className="first-video-view"
            loop
            muted
            src="/present-builder.mp4"
          ></video>
          <video
            ref={videoRef2}
            className="back-blur-video-noview"
            loop
            muted
            src="/present-builder.mp4"
          ></video>
        </figure>
      </div>
    </section>
  );
};

export default Pricing;
