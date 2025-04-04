import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useMemo } from "react";
import styles from "./ProductsBeats3.module.css";
import Image from "next/image";
export const ProductsBeats3 = React.memo((props) => {
    const sectionClass = `${styles.products} ${styles.section}`;
    const titleClass = `${styles.section__title} ${styles.section__titleGradient} ${styles.products__line}`;
    const containerClass = `${styles.products__container} ${styles.container} ${styles.grid}`;
    const buttonClass = `${styles.button} ${styles.button__flex} ${styles.products__button}`;
    const productCards = useMemo(() => {
        return props.groupProductsSection.content.map((itemProduct, index) => (_jsx("article", { className: styles.products__card, children: _jsxs("div", { className: styles.products__content, children: [_jsx(Image, { height: 65, width: 65, src: itemProduct.imgProduct.imageSrc, alt: itemProduct.ctaButtonHero.content.textButton, className: styles.products__img, loading: "lazy", placeholder: "blur", blurDataURL: "/placeholder.png" }), _jsxs("div", { className: styles.products__data, children: [_jsx("h3", { className: styles.products__title, children: itemProduct.ctaButtonHero.content.textButton }), _jsx("span", { className: styles.products__price, children: itemProduct.productPrice.content })] }), _jsx("button", { className: buttonClass, "aria-label": "Add to cart", children: "Add to cart" })] }) }, index)));
    }, [props.groupProductsSection.content]);
    return (_jsxs("section", { className: sectionClass, id: "products", children: [_jsx("h2", { className: titleClass, children: props.titleHero.content }), _jsx("div", { className: containerClass, children: productCards })] }));
});
export default ProductsBeats3;
