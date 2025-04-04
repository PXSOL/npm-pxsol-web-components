import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from "react";
import styles from "./HeaderBeats3.module.css";
import Image from "next/image";
import Link from "next/link";
export const HeaderBeats3 = React.memo((props) => {
    const [isActiveMenu, setIsActiveMenu] = React.useState(false);
    const toggleMenu = React.useCallback(() => setIsActiveMenu((prev) => !prev), []);
    const closeMenu = React.useCallback(() => setIsActiveMenu(false), []);
    const navItems = React.useMemo(() => {
        return props.groupTextHero.content.map((item, index) => (_jsx("li", { className: styles.nav__item, children: _jsx(Link, { href: item.ctaButtonHero.content.link, className: styles.nav__link, children: item.ctaButtonHero.content.textButton }) }, index)));
    }, [props.groupTextHero.content]);
    const navMenuClass = `${styles.nav__menu} ${isActiveMenu ? styles.activeMenu : ""}`;
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: styles.spacingTopHeader }), _jsx("header", { className: styles.header, id: "header", children: _jsxs("nav", { className: `${styles.nav} ${styles.container}`, children: [_jsx(Link, { href: "/", className: styles.nav__logo, children: _jsx(Image, { priority: true, height: 20, width: 20, src: props.logoHeader.imageSrc, alt: props.logoHeader.name }) }), _jsxs("div", { className: navMenuClass, id: "nav-menu", children: [_jsx("ul", { className: styles.nav__list, children: navItems }), _jsx("div", { onClick: closeMenu, className: styles.nav__close, id: "nav-close", children: _jsx("i", { className: "ri-close-line" }) })] }), _jsx("div", { onClick: toggleMenu, className: styles.nav__toggle, id: "nav-toggle", children: _jsx("i", { className: "ri-function-line" }) })] }) })] }));
});
export default HeaderBeats3;
