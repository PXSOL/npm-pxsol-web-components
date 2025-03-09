import Image from "next/image";
import { FunctionComponent } from "react";

export const Service: FunctionComponent = ()=>{

    return(
          <section className="service" id="service">
              <div className="container">
                  <h2 className="h2 section-title">La plataforma que lo hace todo (y más).</h2>
                  <p className="section-text">
                  Nuestra herramienta no es solo para crear páginas web; es tu compañera en el crecimiento digital. Con funciones pensadas para empresas modernas, gestionas contenido, usuarios y productos con facilidad, mientras aprovechas integraciones avanzadas.
                  </p>
                  <ul className="service-list">
                    <li>
                      <div className="service-card">
                        <div className="card-icon">
                          <Image src={"./icon1.svg"} alt="icon" width="200" height="200"></Image>
                        </div>
                        <h3 className="h4 card-title">
                          Constructor intuitivo:
                        </h3>
                        <p className="card-text">
                          Diseña sitios únicos con herramientas simples pero potentes.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="service-card">
                        <div className="card-icon">
                          <Image src={"./icon2.svg"} alt="icon" width="200" height="200"></Image>
                        </div>
                        <h3 className="h4 card-title">
                          Gestión avanzada:
                        </h3>
                        <p className="card-text">
                          Agrega contenido, productos y más desde un panel centralizado.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="service-card">
                        <div className="card-icon">
                        <Image src={"./icon3.svg"} alt="icon" width="200" height="200"></Image>
                        </div>
                        <h3 className="h4 card-title">
                          Integraciones inteligentes:
                        </h3>
                        <p className="card-text">
                          Widgets con IA y envíos de correos que potencian tu alcance.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="service-card">
                        <div className="card-icon">
                          <Image src={"./icon4.svg"} alt="icon" width="200" height="200"></Image>
                        </div>
                        <h3 className="h4 card-title">
                          Planes escalables:
                        </h3>
                        <p className="card-text">
                          Desde gratis hasta premium, elige lo que mejor se adapte a tu proyecto.
                        </p>
                      </div>
                    </li>
                  </ul>
            </div>
        </section>
    )
}

export default Service