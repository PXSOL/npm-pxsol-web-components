"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pricing = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Pricing = () => {
    const [isVisible, setIsVisible] = (0, react_1.useState)(false);
    const videoRef1 = (0, react_1.useRef)(null);
    const videoRef2 = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
                else {
                    setIsVisible(false);
                }
            });
        }, { threshold: 0.5 });
        const videoElements = [videoRef1.current, videoRef2.current];
        videoElements.forEach((video) => video && observer.observe(video));
        return () => {
            videoElements.forEach((video) => video && observer.unobserve(video));
        };
    }, []);
    (0, react_1.useEffect)(() => {
        var _a, _b, _c, _d;
        if (isVisible) {
            (_a = videoRef1.current) === null || _a === void 0 ? void 0 : _a.play();
            (_b = videoRef2.current) === null || _b === void 0 ? void 0 : _b.play();
        }
        else {
            (_c = videoRef1.current) === null || _c === void 0 ? void 0 : _c.pause();
            (_d = videoRef2.current) === null || _d === void 0 ? void 0 : _d.pause();
        }
    }, [isVisible]);
    return ((0, jsx_runtime_1.jsx)("section", { className: "pricing", id: "pricing", children: (0, jsx_runtime_1.jsxs)("div", { className: "container", children: [(0, jsx_runtime_1.jsxs)("div", { className: "pricing-content", children: [(0, jsx_runtime_1.jsx)("p", { className: "section-subtitle", children: "Conoce nuestro constructor" }), (0, jsx_runtime_1.jsx)("h2", { className: "h3 section-title", children: "Elippser Builder-1" }), (0, jsx_runtime_1.jsx)("p", { className: "section-text", children: "Mucho m\u00E1s que un simple constructor de sitios web. Te ofrece la libertad de dise\u00F1ar, gestionar y expandir tus proyectos digitales con facilidad. Desde blogs y e-commerce hasta sistemas completos con usuarios y productos, esta plataforma tiene todo lo que necesitas para llevar tu idea al siguiente nivel. \u00BFLo mejor? Funciona con tecnolog\u00EDa moderna, es f\u00E1cil de usar y est\u00E1 dise\u00F1ada para crecer contigo." }), (0, jsx_runtime_1.jsx)("button", { className: "btn btn-primary", children: "Comenzar Ahora" })] }), (0, jsx_runtime_1.jsxs)("figure", { className: "pricing-banner", children: [(0, jsx_runtime_1.jsx)("video", { ref: videoRef1, className: "first-video-view", loop: true, muted: true, src: "/present-builder.mp4" }), (0, jsx_runtime_1.jsx)("video", { ref: videoRef2, className: "back-blur-video-noview", loop: true, muted: true, src: "/present-builder.mp4" })] })] }) }));
};
exports.Pricing = Pricing;
exports.default = exports.Pricing;
