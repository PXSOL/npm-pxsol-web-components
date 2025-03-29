import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./CaseBeats3.module.css";
import Image from "next/image";
import Link from "next/link";
export const CaseBeats3 = (props) => {
    return (_jsxs("section", { className: `${styles.case} ${styles.section} ${styles.grid}`, id: "case", children: [_jsx("h2", { className: `${styles.section__title} ${styles.section__titleGradient}`, children: props.titleHero.content }), _jsxs("div", { className: `${styles.case__container} ${styles.container} ${styles.grid}`, children: [_jsx("div", { children: _jsx(Image, { height: 700, width: 700, src: props.imgSection.imageSrc, alt: props.titleHero.content, className: styles.case__img }) }), _jsxs("div", { className: styles.case__data, children: [_jsx("p", { className: styles.case__description, children: props.TextSection.content }), _jsxs(Link, { href: props.ctaButtonHero.content.link, className: `${styles.button} ${styles.button__flex}`, children: [_jsx("i", { className: `ri-information-line ${styles.button__icon}` }), props.ctaButtonHero.content.textButton] })] })] })] }));
};
export default CaseBeats3;
