import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import styles from "./FooterTravel1.module.css";
import "../reset.css";
export const FooterTravel1 = (props) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
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
    return (_jsxs("footer", { className: styles.footer, style: sectionContainerStyles, children: [_jsx("div", { className: styles.footerTop, children: _jsxs("div", { className: styles.container, children: [_jsxs("div", { className: styles.footerBrand, children: [_jsx("a", { href: "#", className: styles.logo, children: _jsx("img", { src: "https://i.postimg.cc/hvcfT8PK/logo-blue.png", alt: "Tourly logo" }) }), _jsx("p", { className: styles.footerText, children: "Your passport to adventure awaits!" })] }), _jsxs("div", { className: styles.footerContact, children: [_jsx("h4", { className: styles.contactTitle, children: "Contact Us" }), _jsx("p", { className: styles.contactText, children: "Feel free to contact us!" }), _jsxs("ul", { children: [_jsxs("li", { className: styles.contactItem, children: [_jsx("b", { className: styles.callOutline }), _jsx("a", { href: "tel:+01123456790", className: styles.contactLink, children: "+01 (123) 456 7890" })] }), _jsxs("li", { className: styles.contactItem, children: [_jsx("b", { className: styles.mailOutline }), _jsx("a", { href: "mailto:info.tourly.com", className: styles.contactLink, children: "info.tourly.com" })] }), _jsxs("li", { className: styles.contactItem, children: [_jsx("b", { className: styles.locationOutline }), _jsx("address", { children: "3145 Koontz, California" })] })] })] }), _jsxs("div", { className: styles.footerForm, children: [_jsx("p", { className: styles.formText, children: "Subscribe to our newsletter for more update & news!!" }), _jsxs("form", { action: "#", className: styles.formWrapper, children: [_jsx("input", { type: "email", name: "email", className: styles.inputField, placeholder: "Enter your email", required: true }), _jsx("button", { type: "submit", className: styles.btnSecondary, children: "Subscribe" })] })] })] }) }), _jsx("div", { className: styles.footerBottom, children: _jsxs("div", { className: styles.container, children: [_jsx("p", { className: styles.copyright, children: "\u00A9 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos." }), _jsxs("ul", { className: styles.footerBottomList, children: [_jsx("li", { children: _jsx("a", { href: "#", className: styles.footerBottomLink, children: "Privacy Policy" }) }), _jsx("li", { children: _jsx("a", { href: "#", className: styles.footerBottomLink, children: "Terms & Conditions" }) }), _jsx("li", { children: _jsx("a", { href: "#", className: styles.footerBottomLink, children: "FAQ" }) })] })] }) })] }));
};
export default FooterTravel1;
