import HeroTravel1 from "./components/HeroTravel1/HeroTravel1";
import CtaTravel1 from "./components/CtaTravel1/CtaTravel1";
import EngineFormTravel1 from "./components/EngineFormTravel1/EngineFormTravel1";
import FooterTravel1 from "./components/FooterTravel1/FooterTravel1";
import GalleryTravel1 from "./components/GalleryTravel1/GalleryTravel1";
import HeaderTravel1 from "./components/HeaderTravel1/HeaderTravel1";
import PromosTravel1 from "./components/PromosTravel1/PromosTravel1";
import RoomsTravel1 from "./components/RoomsTravel1/RoomsTravel1";
export const componentsList = [
    // Beats 3 - coponents
    {
        name: "Hero - travel 1",
        component: HeroTravel1,
        props: {
            titleHero: {
                name: "Title",
                type: "title",
                dataType: "flatText",
                content: "Hospedate en Hotel Demaz",
                styleData: {
                    titleColor: {
                        name: "Title 1 color",
                        styleType: "color",
                        styleContent: "#fff",
                    },
                    titleSize: {
                        name: "Size title",
                        styleType: "fontSize",
                        styleContent: "70px",
                    }
                }
            },
            textHero: {
                name: "Text",
                type: "textParagraph",
                dataType: "textParagraph",
                content: "En Hotel Demo, combinamos confort, estilo y atención personalizada para que vivas una estadía inolvidable. Disfrutá de nuestras habitaciones, desayuno casero y una ubicación privilegiada. Bienvenido al descanso que merecés",
                styleData: {
                    titleColor: {
                        name: "Text color",
                        styleType: "color",
                        styleContent: "#fff",
                    },
                    titleSize: {
                        name: "Size title",
                        styleType: "fontSize",
                        styleContent: "12px",
                    }
                }
            },
            ctaButtonHero: {
                name: "Cta button",
                type: "ctaButton",
                dataType: "ctaButton",
                content: {
                    textButton: "Offer",
                    link: "https://your/link/here",
                },
                styleData: {
                    textColor: {
                        name: "Cta color",
                        styleType: "color",
                        styleContent: "#fff",
                    },
                    backgroundColor: {
                        name: "Button background",
                        styleType: "color",
                        styleContent: "#fff",
                    },
                    buttonTextSize: {
                        name: "Button font size",
                        styleType: "fontSize",
                        styleContent: "14px",
                    }
                }
            },
        }
    },
    {
        name: "Cta - travel 1",
        component: CtaTravel1,
        props: {}
    },
    {
        name: "Engine Form - travel 1",
        component: EngineFormTravel1,
        props: {}
    },
    {
        name: "Footer - travel 1",
        component: FooterTravel1,
        props: {}
    },
    {
        name: "Gallery - travel 1",
        component: GalleryTravel1,
        props: {}
    },
    {
        name: "Promos - travel 1",
        component: PromosTravel1,
        props: {}
    },
    {
        name: "Header - travel 1",
        component: HeaderTravel1,
        props: {}
    },
    {
        name: "Rooms - travel 1",
        component: RoomsTravel1,
        props: {}
    },
];
