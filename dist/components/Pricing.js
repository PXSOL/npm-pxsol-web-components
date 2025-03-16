"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
export const Pricing = () => {
    const [isVisible, setIsVisible] = useState(false);
    const videoRef1 = useRef(null);
    const videoRef2 = useRef(null);
    useEffect(() => {
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
    useEffect(() => {
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
    return (_jsx("section", { className: "pricing", id: "pricing", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "pricing-content", children: [_jsx("p", { className: "section-subtitle", children: "Conoce nuestro constructor" }), _jsx("h2", { className: "h3 section-title", children: "Elippser Builder-1" }), _jsx("p", { className: "section-text", children: "Mucho m\u00E1s que un simple constructor de sitios web. Te ofrece la libertad de dise\u00F1ar, gestionar y expandir tus proyectos digitales con facilidad. Desde blogs y e-commerce hasta sistemas completos con usuarios y productos, esta plataforma tiene todo lo que necesitas para llevar tu idea al siguiente nivel. \u00BFLo mejor? Funciona con tecnolog\u00EDa moderna, es f\u00E1cil de usar y est\u00E1 dise\u00F1ada para crecer contigo." }), _jsx("button", { className: "btn btn-primary", children: "Comenzar Ahora" })] }), _jsxs("figure", { className: "pricing-banner", children: [_jsx("video", { ref: videoRef1, className: "first-video-view", loop: true, muted: true, src: "/present-builder.mp4" }), _jsx("video", { ref: videoRef2, className: "back-blur-video-noview", loop: true, muted: true, src: "/present-builder.mp4" })] })] }) }));
};
export default Pricing;
