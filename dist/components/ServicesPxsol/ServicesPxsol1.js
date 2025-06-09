"use client";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState, useMemo } from "react";
import styles from "./ServicesPxsol1.module.css";
export const ServicesPxsol1 = (props) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11;
    // Accedemos a las props con los nombres correctos
    const titleHero = props.Title;
    const textHero = props.Text;
    const idPos = props.idPos;
    const sectionStyles = props.Section;
    const token = props.token;
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const [isAnimating, setIsAnimating] = useState(false);
    // Extraer el productId del idPos
    const productId = (idPos === null || idPos === void 0 ? void 0 : idPos.content) !== "undefined" ? Number(idPos === null || idPos === void 0 ? void 0 : idPos.content) : undefined;
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
    useEffect(() => {
        const fetchServices = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                setLoading(true);
                setError(null);
                // Si no hay productId, mantenemos el estado de loading
                if (!productId) {
                    return;
                }
                const response = yield fetch(`https://api.pxsol.io/v2eb/services/list/${productId}`, {
                    headers: {
                        Authorization: token || "",
                    },
                });
                const data = yield response.json();
                if (data.response === 1 && data.list) {
                    setServices(data.list);
                }
                else {
                    setError("Error al cargar los servicios");
                }
            }
            catch (error) {
                setError("Error al cargar los servicios");
            }
            finally {
                setLoading(false);
            }
        });
        fetchServices();
    }, [productId, token]);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setItemsPerPage(3);
            }
            else if (window.innerWidth >= 640) {
                setItemsPerPage(2);
            }
            else {
                setItemsPerPage(1);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const handlePageChange = (newPage) => __awaiter(void 0, void 0, void 0, function* () {
        if (isAnimating)
            return;
        setIsAnimating(true);
        setCurrentPage(newPage);
        setTimeout(() => {
            setIsAnimating(false);
        }, 500);
    });
    const totalPages = Math.ceil(services.length / itemsPerPage);
    const startIndex = currentPage * itemsPerPage;
    const visibleServices = services.slice(startIndex, startIndex + itemsPerPage);
    if (!productId || productId === undefined) {
        return (_jsxs("div", { className: styles.container, style: sectionContainerStyles, children: [_jsx("h2", { className: styles.title, style: {
                        color: ((_k = (_j = titleHero === null || titleHero === void 0 ? void 0 : titleHero.styleData) === null || _j === void 0 ? void 0 : _j.titleColor) === null || _k === void 0 ? void 0 : _k.styleContent) || "#2d3748",
                        fontSize: ((_m = (_l = titleHero === null || titleHero === void 0 ? void 0 : titleHero.styleData) === null || _l === void 0 ? void 0 : _l.titleSize) === null || _m === void 0 ? void 0 : _m.styleContent) || "2rem",
                    }, children: _jsx("b", { children: (titleHero === null || titleHero === void 0 ? void 0 : titleHero.content) || "Nuestros Servicios" }) }), _jsx("p", { className: styles.subtitle, style: {
                        color: ((_p = (_o = textHero === null || textHero === void 0 ? void 0 : textHero.styleData) === null || _o === void 0 ? void 0 : _o.titleColor) === null || _p === void 0 ? void 0 : _p.styleContent) || "#718096",
                        fontSize: ((_r = (_q = textHero === null || textHero === void 0 ? void 0 : textHero.styleData) === null || _q === void 0 ? void 0 : _q.titleSize) === null || _r === void 0 ? void 0 : _r.styleContent) || "1rem",
                    }, children: (textHero === null || textHero === void 0 ? void 0 : textHero.content) ||
                        "Descubre todos los servicios que tenemos para ofrecerte" }), _jsx("div", { className: styles.servicesContainer, children: _jsx("div", { className: styles.servicesGrid, children: Array(itemsPerPage)
                            .fill(null)
                            .map((_, i) => (_jsxs("div", { className: styles.serviceCard, children: [_jsx("div", { className: styles.imageContainer }), _jsxs("div", { className: styles.serviceContent, children: [_jsx("div", { className: styles.serviceTitle }), _jsx("div", { className: styles.serviceDescription })] })] }, i))) }) })] }));
    }
    if (error) {
        return (_jsxs("div", { className: styles.container, style: sectionContainerStyles, children: [_jsx("h2", { className: styles.title, style: {
                        color: ((_t = (_s = titleHero === null || titleHero === void 0 ? void 0 : titleHero.styleData) === null || _s === void 0 ? void 0 : _s.titleColor) === null || _t === void 0 ? void 0 : _t.styleContent) || "#2d3748",
                        fontSize: ((_v = (_u = titleHero === null || titleHero === void 0 ? void 0 : titleHero.styleData) === null || _u === void 0 ? void 0 : _u.titleSize) === null || _v === void 0 ? void 0 : _v.styleContent) || "2rem",
                    }, children: _jsx("b", { children: (titleHero === null || titleHero === void 0 ? void 0 : titleHero.content) || "Nuestros Servicios" }) }), _jsxs("div", { className: styles.errorContainer, children: [_jsx("div", { className: styles.errorIcon, children: "\u2715" }), _jsx("p", { className: styles.errorMessage, children: error })] })] }));
    }
    if (loading) {
        return (_jsxs("div", { className: styles.container, style: sectionContainerStyles, children: [_jsx("h2", { className: styles.title, style: {
                        color: ((_x = (_w = titleHero === null || titleHero === void 0 ? void 0 : titleHero.styleData) === null || _w === void 0 ? void 0 : _w.titleColor) === null || _x === void 0 ? void 0 : _x.styleContent) || "#2d3748",
                        fontSize: ((_z = (_y = titleHero === null || titleHero === void 0 ? void 0 : titleHero.styleData) === null || _y === void 0 ? void 0 : _y.titleSize) === null || _z === void 0 ? void 0 : _z.styleContent) || "2rem",
                    }, children: _jsx("b", { children: (titleHero === null || titleHero === void 0 ? void 0 : titleHero.content) || "Nuestros Servicios" }) }), _jsx("p", { className: styles.subtitle, style: {
                        color: ((_1 = (_0 = textHero === null || textHero === void 0 ? void 0 : textHero.styleData) === null || _0 === void 0 ? void 0 : _0.titleColor) === null || _1 === void 0 ? void 0 : _1.styleContent) || "#718096",
                        fontSize: ((_3 = (_2 = textHero === null || textHero === void 0 ? void 0 : textHero.styleData) === null || _2 === void 0 ? void 0 : _2.titleSize) === null || _3 === void 0 ? void 0 : _3.styleContent) || "1rem",
                    }, children: (textHero === null || textHero === void 0 ? void 0 : textHero.content) ||
                        "Descubre todos los servicios que tenemos para ofrecerte" }), _jsx("div", { className: styles.servicesContainer, children: _jsx("div", { className: styles.servicesGrid, children: Array(itemsPerPage)
                            .fill(null)
                            .map((_, i) => (_jsxs("div", { className: styles.serviceCard, children: [_jsx("div", { className: styles.imageContainer }), _jsxs("div", { className: styles.serviceContent, children: [_jsx("div", { className: styles.serviceTitle }), _jsx("div", { className: styles.serviceDescription })] })] }, i))) }) })] }));
    }
    return (_jsxs("div", { className: styles.container, style: sectionContainerStyles, children: [_jsx("h2", { className: styles.title, style: {
                    color: ((_5 = (_4 = titleHero === null || titleHero === void 0 ? void 0 : titleHero.styleData) === null || _4 === void 0 ? void 0 : _4.titleColor) === null || _5 === void 0 ? void 0 : _5.styleContent) || "#2d3748",
                    fontSize: ((_7 = (_6 = titleHero === null || titleHero === void 0 ? void 0 : titleHero.styleData) === null || _6 === void 0 ? void 0 : _6.titleSize) === null || _7 === void 0 ? void 0 : _7.styleContent) || "2rem",
                }, children: _jsx("b", { children: (titleHero === null || titleHero === void 0 ? void 0 : titleHero.content) || "Nuestros Servicios" }) }), _jsx("p", { className: styles.subtitle, style: {
                    color: ((_9 = (_8 = textHero === null || textHero === void 0 ? void 0 : textHero.styleData) === null || _8 === void 0 ? void 0 : _8.titleColor) === null || _9 === void 0 ? void 0 : _9.styleContent) || "#718096",
                    fontSize: ((_11 = (_10 = textHero === null || textHero === void 0 ? void 0 : textHero.styleData) === null || _10 === void 0 ? void 0 : _10.titleSize) === null || _11 === void 0 ? void 0 : _11.styleContent) || "1rem",
                }, children: (textHero === null || textHero === void 0 ? void 0 : textHero.content) ||
                    "Descubre todos los servicios que tenemos para ofrecerte" }), _jsxs("div", { className: styles.servicesContainer, children: [_jsx("div", { className: styles.servicesGrid, children: visibleServices.map((service) => (_jsxs("div", { className: `${styles.serviceCard} ${isAnimating ? styles.fadeOut : ""}`, children: [_jsxs("div", { className: styles.imageContainer, children: [_jsx("img", { src: service.image_url, alt: service.title, className: styles.serviceImage }), _jsx("div", { className: styles.iconOverlay, children: _jsx("i", { className: service.icon_class }) })] }), _jsxs("div", { className: styles.serviceContent, children: [_jsx("h3", { className: styles.serviceTitle, children: service.title }), _jsx("div", { className: styles.serviceDescription, dangerouslySetInnerHTML: { __html: service.description } })] })] }, service.id))) }), totalPages > 1 && (_jsxs("div", { className: styles.navigationButtons, children: [_jsx("button", { className: styles.navButton, onClick: () => handlePageChange(Math.max(0, currentPage - 1)), disabled: currentPage === 0 || isAnimating, "aria-label": "Previous page", children: "\u2039" }), _jsx("button", { className: styles.navButton, onClick: () => handlePageChange(Math.min(totalPages - 1, currentPage + 1)), disabled: currentPage === totalPages - 1 || isAnimating, "aria-label": "Next page", children: "\u203A" })] }))] })] }));
};
export default ServicesPxsol1;
