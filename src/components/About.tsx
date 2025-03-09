import Image from "next/image";
import { FunctionComponent } from "react";

export const About: FunctionComponent = ()=>{

    return(
        <section className="about" id="about">
            <div className="container">
                <div className="about-top">
                    <figure className="about-banner">
                        <Image src={"/about-1.jpg"}  width="500" height="500" alt="example"></Image>
                    </figure>

                    <div className="about-content">
                        <p className="section-subtitle">Diseñado para líderes digitales</p>
                        
                        <h2 className="h3 section-title">
                            Tecnología moderna para resultados reales.
                        </h2>
                        <p className="section-text">
                            Nuestra plataforma se basa en tecnologías de última generación para ofrecer velocidad, seguridad y una experiencia optimizada. Además, está diseñada para destacarte en los buscadores, ayudándote a atraer más visitantes.
                        </p>
                        <p className="section-text">
                            Desde algoritmos eficientes hasta prácticas avanzadas de SEO, hemos pensado en cada detalle para maximizar tu impacto online. Ya sea un sitio personal o una web empresarial, tendrás las herramientas necesarias para alcanzar tus objetivos con estilo y eficacia.
                        </p>
                    </div>
                </div>

                <div className="about-bottom">
                    <figure className="about-banner">
                        <Image src={"/about-2.jpg"}  width="500" height="500" alt="example"></Image>
                    </figure>

                    <div className="about-content">
                        <h3 className="h4 about-bottom-title">
                            Autogestión al alcance de tu mano.
                        </h3>

                        <p className="section-text">
                            Facilitamos que tú o tu equipo tomen el control completo de tus proyectos. Desde la edición de contenido hasta la gestión de usuarios y productos, todo está diseñado para que cualquiera pueda usarlo, sin necesidad de ser experto en tecnología.
                        </p>

                        <h3 className="h4 about-bottom-title">
                            Más moderno, más eficiente.
                        </h3>

                        <p className="section-text">
                            Comparado con otras herramientas, nuestra plataforma ofrece una experiencia más fluida gracias a su diseño moderno y funciones actualizadas. Nos enfocamos en eliminar la complejidad innecesaria.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;