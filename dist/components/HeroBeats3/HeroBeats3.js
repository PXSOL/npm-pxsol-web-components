import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import Image from "next/image";
import styles from "./HeroBeats3.module.css";
import Link from "next/link";
import { useMemo } from "react";
const HeroBeats3 = React.memo((props) => {
    const imageHeroStyles = useMemo(() => ({
        filter: props.imageHero.styleData.filterImage.value
            .map((filter) => `${filter.name}(${filter.value})`)
            .join(" "),
    }), [props.imageHero.styleData.filterImage.value]);
    const sectionStyles = useMemo(() => ({
        background: props.backgroundHero.styleData.backgroundColor.color,
    }), [props.backgroundHero.styleData.backgroundColor.color]);
    const titleStyles = useMemo(() => ({
        color: props.titleHero.styleData.titleColor.color,
        fontSize: props.titleHero.styleData.titleSize.size,
    }), [props.titleHero.styleData.titleColor.color, props.titleHero.styleData.titleSize.size]);
    const subtitleStyles = useMemo(() => ({
        color: props.subtitleHero.styleData.titleTwoColor.color,
        fontSize: props.subtitleHero.styleData.titleTwoSize.size,
    }), [props.subtitleHero.styleData.titleTwoColor.color, props.subtitleHero.styleData.titleTwoSize.size]);
    const subtitleTextHeroStyles = useMemo(() => ({
        color: props.subtitleTextHero.styleData.subtitleColor.color,
        fontSize: props.subtitleTextHero.styleData.subtitleSize.size,
    }), [props.subtitleTextHero.styleData.subtitleColor.color, props.subtitleTextHero.styleData.subtitleSize.size]);
    const TextHeroStyles = useMemo(() => ({
        color: props.TextHero.styleData.textColor.color,
        fontSize: props.TextHero.styleData.textSize.size,
    }), [props.TextHero.styleData.textColor.color, props.TextHero.styleData.textSize.size]);
    const ctaButtonHeroStyles = useMemo(() => ({
        color: props.ctaButtonHero.styleData.textColor.color,
        background: props.ctaButtonHero.styleData.backgroundColor.color,
        fontSize: props.ctaButtonHero.styleData.buttonTextSize.size,
    }), [props.ctaButtonHero.styleData.textColor.color, props.ctaButtonHero.styleData.backgroundColor.color, props.ctaButtonHero.styleData.buttonTextSize.size]);
    const priceButtonStyles = useMemo(() => ({
        color: props.priceButton.styleData.priceColor.color,
        fontSize: props.priceButton.styleData.buttonTextSize.size,
    }), [props.priceButton.styleData.priceColor.color, props.priceButton.styleData.buttonTextSize.size]);
    return (_jsx("section", { className: `${styles.home} ${styles.section}`, style: sectionStyles, id: "home", children: _jsxs("div", { className: `${styles.home__container} ${styles.container} ${styles.grid}`, children: [_jsx("div", { className: styles.home__img__container, children: _jsx(Image, { priority: true, style: imageHeroStyles, height: 650, width: 300, src: props.imageHero.imageSrc, alt: props.imageHero.name, className: styles.home__img, placeholder: "blur", blurDataURL: "/placeholder.png" }) }), _jsxs("div", { className: styles.home__data, children: [_jsxs("div", { className: styles.home__header, children: [_jsx("h1", { className: `${styles.home__title}`, style: titleStyles, children: props.titleHero.content }), _jsx("h2", { className: styles.home__subtitle, style: subtitleStyles, children: props.subtitleHero.content })] }), _jsxs("div", { className: styles.home__footer, children: [_jsx("h3", { style: subtitleTextHeroStyles, className: styles.home__titleDescription, children: props.subtitleTextHero.content }), _jsx("p", { style: TextHeroStyles, className: styles.home__description, children: props.TextHero.content }), _jsxs(Link, { style: ctaButtonHeroStyles, href: props.ctaButtonHero.content.link, className: `${styles.button} ${styles.button__flex}`, children: [_jsxs("span", { className: styles.button__flex, children: [_jsx("i", { className: `ri-shopping-bag-line ${styles.button__icon}` }), props.ctaButtonHero.content.textButton] }), _jsx("span", { style: priceButtonStyles, className: styles.home__price, children: props.priceButton.content })] })] })] })] }) }));
});
export default HeroBeats3;
