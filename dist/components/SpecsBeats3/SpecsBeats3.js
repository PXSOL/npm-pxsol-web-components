import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useMemo } from "react";
import styles from "./SpecsBeats3.module.css";
// import "remixicon/fonts/remixicon.css";
import Image from "next/image";
export const SpecsBeats3 = React.memo((props) => {
    const sectionClass = `${styles.specs} ${styles.section} ${styles.grid}`;
    const titleClass = `${styles.section__title} ${styles.section__titleGradient}`;
    const containerClass = `${styles.specs__container} ${styles.container} ${styles.grid}`;
    const contentClass = `${styles.specs__content} ${styles.grid}`;
    const specsData = useMemo(() => {
        return props.groupSpecs.content.map((itemSpec, index) => (_jsxs("div", { className: styles.specs__data, children: [_jsx("i", { className: `${itemSpec.iconNameClass.content} ${styles.specs__icon}` }), _jsx("h3", { className: styles.specs__title, children: itemSpec.specTitle.content }), _jsx("span", { className: styles.specs__subtitle, children: itemSpec.specDescription.content })] }, index)));
    }, [props.groupSpecs.content]);
    return (_jsxs("section", { className: sectionClass, id: "specs", children: [_jsx("h2", { className: titleClass, children: props.titleHero.content }), _jsxs("div", { className: containerClass, children: [_jsx("div", { className: contentClass, children: specsData }), _jsx("div", { children: _jsx(Image, { width: 700, height: 700, src: props.imgSection.imageSrc, alt: props.titleHero.name, className: styles.specs__img, placeholder: "blur", blurDataURL: "/placeholder.png" }) })] })] }));
});
export default SpecsBeats3;
