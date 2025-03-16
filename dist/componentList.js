"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.componentsList = void 0;
const About_1 = require("./components/About");
const Cta_1 = require("./components/Cta");
const Hero_1 = require("./components/Hero");
const WidgetChat_1 = require("./components/WidgetChat");
const Header_1 = require("./components/Header");
exports.componentsList = [
    { name: "Header", component: Header_1.Header, props: {
            titleHero: {
                name: "Titulo",
                type: "title",
                dataType: "flatText",
                content: "Titulo de header"
            }
        }
    },
    { name: "Hero",
        component: Hero_1.Hero,
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
    { name: "About", component: About_1.About },
    { name: "Cta", component: Cta_1.Cta },
    { name: "WidgetChat", component: WidgetChat_1.WidgetChat },
];
