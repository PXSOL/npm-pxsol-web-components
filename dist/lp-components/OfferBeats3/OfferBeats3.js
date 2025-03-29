import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import Link from "next/link";
import styles from "./OfferBeats3.module.css";
export const OfferBeats3 = (props) => {
    return (_jsx("section", { className: `${styles.discount} ${styles.section}`, children: _jsxs("div", { className: `${styles.discountContainer} ${styles.container} ${styles.grid}`, children: [_jsxs("div", { className: styles.discountAnimate, children: [_jsx("h2", { className: styles.discountTitle, children: props.titleOffer.content }), _jsx("p", { className: styles.discountDescription, children: props.TextSection.content }), _jsxs(Link, { href: props.ctaButtonCard.content.link, className: `${styles.button} ${styles.buttonFlex}`, children: [_jsx("i", { className: `ri-shopping-bag-line ${styles.buttonIcon}` }), props.ctaButtonCard.content.textButton] })] }), _jsx(Image, { height: 500, width: 500, src: props.imgSection.imageSrc, alt: props.titleOffer.content, className: styles.discountImg })] }) }));
};
export default OfferBeats3;
