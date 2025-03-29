import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import styles from "./HeroBeats3.module.css";
import Link from "next/link";
const HeroBeats3 = (props) => {
    return (_jsx("section", { className: `${styles.home} ${styles.section}`, id: "home", children: _jsxs("div", { className: `${styles.home__container} ${styles.container} ${styles.grid}`, children: [_jsx("div", { children: _jsx(Image, { height: 750, width: 400, src: props.imageHero.imageSrc, alt: props.imageHero.name, className: styles.home__img }) }), _jsxs("div", { className: styles.home__data, children: [_jsxs("div", { className: styles.home__header, children: [_jsx("h1", { className: styles.home__title, children: props.titleHero.content }), _jsx("h2", { className: styles.home__subtitle, children: props.subtitleHero.content })] }), _jsxs("div", { className: styles.home__footer, children: [_jsx("h3", { className: styles.home__titleDescription, children: props.subtitleTextHero.content }), _jsx("p", { className: styles.home__description, children: props.TextHero.content }), _jsxs(Link, { href: props.ctaButtonHero.content.link, className: `${styles.button} ${styles.button__flex}`, children: [_jsxs("span", { className: styles.button__flex, children: [_jsx("i", { className: `ri-shopping-bag-line ${styles.button__icon}` }), props.ctaButtonHero.content.textButton] }), _jsx("span", { className: styles.home__price, children: props.priceButton.content })] })] })] })] }) }));
};
export default HeroBeats3;
