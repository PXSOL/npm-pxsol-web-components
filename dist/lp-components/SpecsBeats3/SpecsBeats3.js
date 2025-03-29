import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./SpecsBeats3.module.css";
import 'remixicon/fonts/remixicon.css';
import Image from "next/image";
export const SpecsBeats3 = (props) => {
    return (_jsxs("section", { className: `${styles.specs} ${styles.section} ${styles.grid}`, id: "specs", children: [_jsx("h2", { className: `${styles.section__title} ${styles.section__titleGradient}`, children: props.titleHero.content }), _jsxs("div", { className: `${styles.specs__container} ${styles.container} ${styles.grid}`, children: [_jsx("div", { className: `${styles.specs__content} ${styles.grid}`, children: props.groupSpecs.content.map((itemSpec, index) => {
                            return (_jsxs("div", { className: styles.specs__data, children: [_jsx("i", { className: `${itemSpec.iconNameClass.content} ${styles.specs__icon}` }), _jsx("h3", { className: styles.specs__title, children: itemSpec.specTitle.content }), _jsx("span", { className: styles.specs__subtitle, children: itemSpec.specDescription.content })] }, index));
                        }) }), _jsx("div", { children: _jsx(Image, { width: 700, height: 700, src: props.imgSection.imageSrc, alt: props.titleHero.name, className: styles.specs__img }) })] })] }));
};
export default SpecsBeats3;
