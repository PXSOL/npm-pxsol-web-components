"use client"

import { FunctionComponent, useEffect, useRef, useState } from "react";

export const Cta: FunctionComponent = ()=>{
      const [isVisible, setIsVisible] = useState(false);
      const videoRef1 = useRef<HTMLVideoElement>(null);
    
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
    
        const videoElements = [videoRef1.current];
        videoElements.forEach((video) => video && observer.observe(video));
    
        return () => {
          videoElements.forEach((video) => video && observer.unobserve(video));
        };
      }, []);

      useEffect(() => {
        if (isVisible) {
          videoRef1.current?.play();
        } else {
          videoRef1.current?.pause();
        }
      }, [isVisible]);

    return(
        <section className="cta">
            <video ref={videoRef1} loop muted className="video-background" src="/video-cta.mp4"></video>
            <div className="container">
                <div className="cta-card">
                    <h2 className="cta-title">Empieza y descubre todo lo que puedes crear.</h2>

                    <div className="cta-button-wrapper">
                        <button className="btn btn-primary">Comenzar Ahora</button>

                        <a href="#faq">Ver las preguntas frecuentes</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cta;