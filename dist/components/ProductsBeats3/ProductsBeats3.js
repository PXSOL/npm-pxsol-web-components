import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./ProductsBeats3.module.css";
import Image from "next/image";
export const ProductsBeats3 = (props) => {
    return (_jsxs("section", { className: `${styles.products} ${styles.section}`, id: "products", children: [_jsx("h2", { className: `${styles.section__title} ${styles.section__titleGradient} ${styles.products__line}`, children: props.titleHero.content }), _jsx("div", { className: `${styles.products__container} ${styles.container} ${styles.grid}`, children: props.groupProductsSection.content.map((itemProduct, index) => {
                    return (_jsx("article", { className: styles.products__card, children: _jsxs("div", { className: styles.products__content, children: [_jsx(Image, { height: 300, width: 300, src: itemProduct.imgProduct.imageSrc, alt: itemProduct.ctaButtonHero.content.textButton, className: styles.products__img }), _jsx("h3", { className: styles.products__title, children: itemProduct.ctaButtonHero.content.textButton }), _jsx("span", { className: styles.products__price, children: itemProduct.productPrice.content }), _jsx("button", { className: `${styles.button} ${styles.button__flex} ${styles.products__button}`, children: _jsx("i", { className: `ri-shopping-bag-line ${styles.button__icon}` }) })] }) }, index));
                }) })] }));
};
export default ProductsBeats3;
