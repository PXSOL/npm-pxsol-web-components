"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cta = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Cta = () => {
    const [isVisible, setIsVisible] = (0, react_1.useState)(false);
    const videoRef1 = (0, react_1.useRef)(null);
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
        const videoElements = [videoRef1.current];
        videoElements.forEach((video) => video && observer.observe(video));
        return () => {
            videoElements.forEach((video) => video && observer.unobserve(video));
        };
    }, []);
    (0, react_1.useEffect)(() => {
        var _a, _b;
        if (isVisible) {
            (_a = videoRef1.current) === null || _a === void 0 ? void 0 : _a.play();
        }
        else {
            (_b = videoRef1.current) === null || _b === void 0 ? void 0 : _b.pause();
        }
    }, [isVisible]);
    return ((0, jsx_runtime_1.jsxs)("section", { className: "cta", children: [(0, jsx_runtime_1.jsx)("video", { ref: videoRef1, loop: true, muted: true, className: "video-background", src: "/video-cta.mp4" }), (0, jsx_runtime_1.jsx)("div", { className: "container", children: (0, jsx_runtime_1.jsxs)("div", { className: "cta-card", children: [(0, jsx_runtime_1.jsx)("h2", { className: "cta-title", children: "Empieza y descubre todo lo que puedes crear." }), (0, jsx_runtime_1.jsxs)("div", { className: "cta-button-wrapper", children: [(0, jsx_runtime_1.jsx)("button", { className: "btn btn-primary", children: "Comenzar Ahora" }), (0, jsx_runtime_1.jsx)("a", { href: "#faq", children: "Ver las preguntas frecuentes" })] })] }) })] }));
};
exports.Cta = Cta;
exports.default = exports.Cta;
