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
import { useEffect, useState } from "react";
import styles from "./PugsPxsol1.module.css";
export const PugsPxsol1 = (props) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3;
    // Accedemos a las props con los nombres correctos
    const titleHero = props.Title;
    const textHero = props.Text;
    const idPos = props.idPos;
    const token = props.token;
    const [pugs, setPugs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const [isAnimating, setIsAnimating] = useState(false);
    // Extraer el productId del idPos
    const productId = (idPos === null || idPos === void 0 ? void 0 : idPos.content) !== "undefined" ? Number(idPos === null || idPos === void 0 ? void 0 : idPos.content) : undefined;
    useEffect(() => {
        const fetchPugs = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                setLoading(true);
                setError(null);
                // Si no hay productId, mantenemos el estado de loading
                if (!productId) {
                    return;
                }
                const response = yield fetch(`https://api.pxsol.io/v2eb/pug/list/${productId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const data = yield response.json();
                if (Array.isArray(data)) {
                    setPugs(data);
                }
                else {
                    setError("Error al cargar las promociones");
                }
            }
            catch (error) {
                setError("Error al cargar las promociones");
            }
            finally {
                setLoading(false);
            }
        });
        fetchPugs();
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
    const formatDate = (dateString) => {
        if (dateString === "0000-00-00")
            return "Sin fecha límite";
        const date = new Date(dateString);
        return date.toLocaleDateString("es-ES", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };
    const formatDiscount = (pug) => {
        if (pug.actiontype === "discount") {
            const value = parseFloat(pug.actionvalue) /
                (pug.action_amount_type === "percentage" ? 100 : 1);
            return pug.action_amount_type === "percentage"
                ? `${value}% de descuento`
                : `${value} ${pug.currency} de descuento`;
        }
        return "";
    };
    const totalPages = Math.ceil(pugs.length / itemsPerPage);
    const startIndex = currentPage * itemsPerPage;
    const visiblePugs = pugs.slice(startIndex, startIndex + itemsPerPage);
    if (!productId || productId === undefined) {
        return (_jsxs("div", { className: styles.container, children: [_jsx("h2", { className: styles.title, style: {
                        color: ((_b = (_a = titleHero === null || titleHero === void 0 ? void 0 : titleHero.styleData) === null || _a === void 0 ? void 0 : _a.titleColor) === null || _b === void 0 ? void 0 : _b.styleContent) || "#2d3748",
                        fontSize: ((_d = (_c = titleHero === null || titleHero === void 0 ? void 0 : titleHero.styleData) === null || _c === void 0 ? void 0 : _c.titleSize) === null || _d === void 0 ? void 0 : _d.styleContent) || "2rem",
                    }, children: _jsx("b", { children: (titleHero === null || titleHero === void 0 ? void 0 : titleHero.content) || "Nuestras Promociones" }) }), _jsx("p", { className: styles.subtitle, style: {
                        color: ((_f = (_e = textHero === null || textHero === void 0 ? void 0 : textHero.styleData) === null || _e === void 0 ? void 0 : _e.titleColor) === null || _f === void 0 ? void 0 : _f.styleContent) || "#718096",
                        fontSize: ((_h = (_g = textHero === null || textHero === void 0 ? void 0 : textHero.styleData) === null || _g === void 0 ? void 0 : _g.titleSize) === null || _h === void 0 ? void 0 : _h.styleContent) || "1rem",
                    }, children: (textHero === null || textHero === void 0 ? void 0 : textHero.content) || "Descubre todas las promociones disponibles" }), _jsx("div", { className: styles.pugsContainer, children: _jsx("div", { className: styles.pugsGrid, children: Array(itemsPerPage)
                            .fill(null)
                            .map((_, i) => (_jsxs("div", { className: styles.pugCard, children: [_jsx("div", { className: styles.imageContainer }), _jsxs("div", { className: styles.pugContent, children: [_jsx("div", { className: styles.pugTitle }), _jsx("div", { className: styles.pugDescription })] })] }, i))) }) })] }));
    }
    if (error) {
        return (_jsxs("div", { className: styles.container, children: [_jsx("h2", { className: styles.title, style: {
                        color: ((_k = (_j = titleHero === null || titleHero === void 0 ? void 0 : titleHero.styleData) === null || _j === void 0 ? void 0 : _j.titleColor) === null || _k === void 0 ? void 0 : _k.styleContent) || "#2d3748",
                        fontSize: ((_m = (_l = titleHero === null || titleHero === void 0 ? void 0 : titleHero.styleData) === null || _l === void 0 ? void 0 : _l.titleSize) === null || _m === void 0 ? void 0 : _m.styleContent) || "2rem",
                    }, children: _jsx("b", { children: (titleHero === null || titleHero === void 0 ? void 0 : titleHero.content) || "Nuestras Promociones" }) }), _jsxs("div", { className: styles.errorContainer, children: [_jsx("div", { className: styles.errorIcon, children: "\u2715" }), _jsx("p", { className: styles.errorMessage, children: error })] })] }));
    }
    if (loading) {
        return (_jsxs("div", { className: styles.container, children: [_jsx("h2", { className: styles.title, style: {
                        color: ((_p = (_o = titleHero === null || titleHero === void 0 ? void 0 : titleHero.styleData) === null || _o === void 0 ? void 0 : _o.titleColor) === null || _p === void 0 ? void 0 : _p.styleContent) || "#2d3748",
                        fontSize: ((_r = (_q = titleHero === null || titleHero === void 0 ? void 0 : titleHero.styleData) === null || _q === void 0 ? void 0 : _q.titleSize) === null || _r === void 0 ? void 0 : _r.styleContent) || "2rem",
                    }, children: _jsx("b", { children: (titleHero === null || titleHero === void 0 ? void 0 : titleHero.content) || "Nuestras Promociones" }) }), _jsx("p", { className: styles.subtitle, style: {
                        color: ((_t = (_s = textHero === null || textHero === void 0 ? void 0 : textHero.styleData) === null || _s === void 0 ? void 0 : _s.titleColor) === null || _t === void 0 ? void 0 : _t.styleContent) || "#718096",
                        fontSize: ((_v = (_u = textHero === null || textHero === void 0 ? void 0 : textHero.styleData) === null || _u === void 0 ? void 0 : _u.titleSize) === null || _v === void 0 ? void 0 : _v.styleContent) || "1rem",
                    }, children: (textHero === null || textHero === void 0 ? void 0 : textHero.content) || "Descubre todas las promociones disponibles" }), _jsx("div", { className: styles.pugsContainer, children: _jsx("div", { className: styles.pugsGrid, children: Array(itemsPerPage)
                            .fill(null)
                            .map((_, i) => (_jsxs("div", { className: styles.pugCard, children: [_jsx("div", { className: styles.imageContainer }), _jsxs("div", { className: styles.pugContent, children: [_jsx("div", { className: styles.pugTitle }), _jsx("div", { className: styles.pugDescription })] })] }, i))) }) })] }));
    }
    return (_jsxs("div", { className: styles.container, children: [_jsx("h2", { className: styles.title, style: {
                    color: ((_x = (_w = titleHero === null || titleHero === void 0 ? void 0 : titleHero.styleData) === null || _w === void 0 ? void 0 : _w.titleColor) === null || _x === void 0 ? void 0 : _x.styleContent) || "#2d3748",
                    fontSize: ((_z = (_y = titleHero === null || titleHero === void 0 ? void 0 : titleHero.styleData) === null || _y === void 0 ? void 0 : _y.titleSize) === null || _z === void 0 ? void 0 : _z.styleContent) || "2rem",
                }, children: _jsx("b", { children: (titleHero === null || titleHero === void 0 ? void 0 : titleHero.content) || "Nuestras Promociones" }) }), _jsx("p", { className: styles.subtitle, style: {
                    color: ((_1 = (_0 = textHero === null || textHero === void 0 ? void 0 : textHero.styleData) === null || _0 === void 0 ? void 0 : _0.titleColor) === null || _1 === void 0 ? void 0 : _1.styleContent) || "#718096",
                    fontSize: ((_3 = (_2 = textHero === null || textHero === void 0 ? void 0 : textHero.styleData) === null || _2 === void 0 ? void 0 : _2.titleSize) === null || _3 === void 0 ? void 0 : _3.styleContent) || "1rem",
                }, children: (textHero === null || textHero === void 0 ? void 0 : textHero.content) || "Descubre todas las promociones disponibles" }), _jsxs("div", { className: styles.pugsContainer, children: [_jsx("div", { className: styles.pugsGrid, children: visiblePugs.map((pug) => (_jsxs("div", { className: `${styles.pugCard} ${isAnimating ? styles.fadeOut : ""}`, children: [_jsxs("div", { className: styles.imageContainer, children: [_jsx("img", { src: pug.image_url, alt: pug.name, className: styles.pugImage }), _jsx("div", { className: styles.discountBadge, children: formatDiscount(pug) })] }), _jsxs("div", { className: styles.pugContent, children: [_jsx("h3", { className: styles.pugTitle, children: pug.name }), _jsx("div", { className: styles.pugDescription, dangerouslySetInnerHTML: { __html: pug.description } }), _jsxs("div", { className: styles.pugDates, children: [_jsxs("p", { children: ["V\u00E1lido desde: ", formatDate(pug.startdate)] }), _jsxs("p", { children: ["Hasta: ", formatDate(pug.enddate)] })] }), pug.conditions && (_jsxs("div", { className: styles.pugConditions, children: [_jsx("h4", { children: "Condiciones:" }), _jsx("p", { children: pug.conditions })] }))] })] }, pug.id))) }), totalPages > 1 && (_jsxs("div", { className: styles.navigationButtons, children: [_jsx("button", { className: styles.navButton, onClick: () => handlePageChange(Math.max(0, currentPage - 1)), disabled: currentPage === 0 || isAnimating, "aria-label": "Previous page", children: "\u2039" }), _jsx("button", { className: styles.navButton, onClick: () => handlePageChange(Math.min(totalPages - 1, currentPage + 1)), disabled: currentPage === totalPages - 1 || isAnimating, "aria-label": "Next page", children: "\u203A" })] }))] })] }));
};
export default PugsPxsol1;
