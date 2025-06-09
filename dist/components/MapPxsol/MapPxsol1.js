"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useMemo } from "react";
import styles from "./MapPxsol1.module.css";
export const MapPxsol1 = (props) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
    // Accedemos a las props con los nombres correctos
    const titleHero = props.Title;
    const textHero = props.Text;
    const idPos = props.idPos;
    const sectionStyles = props.Section;
    const [loading, setLoading] = useState(true);
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
        (_b = (_a = sectionStyles === null || sectionStyles === void 0 ? void 0 : sectionStyles.styleData) === null || _a === void 0 ? void 0 : _a.backgroundColor) === null || _b === void 0 ? void 0 : _b.styleContent,
        (_d = (_c = sectionStyles === null || sectionStyles === void 0 ? void 0 : sectionStyles.styleData) === null || _c === void 0 ? void 0 : _c.margin) === null || _d === void 0 ? void 0 : _d.styleContent,
        (_f = (_e = sectionStyles === null || sectionStyles === void 0 ? void 0 : sectionStyles.styleData) === null || _e === void 0 ? void 0 : _e.padding) === null || _f === void 0 ? void 0 : _f.styleContent,
        (_h = (_g = sectionStyles === null || sectionStyles === void 0 ? void 0 : sectionStyles.styleData) === null || _g === void 0 ? void 0 : _g.borderRadius) === null || _h === void 0 ? void 0 : _h.styleContent,
    ]);
    // Función para extraer el src de un iframe completo
    const extractSrcFromIframe = (iframeString) => {
        const srcMatch = iframeString.match(/src="([^"]+)"/);
        return srcMatch ? srcMatch[1] : "";
    };
    // Función para manejar cuando el iframe termina de cargar
    const handleIframeLoad = () => {
        setLoading(false);
    };
    // Obtener el src del iframe
    const defaultIframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.3354966283405!2d-68.85213078849135!3d-32.88929686888474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e090489def92b%3A0x89f0a84aa8829689!2sDiplomatic%20Hotel!5e0!3m2!1ses!2sar!4v1749000907898!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    const mapSrc = (idPos === null || idPos === void 0 ? void 0 : idPos.content)
        ? extractSrcFromIframe(idPos.content)
        : extractSrcFromIframe(defaultIframe);
    return (_jsxs("div", { className: styles.container, style: sectionContainerStyles, children: [_jsx("h2", { className: styles.title, style: {
                    color: ((_k = (_j = titleHero === null || titleHero === void 0 ? void 0 : titleHero.styleData) === null || _j === void 0 ? void 0 : _j.titleColor) === null || _k === void 0 ? void 0 : _k.styleContent) || "#2d3748",
                    fontSize: ((_m = (_l = titleHero === null || titleHero === void 0 ? void 0 : titleHero.styleData) === null || _l === void 0 ? void 0 : _l.titleSize) === null || _m === void 0 ? void 0 : _m.styleContent) || "2rem",
                }, children: _jsx("b", { children: (titleHero === null || titleHero === void 0 ? void 0 : titleHero.content) || "Nuestra Ubicación" }) }), _jsx("p", { className: styles.subtitle, style: {
                    color: ((_p = (_o = textHero === null || textHero === void 0 ? void 0 : textHero.styleData) === null || _o === void 0 ? void 0 : _o.titleColor) === null || _p === void 0 ? void 0 : _p.styleContent) || "#718096",
                    fontSize: ((_r = (_q = textHero === null || textHero === void 0 ? void 0 : textHero.styleData) === null || _q === void 0 ? void 0 : _q.titleSize) === null || _r === void 0 ? void 0 : _r.styleContent) || "1rem",
                }, children: (textHero === null || textHero === void 0 ? void 0 : textHero.content) ||
                    "Encuentra la mejor ruta para llegar a nuestras instalaciones" }), _jsxs("div", { className: styles.mapContainer, children: [loading && (_jsx("div", { className: styles.skeleton, children: _jsx("div", { className: styles.pulseAnimation }) })), _jsx("iframe", { src: mapSrc, width: "100%", height: "450", style: { border: 0 }, allowFullScreen: true, loading: "lazy", referrerPolicy: "no-referrer-when-downgrade", onLoad: handleIframeLoad, className: loading ? styles.hidden : "" })] })] }));
};
export default MapPxsol1;
