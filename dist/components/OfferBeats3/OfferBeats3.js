import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./OfferBeats3.module.css";
export const OfferBeats3 = React.memo((props) => {
    const sectionClass = `${styles.discount} ${styles.section}`;
    const containerClass = `${styles.discountContainer} ${styles.container} ${styles.grid}`;
    const buttonClass = `${styles.button} ${styles.buttonFlex}`;
    const title = useMemo(() => props.titleOffer.content, [props.titleOffer.content]);
    const description = useMemo(() => props.TextSection.content, [props.TextSection.content]);
    const buttonText = useMemo(() => props.ctaButtonCard.content.textButton, [props.ctaButtonCard.content.textButton]);
    const buttonLink = useMemo(() => props.ctaButtonCard.content.link, [props.ctaButtonCard.content.link]);
    const imageSrc = useMemo(() => props.imgSection.imageSrc, [props.imgSection.imageSrc]);
    return (_jsx("section", { className: sectionClass, children: _jsxs("div", { className: containerClass, children: [_jsxs("div", { className: styles.discountAnimate, children: [_jsx("h2", { className: styles.discountTitle, children: title }), _jsx("p", { className: styles.discountDescription, children: description }), _jsxs(Link, { href: buttonLink, className: buttonClass, children: [_jsx("i", { className: `ri-shopping-bag-line ${styles.buttonIcon}` }), buttonText] })] }), _jsx(Image, { height: 400, width: 400, src: imageSrc, alt: title, className: styles.discountImg, placeholder: "blur", blurDataURL: "/placeholder.png" })] }) }));
});
export default OfferBeats3;
