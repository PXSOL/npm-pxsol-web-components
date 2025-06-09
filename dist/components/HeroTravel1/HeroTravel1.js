import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import Image from "next/image";
import styles from "./HeroTravel1.module.css";
import "../reset.css";
export const HeroTravel1 = (props) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0;
    // Accedemos a las props con los nombres correctos
    const titleHero = props.Title;
    const textHero = props.Text;
    const ctaButtonHero = props["Cta button"];
    const imageHero = props["Main image"];
    const sectionStyles = props.Section;
    const imageHeroStyles = useMemo(() => {
        var _a, _b;
        const filterString = ((_b = (_a = imageHero === null || imageHero === void 0 ? void 0 : imageHero.styleData) === null || _a === void 0 ? void 0 : _a.filterImage) === null || _b === void 0 ? void 0 : _b.styleContent) || "";
        return {
            objectFit: "cover",
            filter: filterString,
        };
    }, [(_b = (_a = imageHero === null || imageHero === void 0 ? void 0 : imageHero.styleData) === null || _a === void 0 ? void 0 : _a.filterImage) === null || _b === void 0 ? void 0 : _b.styleContent]);
    const sectionContainerStyles = useMemo(() => {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return {
            backgroundColor: ((_b = (_a = sectionStyles === null || sectionStyles === void 0 ? void 0 : sectionStyles.styleData) === null || _a === void 0 ? void 0 : _a.backgroundColor) === null || _b === void 0 ? void 0 : _b.styleContent) || "#fff",
            margin: ((_d = (_c = sectionStyles === null || sectionStyles === void 0 ? void 0 : sectionStyles.styleData) === null || _c === void 0 ? void 0 : _c.margin) === null || _d === void 0 ? void 0 : _d.styleContent) || "0px 0px 0px 0px",
            padding: ((_f = (_e = sectionStyles === null || sectionStyles === void 0 ? void 0 : sectionStyles.styleData) === null || _e === void 0 ? void 0 : _e.padding) === null || _f === void 0 ? void 0 : _f.styleContent) || "0px 0px 0px 0px",
            borderRadius: ((_h = (_g = sectionStyles === null || sectionStyles === void 0 ? void 0 : sectionStyles.styleData) === null || _g === void 0 ? void 0 : _g.borderRadius) === null || _h === void 0 ? void 0 : _h.styleContent) ||
                "0px 0px 0px 0px",
        };
    }, [
        (_d = (_c = sectionStyles === null || sectionStyles === void 0 ? void 0 : sectionStyles.styleData) === null || _c === void 0 ? void 0 : _c.backgroundColor) === null || _d === void 0 ? void 0 : _d.styleContent,
        (_f = (_e = sectionStyles === null || sectionStyles === void 0 ? void 0 : sectionStyles.styleData) === null || _e === void 0 ? void 0 : _e.margin) === null || _f === void 0 ? void 0 : _f.styleContent,
        (_h = (_g = sectionStyles === null || sectionStyles === void 0 ? void 0 : sectionStyles.styleData) === null || _g === void 0 ? void 0 : _g.padding) === null || _h === void 0 ? void 0 : _h.styleContent,
        (_k = (_j = sectionStyles === null || sectionStyles === void 0 ? void 0 : sectionStyles.styleData) === null || _j === void 0 ? void 0 : _j.borderRadius) === null || _k === void 0 ? void 0 : _k.styleContent,
    ]);
    return (_jsxs("section", { className: styles.hero, id: "home", style: sectionContainerStyles, children: [_jsx("div", { className: styles.imageWrapper, children: _jsx(Image, { priority: true, style: imageHeroStyles, height: 650, width: 300, src: (imageHero === null || imageHero === void 0 ? void 0 : imageHero.imageSrc) ||
                        "https://i.postimg.cc/D0c2FLPM/hero-banner.jpg", alt: (imageHero === null || imageHero === void 0 ? void 0 : imageHero.name) || "Hero background", className: styles.home__img, placeholder: "blur", blurDataURL: "/placeholder.png" }) }), _jsxs("div", { className: styles.container, children: [_jsx("h2", { className: styles.heroTitle, style: {
                            color: ((_m = (_l = titleHero === null || titleHero === void 0 ? void 0 : titleHero.styleData) === null || _l === void 0 ? void 0 : _l.titleColor) === null || _m === void 0 ? void 0 : _m.styleContent) || "#fff",
                            fontSize: ((_p = (_o = titleHero === null || titleHero === void 0 ? void 0 : titleHero.styleData) === null || _o === void 0 ? void 0 : _o.titleSize) === null || _p === void 0 ? void 0 : _p.styleContent) || "70px",
                        }, children: _jsx("b", { children: (titleHero === null || titleHero === void 0 ? void 0 : titleHero.content) || "Hospedate en Hotel Demo" }) }), _jsx("p", { className: styles.heroText, style: {
                            color: ((_r = (_q = textHero === null || textHero === void 0 ? void 0 : textHero.styleData) === null || _q === void 0 ? void 0 : _q.titleColor) === null || _r === void 0 ? void 0 : _r.styleContent) || "#fff",
                            fontSize: ((_t = (_s = textHero === null || textHero === void 0 ? void 0 : textHero.styleData) === null || _s === void 0 ? void 0 : _s.titleSize) === null || _t === void 0 ? void 0 : _t.styleContent) || "12px",
                        }, children: (textHero === null || textHero === void 0 ? void 0 : textHero.content) ||
                            "En Hotel Demo, combinamos confort, estilo y atención personalizada para que vivas una estadía inolvidable. Disfrutá de nuestras habitaciones, desayuno casero y una ubicación privilegiada. Bienvenido al descanso que merecés" }), _jsx("button", { className: styles.btnPrimary, style: {
                            color: ((_v = (_u = ctaButtonHero === null || ctaButtonHero === void 0 ? void 0 : ctaButtonHero.styleData) === null || _u === void 0 ? void 0 : _u.textColor) === null || _v === void 0 ? void 0 : _v.styleContent) || "#fff",
                            backgroundColor: ((_x = (_w = ctaButtonHero === null || ctaButtonHero === void 0 ? void 0 : ctaButtonHero.styleData) === null || _w === void 0 ? void 0 : _w.backgroundColor) === null || _x === void 0 ? void 0 : _x.styleContent) ||
                                "#5692f1",
                            fontSize: ((_z = (_y = ctaButtonHero === null || ctaButtonHero === void 0 ? void 0 : ctaButtonHero.styleData) === null || _y === void 0 ? void 0 : _y.buttonTextSize) === null || _z === void 0 ? void 0 : _z.styleContent) || "14px",
                        }, onClick: () => { var _a; return (window.location.href = ((_a = ctaButtonHero === null || ctaButtonHero === void 0 ? void 0 : ctaButtonHero.content) === null || _a === void 0 ? void 0 : _a.link) || "#"); }, children: ((_0 = ctaButtonHero === null || ctaButtonHero === void 0 ? void 0 : ctaButtonHero.content) === null || _0 === void 0 ? void 0 : _0.textButton) || "Offer" })] })] }));
};
export default HeroTravel1;
