import { jsx as _jsx } from "react/jsx-runtime";
import React, { useMemo } from "react";
import styles from "./BrandsBeats3.module.css";
import Image from "next/image";
export const BrandsBeats3 = React.memo((props) => {
    const brandImages = useMemo(() => {
        return props.groupTextHero.content.map((item, index) => (_jsx(Image, { width: 200, height: 80, src: item.imgBrand.imageSrc, alt: item.brandName.name, className: styles.sponsor__img }, index)));
    }, [props.groupTextHero.content]);
    return (_jsx("section", { className: `${styles.sponsor} ${styles.section}`, children: _jsx("div", { className: `${styles.sponsor__container} ${styles.container} ${styles.grid}`, children: brandImages }) }));
});
export default BrandsBeats3;
