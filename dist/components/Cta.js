"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
export const Cta = () => {
    const [isVisible, setIsVisible] = useState(false);
    const videoRef1 = useRef(null);
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
        const videoElements = [videoRef1.current];
        videoElements.forEach((video) => video && observer.observe(video));
        return () => {
            videoElements.forEach((video) => video && observer.unobserve(video));
        };
    }, []);
    useEffect(() => {
        var _a, _b;
        if (isVisible) {
            (_a = videoRef1.current) === null || _a === void 0 ? void 0 : _a.play();
        }
        else {
            (_b = videoRef1.current) === null || _b === void 0 ? void 0 : _b.pause();
        }
    }, [isVisible]);
    return (_jsxs("section", { className: "cta", children: [_jsx("video", { ref: videoRef1, loop: true, muted: true, className: "video-background", src: "/video-cta.mp4" }), _jsx("div", { className: "container", children: _jsxs("div", { className: "cta-card", children: [_jsx("h2", { className: "cta-title", children: "Empieza y descubre todo lo que puedes crear." }), _jsxs("div", { className: "cta-button-wrapper", children: [_jsx("button", { className: "btn btn-primary", children: "Comenzar Ahora" }), _jsx("a", { href: "#faq", children: "Ver las preguntas frecuentes" })] })] }) })] }));
};
export default Cta;
