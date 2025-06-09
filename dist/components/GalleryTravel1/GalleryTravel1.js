import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import styles from "./GalleryTravel1.module.css";
import "../reset.css";
import Image from "next/image";
export const GalleryTravel1 = (props) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const sectionStyles = props.Section;
    const sectionContainerStyles = useMemo(() => {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return {
            backgroundColor: ((_b = (_a = sectionStyles === null || sectionStyles === void 0 ? void 0 : sectionStyles.styleData) === null || _a === void 0 ? void 0 : _a.backgroundColor) === null || _b === void 0 ? void 0 : _b.styleContent) || "#fff",
            margin: ((_d = (_c = sectionStyles === null || sectionStyles === void 0 ? void 0 : sectionStyles.styleData) === null || _c === void 0 ? void 0 : _c.margin) === null || _d === void 0 ? void 0 : _d.styleContent) || "0px 0px 0px 0px",
            padding: ((_f = (_e = sectionStyles === null || sectionStyles === void 0 ? void 0 : sectionStyles.styleData) === null || _e === void 0 ? void 0 : _e.padding) === null || _f === void 0 ? void 0 : _f.styleContent) || "0px 0px 0px 0px",
            borderRadius: ((_h = (_g = sectionStyles === null || sectionStyles === void 0 ? void 0 : sectionStyles.styleData) === null || _g === void 0 ? void 0 : _g.borderRadius) === null || _h === void 0 ? void 0 : _h.styleContent) ||
                "0px 0px 0px 0px",
        };
    }, [
        (_b = (_a = sectionStyles === null || sectionStyles === void 0 ? void 0 : sectionStyles.styleData) === null || _a === void 0 ? void 0 : _a.backgroundColor) === null || _b === void 0 ? void 0 : _b.styleContent,
        (_d = (_c = sectionStyles === null || sectionStyles === void 0 ? void 0 : sectionStyles.styleData) === null || _c === void 0 ? void 0 : _c.margin) === null || _d === void 0 ? void 0 : _d.styleContent,
        (_f = (_e = sectionStyles === null || sectionStyles === void 0 ? void 0 : sectionStyles.styleData) === null || _e === void 0 ? void 0 : _e.padding) === null || _f === void 0 ? void 0 : _f.styleContent,
        (_h = (_g = sectionStyles === null || sectionStyles === void 0 ? void 0 : sectionStyles.styleData) === null || _g === void 0 ? void 0 : _g.borderRadius) === null || _h === void 0 ? void 0 : _h.styleContent,
    ]);
    return (_jsx("section", { className: styles.gallery, id: "gallery", style: sectionContainerStyles, children: _jsxs("div", { className: styles.container, children: [_jsx("p", { className: styles.sectionSubtitle, children: "Photo Gallery" }), _jsx("h2", { className: styles.sectionTitle, children: "Photos from travellers" }), _jsx("p", { className: styles.sectionText, children: "Imagine a world painted with vibrant hues, captured not by professional lenses, but by the eyes of passionate explorers. Browse through the gallery and let your imagination take flight" }), _jsxs("ul", { className: styles.galleryList, children: [_jsx("li", { className: styles.galleryItem, children: _jsx("figure", { className: styles.galleryImage, children: _jsx(Image, { src: "https://i.postimg.cc/6qfpc2mw/gallery-1.jpg", alt: "gallery image", width: 100, height: 100 }) }) }), _jsx("li", { className: styles.galleryItem, children: _jsx("figure", { className: styles.galleryImage, children: _jsx(Image, { src: "https://i.postimg.cc/yY7ddjDN/gallery-2.jpg", alt: "gallery image", width: 100, height: 100 }) }) }), _jsx("li", { className: styles.galleryItem, children: _jsx("figure", { className: styles.galleryImage, children: _jsx(Image, { src: "https://i.postimg.cc/PrKq8DDQ/gallery-3.jpg", alt: "gallery image", width: 100, height: 100 }) }) }), _jsx("li", { className: styles.galleryItem, children: _jsx("figure", { className: styles.galleryImage, children: _jsx(Image, { src: "https://i.postimg.cc/13j5vZJg/gallery-4.jpg", alt: "gallery image", width: 100, height: 100 }) }) }), _jsx("li", { className: styles.galleryItem, children: _jsx("figure", { className: styles.galleryImage, children: _jsx(Image, { src: "https://i.postimg.cc/XvBNhDzs/gallery-5.jpg", alt: "gallery image", width: 100, height: 100 }) }) })] })] }) }));
};
export default GalleryTravel1;
