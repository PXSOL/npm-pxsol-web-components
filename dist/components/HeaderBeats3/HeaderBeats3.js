import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from "react";
import styles from "./HeaderBeats3.module.css";
import Image from "next/image";
import Link from "next/link";
export const HeaderBeats3 = (props) => {
    const [isActiveMenu, setIsActiveMenu] = React.useState(false);
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: styles.spacingTopHeader }), _jsx("header", { className: styles.header, id: "header", children: _jsxs("nav", { className: `${styles.nav} ${styles.container}`, children: [_jsx(Link, { href: "/", className: styles.nav__logo, children: _jsx(Image, { height: 60, width: 60, src: props.logoHeader.imageSrc, alt: props.logoHeader.name }) }), _jsxs("div", { className: `${styles.nav__menu} ${isActiveMenu && styles.activeMenu}`, id: "nav-menu", children: [_jsx("ul", { className: styles.nav__list, children: props.groupTextHero.content.map((item, index) => {
                                        return (_jsx("li", { className: styles.nav__item, children: _jsx(Link, { href: item.ctaButtonHero.content.link, className: `
                        ${styles.nav__link} 
                        // {styles.activeLink}
                      `, children: item.ctaButtonHero.content.textButton }) }, index));
                                    }) }), _jsx("div", { onClick: (() => { setIsActiveMenu(false); }), className: styles.nav__close, id: "nav-close", children: _jsx("i", { className: "ri-close-line" }) })] }), _jsx("div", { onClick: (() => { setIsActiveMenu(true); }), className: styles.nav__toggle, id: "nav-toggle", children: _jsx("i", { className: "ri-function-line" }) })] }) })] }));
};
export default HeaderBeats3;
