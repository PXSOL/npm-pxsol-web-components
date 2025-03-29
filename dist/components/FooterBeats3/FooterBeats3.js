import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./FooterBeats3.module.css";
import Link from "next/link";
import Image from "next/image";
export const FooterBeats3 = (props) => {
    return (_jsxs("footer", { className: `${styles.footer} ${styles.section}`, children: [_jsxs("div", { className: `${styles.footer__container} ${styles.container} ${styles.grid}`, children: [_jsx("a", { href: "#", className: styles.footer__logo, children: _jsx(Image, { width: 100, height: 100, src: props.imgLogoFooter.imageSrc, alt: props.imgLogoFooter.name }) }), _jsxs("div", { className: styles.footer__content, children: [_jsx("h3", { className: styles.footer__title, children: props.titleColumn1.content }), _jsx("ul", { className: styles.footer__links, children: props.groupColumn1.content.map((itemColumn, index) => {
                                    return (_jsx("li", { children: _jsx(Link, { href: itemColumn.ctaButtonHero.content.link, className: styles.footer__link, children: itemColumn.ctaButtonHero.content.textButton }) }, index));
                                }) })] }), _jsxs("div", { className: styles.footer__content, children: [_jsx("h3", { className: styles.footer__title, children: props.titleColumn2.content }), _jsx("ul", { className: styles.footer__links, children: props.groupColumn2.content.map((itemColumn, index) => {
                                    return (_jsx("li", { children: _jsx(Link, { href: itemColumn.ctaButtonHero.content.link, className: styles.footer__link, children: itemColumn.ctaButtonHero.content.textButton }) }, index));
                                }) })] }), _jsxs("div", { className: styles.footer__content, children: [_jsxs("form", { action: "", className: styles.footer__form, children: [_jsx("input", { type: "email", placeholder: "Email", className: styles.footer__input }), _jsxs("button", { className: `${styles.button} ${styles.button__flex}`, children: [_jsx("i", { className: `ri-send-plane-line ${styles.button__icon}` }), " Subscribe"] })] }), _jsx("div", { className: styles.footer__social, children: props.groupSocialIcons.content.map((itemSocial, index) => {
                                    return (_jsx(Link, { href: itemSocial.ctaButtonHero.content.link, target: "_blank", className: styles.footer__socialLink, children: _jsx("i", { className: itemSocial.ctaButtonHero.content.textButton }) }, index));
                                }) })] })] }), _jsx("p", { className: styles.footer__copy, children: _jsx("span", { className: styles.footer__copyLink, children: props.copyright.content }) })] }));
};
export default FooterBeats3;
