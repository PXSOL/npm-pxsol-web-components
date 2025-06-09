import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import styles from "./BookingPxsol1.module.css";
import "../reset.css";
export const BookingPxsol1 = (props) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y;
    const titleBooking = props.Title;
    const textBooking = props.Text;
    const ctaButtonBooking = props["Cta button"];
    const sectionStyles = props.Section;
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
    const handleBookingClick = () => {
        var _a;
        const link = (_a = ctaButtonBooking === null || ctaButtonBooking === void 0 ? void 0 : ctaButtonBooking.content) === null || _a === void 0 ? void 0 : _a.link;
        if (link) {
            if (link.startsWith("http") || link.startsWith("https")) {
                window.open(link, "_blank");
            }
            else {
                window.location.href = link;
            }
        }
    };
    return (_jsx("section", { className: styles.bookingSection, style: sectionContainerStyles, children: _jsx("div", { className: styles.container, children: _jsx("div", { className: styles.bookingCard, children: _jsxs("div", { className: styles.contentWrapper, children: [_jsxs("div", { className: styles.textContent, children: [_jsx("h2", { className: styles.bookingTitle, style: {
                                        color: ((_k = (_j = titleBooking === null || titleBooking === void 0 ? void 0 : titleBooking.styleData) === null || _j === void 0 ? void 0 : _j.titleColor) === null || _k === void 0 ? void 0 : _k.styleContent) ||
                                            "#2d3748",
                                        fontSize: ((_m = (_l = titleBooking === null || titleBooking === void 0 ? void 0 : titleBooking.styleData) === null || _l === void 0 ? void 0 : _l.titleSize) === null || _m === void 0 ? void 0 : _m.styleContent) || "2rem",
                                    }, children: (titleBooking === null || titleBooking === void 0 ? void 0 : titleBooking.content) || "Reserva tu estadía" }), _jsx("p", { className: styles.bookingText, style: {
                                        color: ((_p = (_o = textBooking === null || textBooking === void 0 ? void 0 : textBooking.styleData) === null || _o === void 0 ? void 0 : _o.titleColor) === null || _p === void 0 ? void 0 : _p.styleContent) ||
                                            "#718096",
                                        fontSize: ((_r = (_q = textBooking === null || textBooking === void 0 ? void 0 : textBooking.styleData) === null || _q === void 0 ? void 0 : _q.titleSize) === null || _r === void 0 ? void 0 : _r.styleContent) || "1rem",
                                    }, children: (textBooking === null || textBooking === void 0 ? void 0 : textBooking.content) ||
                                        "Asegura tu lugar y disfruta de una experiencia inolvidable. Reserva ahora y obtén las mejores tarifas disponibles." })] }), _jsx("div", { className: styles.buttonWrapper, children: _jsxs("button", { className: styles.bookingButton, onClick: handleBookingClick, style: {
                                    color: ((_t = (_s = ctaButtonBooking === null || ctaButtonBooking === void 0 ? void 0 : ctaButtonBooking.styleData) === null || _s === void 0 ? void 0 : _s.textColor) === null || _t === void 0 ? void 0 : _t.styleContent) ||
                                        "#fff",
                                    backgroundColor: ((_v = (_u = ctaButtonBooking === null || ctaButtonBooking === void 0 ? void 0 : ctaButtonBooking.styleData) === null || _u === void 0 ? void 0 : _u.backgroundColor) === null || _v === void 0 ? void 0 : _v.styleContent) || "#3b82f6",
                                    fontSize: ((_x = (_w = ctaButtonBooking === null || ctaButtonBooking === void 0 ? void 0 : ctaButtonBooking.styleData) === null || _w === void 0 ? void 0 : _w.buttonTextSize) === null || _x === void 0 ? void 0 : _x.styleContent) ||
                                        "16px",
                                }, children: [_jsxs("svg", { className: styles.bookingIcon, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [_jsx("path", { d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("circle", { cx: "12", cy: "15", r: "2", fill: "currentColor" })] }), _jsx("span", { className: styles.buttonText, children: ((_y = ctaButtonBooking === null || ctaButtonBooking === void 0 ? void 0 : ctaButtonBooking.content) === null || _y === void 0 ? void 0 : _y.textButton) || "Reservar Ahora" }), _jsx("svg", { className: styles.arrowIcon, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { d: "M5 12h14m-7-7l7 7-7 7", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) })] }) })] }) }) }) }));
};
export default BookingPxsol1;
