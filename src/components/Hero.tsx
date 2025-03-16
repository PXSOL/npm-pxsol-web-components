"use client"
import Link from "next/link";
import { FunctionComponent, useEffect, useRef, useState } from "react";
interface CustomCSSProperties extends React.CSSProperties {
    '--i'?: number;
}

export const Hero: FunctionComponent = (props: any)=>{

    const [states, setStates] = useState<string[]>(["", "", ""]);
    const [occVideo, setOccVideo] = useState<string>("");

    const videoRef = useRef<HTMLVideoElement | null>(null);
  
    useEffect(() => {
      const handleTimeUpdate = () => {
        const video = videoRef.current;
        if (!video) return;
  
        const currentTime = video.currentTime;
        const newStates = [...states];
  
        if (currentTime >= 4 && currentTime < 8 && newStates[0] === "") {
          newStates[0] = "visible-one-state-style";
        }
        if (currentTime >= 8 && currentTime < 12 && newStates[1] === "") {
          newStates[1] = "visible-one-state-style";
        }
        if (currentTime >= 12 && currentTime < 16 && newStates[2] === "") {
          newStates[2] = "visible-one-state-style";
        }
  
        setStates(newStates);
      };
  
      // Función que maneja el final del video
      const handleVideoEnd = () => {
        setStates((prevStates) =>
          prevStates.map((state) => `${state} last-order-visibility`)
        );
        setOccVideo("end-video-hidden")
      };
  
      const video = videoRef.current;
      if (video) {
        video.addEventListener("timeupdate", handleTimeUpdate);
        video.addEventListener("ended", handleVideoEnd);
      }
  
      // Cleanup para evitar fugas de memoria
      return () => {
        if (video) {
          video.removeEventListener("timeupdate", handleTimeUpdate);
          video.removeEventListener("ended", handleVideoEnd);
        }
      };
    }, [states]);

    return(
        <section className="hero" id="hero">
            <div className="container">
                <div className="hero-content">
                    <h1 className="h1 hero-title">
                      .{props.titleHero?.content || "Título por defecto"}
                    </h1>

                    <p className="hero-text">
                        {props.subtitleHero?.content || "Lorem ipsum dolor sit amet consectetur"}
                    </p>

                    <p className="hero-text">
                        {props.groupTextHero?.content.map((item: any, index: number)=>{
                            return(
                                <span key={index}>
                                    {item.content}
                                </span>
                            )
                        })}
                    </p>

                    <Link href={""} className="btn btn-primary">
                        Ver mas
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                    </Link>

                    <Link href={props.ctaButtonHero?.content.link || "Texto Boton"} className="button">
                        <div className="bg"></div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 342 208"
                            height="208"
                            width="342"
                            className="splash"
                        >
                            <path
                            strokeLinecap="round"
                            strokeWidth="3"
                            d="M54.1054 99.7837C54.1054 99.7837 40.0984 90.7874 26.6893 97.6362C13.2802 104.485 1.5 97.6362 1.5 97.6362"
                            ></path>
                            <path
                            strokeLinecap="round"
                            strokeWidth="3"
                            d="M285.273 99.7841C285.273 99.7841 299.28 90.7879 312.689 97.6367C326.098 104.486 340.105 95.4893 340.105 95.4893"
                            ></path>
                            <path
                            strokeLinecap="round"
                            strokeWidth="3"
                            strokeOpacity="0.3"
                            d="M281.133 64.9917C281.133 64.9917 287.96 49.8089 302.934 48.2295C317.908 46.6501 319.712 36.5272 319.712 36.5272"
                            ></path>
                            <path
                            strokeLinecap="round"
                            strokeWidth="3"
                            strokeOpacity="0.3"
                            d="M281.133 138.984C281.133 138.984 287.96 154.167 302.934 155.746C317.908 157.326 319.712 167.449 319.712 167.449"
                            ></path>
                            <path
                            strokeLinecap="round"
                            strokeWidth="3"
                            d="M230.578 57.4476C230.578 57.4476 225.785 41.5051 236.061 30.4998C246.337 19.4945 244.686 12.9998 244.686 12.9998"
                            ></path>
                            <path
                            strokeLinecap="round"
                            strokeWidth="3"
                            d="M230.578 150.528C230.578 150.528 225.785 166.471 236.061 177.476C246.337 188.481 244.686 194.976 244.686 194.976"
                            ></path>
                            <path
                            strokeLinecap="round"
                            strokeWidth="3"
                            strokeOpacity="0.3"
                            d="M170.392 57.0278C170.392 57.0278 173.89 42.1322 169.571 29.54C165.252 16.9478 168.751 2.05227 168.751 2.05227"
                            ></path>
                            <path
                            strokeLinecap="round"
                            strokeWidth="3"
                            strokeOpacity="0.3"
                            d="M170.392 150.948C170.392 150.948 173.89 165.844 169.571 178.436C165.252 191.028 168.751 205.924 168.751 205.924"
                            ></path>
                            <path
                            strokeLinecap="round"
                            strokeWidth="3"
                            d="M112.609 57.4476C112.609 57.4476 117.401 41.5051 107.125 30.4998C96.8492 19.4945 98.5 12.9998 98.5 12.9998"
                            ></path>
                            <path
                            strokeLinecap="round"
                            strokeWidth="3"
                            d="M112.609 150.528C112.609 150.528 117.401 166.471 107.125 177.476C96.8492 188.481 98.5 194.976 98.5 194.976"
                            ></path>
                            <path
                            strokeLinecap="round"
                            strokeWidth="3"
                            strokeOpacity="0.3"
                            d="M62.2941 64.9917C62.2941 64.9917 55.4671 49.8089 40.4932 48.2295C25.5194 46.6501 23.7159 36.5272 23.7159 36.5272"
                            ></path>
                            <path
                            strokeLinecap="round"
                            strokeWidth="3"
                            strokeOpacity="0.3"
                            d="M62.2941 145.984C62.2941 145.984 55.4671 161.167 40.4932 162.746C25.5194 164.326 23.7159 174.449 23.7159 174.449"
                            ></path>
                        </svg>

                        <div className="wrap">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 221 42"
                            height="42"
                            width="221"
                            className="path"
                            >
                            <path
                                strokeLinecap="round"
                                strokeWidth="3"
                                d="M182.674 2H203C211.837 2 219 9.16344 219 18V24C219 32.8366 211.837 40 203 40H18C9.16345 40 2 32.8366 2 24V18C2 9.16344 9.16344 2 18 2H47.8855"
                            ></path>
                            </svg>

                            <div className="outline"></div>
                            <div className="content">
                            <span className="char state-1">
                                {props.ctaButtonHero?.content.textButton || "Texto Boton"}
                            </span>

                            <div className="icon">
                                <div></div>
                            </div>
                            </div>
                        </div>
                    </Link>
                    

                </div>
            
                <figure className="hero-banner">
                    <video ref={videoRef} autoPlay loop muted className={`video-item-hero `} src={props.videoHero?.videoSrc}></video>

                    {/* <div className={`item-blur-video-hero blur-video-item1 ${states[0]}`}>
                        <h4>
                            <b>
                                Moderno y Flexible
                            </b>
                        </h4>
                        <p>
                            Crea sitios web que se adaptan a tus necesidades, desde blogs hasta e-commerce.
                        </p>
                    </div>

                    <div className={`item-blur-video-hero blur-video-item2 ${states[1]}`}>
                        <h4>
                            <b>
                                Autogestión Fácil
                            </b>
                        </h4>
                        <p>
                            Administra contenido, usuarios y productos como un pro, sin complicaciones.
                        </p>
                    </div>

                    <div className={`item-blur-video-hero blur-video-item3 ${states[2]}`}>
                        <h4>
                            <b>
                                Todo Conectado
                            </b>
                        </h4>
                        <p>
                            Desde envío de mails hasta widgets inteligentes, la integración es parte del paquete.
                        </p>
                    </div> */}

                </figure>
            </div>
        </section>
    )
}

export default Hero;