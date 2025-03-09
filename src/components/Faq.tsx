import { FunctionComponent } from "react";

export const Faq: FunctionComponent = ()=>{

    return(
        <section className="faq" id="faq">
            <div className="container">
                <p className="section-subtitle">Resolvemos tus dudas en un clic</p>
            
                <h2 className="h3 section-title">Algunas de las preguntas mas frecuentes</h2>
                <div className="grid-wrapper">
                    <ul className="faq-list">
                        <li>
                            <h3 className="h4 card-title">¿Qué diferencia el plan gratuito de los planes pagos?</h3>
                            <p className="section-text">
                            Etiam amet mauris suscipit in odio integer congue metus vitae arcu mollis blandit ultrice ligula
                            egestas and magna
                            suscipit lectus magna suscipit luctus blandit vitae
                            </p>
                        </li>
                        <li>
                            <h3 className="h4 card-title">¿Puedo migrar un sitio existente a esta plataforma?</h3>
                            <p className="section-text">
                            An enim nullam tempor sapien gravida a donec ipsum enim an porta justo integer at velna vitae auctor
                            integer congue undo
                            magna at pretium purus pretium
                            </p>
                        </li>
                        <li>
                            <h3 className="h4 card-title">¿Qué tan difícil es integrar widgets inteligentes o funcionalidades extra?</h3>

                            <ul className="faq-item-list">
                                <li>
                                    <p className="section-text">
                                    Fringilla risus, luctus mauris orci auctor purus ligula euismod pretium purus pretium rutrum
                                    tempor sapien
                                    </p>
                                </li>
                                <li>
                                    <p className="section-text">
                                    Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien undo pretium a purus
                                    </p>
                                </li>
                            </ul>
                        </li>
                    </ul>
            
                    <ul className="faq-list">
                        <li>
                            <h3 className="h4 card-title">¿Cómo garantiza la plataforma que mi sitio sea rápido y seguro?</h3>
                            <p className="section-text">
                            Cubilia laoreet augue egestas and luctus donec curabite diam vitae dapibus libero and quisque gravida
                            donec and neque.
                            Blandit justo aliquam molestie nunc sapien
                            </p>
                        </li>
                        <li>
                            <h3 className="h4 card-title">¿Qué soporte ofrecen en caso de problemas?</h3>
                            <p className="section-text">
                            Etiam amet mauris suscipit sit amet in odio. Integer congue leo metus. Vitae arcu mollis blandit
                            ultrice ligula
                            </p>
                            <p className="section-text">
                            An enim nullam tempor sapien gravida donec congue leo metus. Vitae arcu mollis blandit integer at
                            velna
                            </p>
                        </li>
                        <li>
                            <h3 className="h4 card-title">¿Los planes pagos incluyen actualizaciones futuras o costos adicionales?</h3>
                            <ul className="faq-item-list">
                                <li>
                                    <p className="section-text">
                                    Fringilla risus, luctus mauris orci auctor purus
                                    </p>
                                </li>
                                <li>
                                    <p className="section-text">
                                    Quaerat sodales sapien euismod blandit purus and ipsum primis in cubilia laoreet augue luctus
                                    </p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <p className="faq-bottom-link">
                    Tienes otra pregunta? 
                    <br />
                    <a href="#">Haz tu pregunta aqui</a>
                </p>
            </div>
        </section>
    )
}

export default Faq;