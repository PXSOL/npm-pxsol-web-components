import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "./HeroSlider1.module.css";
import "../reset.css";
export const HeroSlider1 = (props) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46, _47, _48, _49, _50, _51, _52, _53, _54, _55, _56, _57, _58, _59;
    const [currentSlide, setCurrentSlide] = useState(0);
    // Construir array de slides desde las props individuales
    const slides = [
        {
            image: ((_a = props.Image1) === null || _a === void 0 ? void 0 : _a.imageSrc) ||
                "https://i.postimg.cc/D0c2FLPM/hero-banner.jpg",
            imageFilter: ((_d = (_c = (_b = props.Image1) === null || _b === void 0 ? void 0 : _b.styleData) === null || _c === void 0 ? void 0 : _c.filterImage) === null || _d === void 0 ? void 0 : _d.styleContent) || "",
            title: ((_e = props.Title1) === null || _e === void 0 ? void 0 : _e.content) || "Slide 1 Title",
            titleColor: ((_h = (_g = (_f = props.Title1) === null || _f === void 0 ? void 0 : _f.styleData) === null || _g === void 0 ? void 0 : _g.titleColor) === null || _h === void 0 ? void 0 : _h.styleContent) || "#fff",
            titleSize: ((_l = (_k = (_j = props.Title1) === null || _j === void 0 ? void 0 : _j.styleData) === null || _k === void 0 ? void 0 : _k.titleSize) === null || _l === void 0 ? void 0 : _l.styleContent) || "3.5rem",
            description: ((_m = props.Description1) === null || _m === void 0 ? void 0 : _m.content) || "Slide 1 description",
            descriptionColor: ((_q = (_p = (_o = props.Description1) === null || _o === void 0 ? void 0 : _o.styleData) === null || _p === void 0 ? void 0 : _p.titleColor) === null || _q === void 0 ? void 0 : _q.styleContent) || "#fff",
            descriptionSize: ((_t = (_s = (_r = props.Description1) === null || _r === void 0 ? void 0 : _r.styleData) === null || _s === void 0 ? void 0 : _s.titleSize) === null || _t === void 0 ? void 0 : _t.styleContent) || "1.2rem",
        },
        {
            image: ((_u = props.Image2) === null || _u === void 0 ? void 0 : _u.imageSrc) ||
                "https://i.postimg.cc/7YQK2Jvf/hero-banner-2.jpg",
            imageFilter: ((_x = (_w = (_v = props.Image2) === null || _v === void 0 ? void 0 : _v.styleData) === null || _w === void 0 ? void 0 : _w.filterImage) === null || _x === void 0 ? void 0 : _x.styleContent) || "",
            title: ((_y = props.Title2) === null || _y === void 0 ? void 0 : _y.content) || "Slide 2 Title",
            titleColor: ((_1 = (_0 = (_z = props.Title2) === null || _z === void 0 ? void 0 : _z.styleData) === null || _0 === void 0 ? void 0 : _0.titleColor) === null || _1 === void 0 ? void 0 : _1.styleContent) || "#fff",
            titleSize: ((_4 = (_3 = (_2 = props.Title2) === null || _2 === void 0 ? void 0 : _2.styleData) === null || _3 === void 0 ? void 0 : _3.titleSize) === null || _4 === void 0 ? void 0 : _4.styleContent) || "3.5rem",
            description: ((_5 = props.Description2) === null || _5 === void 0 ? void 0 : _5.content) || "Slide 2 description",
            descriptionColor: ((_8 = (_7 = (_6 = props.Description2) === null || _6 === void 0 ? void 0 : _6.styleData) === null || _7 === void 0 ? void 0 : _7.titleColor) === null || _8 === void 0 ? void 0 : _8.styleContent) || "#fff",
            descriptionSize: ((_11 = (_10 = (_9 = props.Description2) === null || _9 === void 0 ? void 0 : _9.styleData) === null || _10 === void 0 ? void 0 : _10.titleSize) === null || _11 === void 0 ? void 0 : _11.styleContent) || "1.2rem",
        },
        {
            image: ((_12 = props.Image3) === null || _12 === void 0 ? void 0 : _12.imageSrc) ||
                "https://i.postimg.cc/9FKZnHPT/hero-banner-3.jpg",
            imageFilter: ((_15 = (_14 = (_13 = props.Image3) === null || _13 === void 0 ? void 0 : _13.styleData) === null || _14 === void 0 ? void 0 : _14.filterImage) === null || _15 === void 0 ? void 0 : _15.styleContent) || "",
            title: ((_16 = props.Title3) === null || _16 === void 0 ? void 0 : _16.content) || "Slide 3 Title",
            titleColor: ((_19 = (_18 = (_17 = props.Title3) === null || _17 === void 0 ? void 0 : _17.styleData) === null || _18 === void 0 ? void 0 : _18.titleColor) === null || _19 === void 0 ? void 0 : _19.styleContent) || "#fff",
            titleSize: ((_22 = (_21 = (_20 = props.Title3) === null || _20 === void 0 ? void 0 : _20.styleData) === null || _21 === void 0 ? void 0 : _21.titleSize) === null || _22 === void 0 ? void 0 : _22.styleContent) || "3.5rem",
            description: ((_23 = props.Description3) === null || _23 === void 0 ? void 0 : _23.content) || "Slide 3 description",
            descriptionColor: ((_26 = (_25 = (_24 = props.Description3) === null || _24 === void 0 ? void 0 : _24.styleData) === null || _25 === void 0 ? void 0 : _25.titleColor) === null || _26 === void 0 ? void 0 : _26.styleContent) || "#fff",
            descriptionSize: ((_29 = (_28 = (_27 = props.Description3) === null || _27 === void 0 ? void 0 : _27.styleData) === null || _28 === void 0 ? void 0 : _28.titleSize) === null || _29 === void 0 ? void 0 : _29.styleContent) || "1.2rem",
        },
        {
            image: ((_30 = props.Image4) === null || _30 === void 0 ? void 0 : _30.imageSrc) ||
                "https://i.postimg.cc/D0c2FLPM/hero-banner.jpg",
            imageFilter: ((_33 = (_32 = (_31 = props.Image4) === null || _31 === void 0 ? void 0 : _31.styleData) === null || _32 === void 0 ? void 0 : _32.filterImage) === null || _33 === void 0 ? void 0 : _33.styleContent) || "",
            title: ((_34 = props.Title4) === null || _34 === void 0 ? void 0 : _34.content) || "Slide 4 Title",
            titleColor: ((_37 = (_36 = (_35 = props.Title4) === null || _35 === void 0 ? void 0 : _35.styleData) === null || _36 === void 0 ? void 0 : _36.titleColor) === null || _37 === void 0 ? void 0 : _37.styleContent) || "#fff",
            titleSize: ((_40 = (_39 = (_38 = props.Title4) === null || _38 === void 0 ? void 0 : _38.styleData) === null || _39 === void 0 ? void 0 : _39.titleSize) === null || _40 === void 0 ? void 0 : _40.styleContent) || "3.5rem",
            description: ((_41 = props.Description4) === null || _41 === void 0 ? void 0 : _41.content) || "Slide 4 description",
            descriptionColor: ((_44 = (_43 = (_42 = props.Description4) === null || _42 === void 0 ? void 0 : _42.styleData) === null || _43 === void 0 ? void 0 : _43.titleColor) === null || _44 === void 0 ? void 0 : _44.styleContent) || "#fff",
            descriptionSize: ((_47 = (_46 = (_45 = props.Description4) === null || _45 === void 0 ? void 0 : _45.styleData) === null || _46 === void 0 ? void 0 : _46.titleSize) === null || _47 === void 0 ? void 0 : _47.styleContent) || "1.2rem",
        },
    ];
    // Auto-slide cada 5 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);
    // Funciones de navegación
    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, [slides.length]);
    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }, [slides.length]);
    const goToSlide = useCallback((index) => {
        setCurrentSlide(index);
    }, []);
    // Estilos de la sección
    const sectionStyles = {
        backgroundColor: ((_50 = (_49 = (_48 = props.Section) === null || _48 === void 0 ? void 0 : _48.styleData) === null || _49 === void 0 ? void 0 : _49.backgroundColor) === null || _50 === void 0 ? void 0 : _50.styleContent) || "#000",
        margin: ((_53 = (_52 = (_51 = props.Section) === null || _51 === void 0 ? void 0 : _51.styleData) === null || _52 === void 0 ? void 0 : _52.margin) === null || _53 === void 0 ? void 0 : _53.styleContent) || "0px",
        padding: ((_56 = (_55 = (_54 = props.Section) === null || _54 === void 0 ? void 0 : _54.styleData) === null || _55 === void 0 ? void 0 : _55.padding) === null || _56 === void 0 ? void 0 : _56.styleContent) || "0px",
        borderRadius: ((_59 = (_58 = (_57 = props.Section) === null || _57 === void 0 ? void 0 : _57.styleData) === null || _58 === void 0 ? void 0 : _58.borderRadius) === null || _59 === void 0 ? void 0 : _59.styleContent) || "0px",
    };
    const currentSlideData = slides[currentSlide];
    return (_jsx("section", { className: styles.heroSlider, style: sectionStyles, children: _jsxs("div", { className: styles.sliderContainer, children: [_jsx("div", { className: styles.imageSlider, children: slides.map((slide, index) => (_jsx("div", { className: `${styles.slide} ${index === currentSlide ? styles.active : ""}`, children: _jsx(Image, { priority: index === 0, src: slide.image, alt: `Slide ${index + 1}`, fill: true, className: styles.sliderImage, style: {
                                objectFit: "cover",
                                filter: slide.imageFilter,
                            }, sizes: "100vw", placeholder: "blur", blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==" }) }, index))) }), _jsx("button", { className: `${styles.sliderArrow} ${styles.prevArrow}`, onClick: prevSlide, "aria-label": "Previous slide", children: _jsx("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { d: "M15 18L9 12L15 6", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }), _jsx("button", { className: `${styles.sliderArrow} ${styles.nextArrow}`, onClick: nextSlide, "aria-label": "Next slide", children: _jsx("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { d: "M9 18L15 12L9 6", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }), _jsx("div", { className: styles.contentOverlay, children: _jsxs("div", { className: styles.contentContainer, children: [_jsx("h1", { className: styles.heroTitle, style: {
                                    color: currentSlideData.titleColor,
                                    fontSize: currentSlideData.titleSize,
                                }, children: currentSlideData.title }), _jsx("p", { className: styles.heroText, style: {
                                    color: currentSlideData.descriptionColor,
                                    fontSize: currentSlideData.descriptionSize,
                                }, children: currentSlideData.description })] }) }), _jsx("div", { className: styles.sliderDots, children: slides.map((_, index) => (_jsx("button", { className: `${styles.dot} ${index === currentSlide ? styles.activeDot : ""}`, onClick: () => goToSlide(index), "aria-label": `Go to slide ${index + 1}` }, index))) })] }) }));
};
export default HeroSlider1;
