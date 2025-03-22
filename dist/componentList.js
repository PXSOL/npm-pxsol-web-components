import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { Hero } from "./components/Hero";
import { WidgetChat } from "./components/WidgetChat";
import { Header } from "./components/Header";
import HeaderBeats3 from "./components/HeaderBeats3/HeaderBeats3";
import HeroBeats3 from "./components/HeroBeats3/HeroBeats3";
import BrandsBeats3 from "./components/BrandsBeats3/BrandsBeats3";
import SpecsBeats3 from "./components/SpecsBeats3/SpecsBeats3";
import CaseBeats3 from "./components/CaseBeats3/CaseBeats3";
import OfferBeats3 from "./components/OfferBeats3/OfferBeats3";
import ProductsBeats3 from "./components/ProductsBeats3/ProductsBeats3";
import FooterBeats3 from "./components/FooterBeats3/FooterBeats3";
export const componentsList = [
    { name: "Header", component: Header, props: {
            titleHero: {
                name: "Titulo",
                type: "title",
                dataType: "flatText",
                content: "Titulo de header"
            }
        }
    },
    { name: "Hero",
        component: Hero,
        props: {
            titleHero: {
                name: "Titulo",
                type: "title",
                dataType: "flatText",
                content: "Ejemplo de titulo."
            },
            subtitleHero: {
                name: "Subtitulo",
                type: "subtitle",
                dataType: "flatText",
                content: "Tu plataforma todo en uno para construir sitios web modernos y escalables en minutos"
            },
            groupTextHero: {
                name: "Grupo de textos",
                type: "group",
                content: [
                    {
                        dataType: "flatText",
                        content: "🌟 Prueba gratis"
                    },
                    {
                        dataType: "flatText",
                        content: "🤝 Soporte personalizado"
                    },
                    {
                        dataType: "flatText",
                        content: "🚀 Integraciones con IA"
                    }
                ]
            },
            ctaButtonHero: {
                name: "Botón Cta",
                type: "ctaButton",
                content: {
                    textButton: "Comenzar",
                    link: "https://app.elippser.com/"
                }
            },
            videoHero: {
                name: "Video Hero",
                type: "videoSrc",
                videoSrc: "https://www.elippser.com/video-hero.mp4",
                typeReproduction: "backgroundStyle"
            }
        }
    },
    { name: "About", component: About },
    { name: "Cta", component: Cta },
    { name: "WidgetChat", component: WidgetChat },
    { name: "Header - Beats 3", component: HeaderBeats3 },
    { name: "Hero - Beats 3", component: HeroBeats3 },
    { name: "Brands - Beats 3", component: BrandsBeats3 },
    { name: "Specs - Beats 3", component: SpecsBeats3 },
    { name: "Case - Beats 3", component: CaseBeats3 },
    { name: "Offer - Beats 3", component: OfferBeats3 },
    { name: "Products - Beats 3", component: ProductsBeats3 },
    { name: "Footer - Beats 3", component: FooterBeats3 },
];
