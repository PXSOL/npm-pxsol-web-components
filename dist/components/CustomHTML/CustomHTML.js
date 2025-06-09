import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./CustomHTML.module.css";
export const CustomHTML = (props) => {
    var _a, _b, _c;
    // Extract content from the props structure that comes from the system
    // The props come with numeric indices like "0", "1", "2"
    const propsValues = Object.values(props);
    const htmlProp = propsValues.find((prop) => (prop === null || prop === void 0 ? void 0 : prop.dataType) === "html");
    const htmlContent = ((_a = htmlProp === null || htmlProp === void 0 ? void 0 : htmlProp.content) === null || _a === void 0 ? void 0 : _a.htmlContent) || "";
    const containerWidth = ((_c = (_b = htmlProp === null || htmlProp === void 0 ? void 0 : htmlProp.styleData) === null || _b === void 0 ? void 0 : _b.containerWidth) === null || _c === void 0 ? void 0 : _c.styleContent) || "100%";
    const createMarkup = () => {
        return { __html: htmlContent };
    };
    const containerStyle = {
        width: containerWidth,
        minHeight: htmlContent.trim() ? "auto" : "100px",
        border: !htmlContent.trim() ? "2px dashed #ddd" : "none",
        borderRadius: "8px",
        position: "relative",
    };
    return (_jsxs("div", { className: styles.customHtmlContainer, style: containerStyle, "data-custom-html": "true", children: [_jsx("div", { dangerouslySetInnerHTML: createMarkup(), style: {
                    minHeight: !htmlContent.trim() ? "60px" : "auto",
                    width: "100%",
                } }), !htmlContent.trim() && (_jsx("div", { className: styles.placeholderOverlay, children: _jsxs("div", { className: styles.placeholderContent, children: [_jsx("div", { className: styles.placeholderIcon, children: _jsxs("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [_jsx("path", { d: "M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H15.8C16.9201 21 17.4802 21 17.908 20.782C18.2843 20.5903 18.5903 20.2843 18.782 19.908C19 19.4802 19 18.9201 19 17.8V9M13 3L19 9M13 3V9H19", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("path", { d: "M9 13H15M9 17H12", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })] }) }), _jsx("h3", { children: "Custom HTML" }), _jsx("p", { children: "Start typing HTML to see your content here." })] }) }))] }));
};
export default CustomHTML;
