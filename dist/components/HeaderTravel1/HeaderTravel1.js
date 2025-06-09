import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useMemo } from "react";
import styles from "./HeaderTravel1.module.css";
import "../reset.css";
import Link from "next/link";
import Image from "next/image";
export const HeaderTravel1 = (props) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    // Validación defensiva para buttonGroup
    const buttonGroup = ((_a = props.buttonGroup) === null || _a === void 0 ? void 0 : _a.content) || [];
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
        (_c = (_b = sectionStyles === null || sectionStyles === void 0 ? void 0 : sectionStyles.styleData) === null || _b === void 0 ? void 0 : _b.backgroundColor) === null || _c === void 0 ? void 0 : _c.styleContent,
        (_e = (_d = sectionStyles === null || sectionStyles === void 0 ? void 0 : sectionStyles.styleData) === null || _d === void 0 ? void 0 : _d.margin) === null || _e === void 0 ? void 0 : _e.styleContent,
        (_g = (_f = sectionStyles === null || sectionStyles === void 0 ? void 0 : sectionStyles.styleData) === null || _f === void 0 ? void 0 : _f.padding) === null || _g === void 0 ? void 0 : _g.styleContent,
        (_j = (_h = sectionStyles === null || sectionStyles === void 0 ? void 0 : sectionStyles.styleData) === null || _h === void 0 ? void 0 : _h.borderRadius) === null || _j === void 0 ? void 0 : _j.styleContent,
    ]);
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: styles.topBarHeaderWhiteSpace }), _jsxs("header", { className: styles.header, "data-header": true, style: sectionContainerStyles, children: [_jsx("div", { className: styles.overlay, "data-overlay": true }), _jsx("div", { className: styles.headerTop, children: _jsxs("div", { className: styles.container, children: [_jsxs("a", { href: "tel:+11234567890", className: styles.helplineBox, children: [_jsx("div", { className: styles.iconBox, children: _jsx("b", { className: styles.callOutline }) }), _jsxs("div", { className: styles.wrapper, children: [_jsx("p", { className: styles.helplineTitle, children: "For Further Inquiries: " }), _jsx("p", { className: styles.helplineNumber, children: "+1 (123) 456 7890" })] })] }), _jsx("a", { href: "#", className: styles.logo, children: _jsx(Image, { src: "https://i.postimg.cc/zvgHq2QX/logo.png", alt: "Tourly Logo", width: 100, height: 100 }) }), _jsxs("div", { className: styles.headerBtnGroup, children: [_jsx("button", { className: styles.searchBtn, "aria-label": "Search", children: _jsx("b", { className: styles.search }) }), _jsx("button", { className: styles.navOpenBtn, "aria-label": "Open Menu", "data-nav-open-btn": true, children: _jsx("b", { className: styles.menuOutline }) })] })] }) }), _jsx("div", { className: styles.headerBottom, children: _jsxs("div", { className: styles.container, children: [_jsxs("nav", { className: styles.navbar, "data-navbar": true, children: [_jsxs("div", { className: styles.navbarTop, children: [_jsx("a", { href: "#", className: styles.logo, children: _jsx(Image, { src: "https://i.postimg.cc/hvcfT8PK/logo-blue.png", alt: "Tourly Logo", width: 100, height: 100 }) }), _jsx("button", { className: styles.navCloseBtn, "aria-label": "Close Menu", "data-nav-close-btn": true, children: _jsx("b", { className: styles.closeOutline }) })] }), _jsx("ul", { className: styles.navbarList, children: buttonGroup.map((item, index) => {
                                                var _a, _b;
                                                return (_jsx("li", { children: _jsx(Link, { href: ((_a = item.content) === null || _a === void 0 ? void 0 : _a.link) || "#", className: styles.navbarLink, "data-nav-link": true, children: ((_b = item.content) === null || _b === void 0 ? void 0 : _b.textButton) || "Link" }) }, index));
                                            }) })] }), _jsx("button", { className: styles.btnPrimary, children: "Book Now" })] }) })] })] }));
};
export default HeaderTravel1;
