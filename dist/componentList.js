import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { Hero } from "./components/Hero";
import { WidgetChat } from "./components/WidgetChat";
import { Header } from "./components/Header";
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
];
