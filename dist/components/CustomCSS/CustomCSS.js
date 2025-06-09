import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import styles from "./CustomCSS.module.css";
export const CustomCSS = (props) => {
    var _a, _b, _c;
    // Extract content from the props structure that comes from the system
    // The props come with numeric indices like "0", "1", "2"
    const propsValues = Object.keys(props).map(key => props[key]);
    const cssProp = propsValues.find((prop) => (prop === null || prop === void 0 ? void 0 : prop.dataType) === "css");
    const cssContent = ((_a = cssProp === null || cssProp === void 0 ? void 0 : cssProp.content) === null || _a === void 0 ? void 0 : _a.cssContent) || "/* Add your CSS here */";
    const indicatorColor = ((_c = (_b = cssProp === null || cssProp === void 0 ? void 0 : cssProp.styleData) === null || _b === void 0 ? void 0 : _b.indicatorColor) === null || _c === void 0 ? void 0 : _c.styleContent) || "#666";
    const styleElementRef = useRef(null);
    // Function to get the correct document (iframe or main)
    const getTargetDocument = () => {
        // Check if we're inside an iframe
        if (window.parent !== window) {
            return window.document;
        }
        return document;
    };
    useEffect(() => {
        const targetDocument = getTargetDocument();
        // Create style element with unique ID
        const styleId = "custom-css-" + Math.random().toString(36).substr(2, 9);
        // Remove existing style element
        if (styleElementRef.current) {
            styleElementRef.current.remove();
        }
        // Create new style element if there's CSS content
        if (cssContent.trim() && cssContent !== "/* Add your CSS here */") {
            const styleElement = targetDocument.createElement("style");
            styleElement.id = styleId;
            styleElement.textContent = cssContent;
            targetDocument.head.appendChild(styleElement);
            styleElementRef.current = styleElement;
        }
        // Cleanup function
        return () => {
            if (styleElementRef.current) {
                styleElementRef.current.remove();
                styleElementRef.current = null;
            }
        };
    }, [cssContent]);
    return (_jsx("div", { className: styles.customCssContainer, children: _jsxs("div", { className: styles.cssIndicator, style: { color: indicatorColor }, children: [_jsxs("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [_jsx("path", { d: "M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H15.8C16.9201 21 17.4802 21 17.908 20.782C18.2843 20.5903 18.5903 20.2843 18.782 19.908C19 19.4802 19 18.9201 19 17.8V9M13 3L19 9M13 3V9H19", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("path", { d: "M9 13H15M9 17H12", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })] }), _jsx("span", { children: "CSS Styles Active" }), cssContent.trim() && cssContent !== "/* Add your CSS here */" && (_jsx("span", { className: styles.activeIndicator, children: "\u25CF" }))] }) }));
};
export default CustomCSS;
