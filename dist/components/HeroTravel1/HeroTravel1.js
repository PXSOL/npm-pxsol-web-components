import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./HeroTravel1.module.css";
export const HeroTravel1 = (props) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    console.log("Props de Hero travel 1", props);
    // Accedemos a las props directamente por su nombre
    const titleHero = props.Title;
    const textHero = props.Text;
    const ctaButtonHero = props["Cta button"];
    return (_jsx("section", { className: styles.hero, id: "home", children: _jsxs("div", { className: styles.container, children: [_jsx("h2", { className: styles.heroTitle, style: {
                        color: ((_b = (_a = titleHero === null || titleHero === void 0 ? void 0 : titleHero.styleData) === null || _a === void 0 ? void 0 : _a.titleColor) === null || _b === void 0 ? void 0 : _b.styleContent) || '#fff',
                        fontSize: ((_d = (_c = titleHero === null || titleHero === void 0 ? void 0 : titleHero.styleData) === null || _c === void 0 ? void 0 : _c.titleSize) === null || _d === void 0 ? void 0 : _d.styleContent) || '70px'
                    }, children: _jsx("b", { children: (titleHero === null || titleHero === void 0 ? void 0 : titleHero.content) || 'Hospedate en Hotel Demo' }) }), _jsx("p", { className: styles.heroText, style: {
                        color: ((_f = (_e = textHero === null || textHero === void 0 ? void 0 : textHero.styleData) === null || _e === void 0 ? void 0 : _e.titleColor) === null || _f === void 0 ? void 0 : _f.styleContent) || '#fff',
                        fontSize: ((_h = (_g = textHero === null || textHero === void 0 ? void 0 : textHero.styleData) === null || _g === void 0 ? void 0 : _g.titleSize) === null || _h === void 0 ? void 0 : _h.styleContent) || '12px'
                    }, children: (textHero === null || textHero === void 0 ? void 0 : textHero.content) || 'En Hotel Demo, combinamos confort, estilo y atención personalizada para que vivas una estadía inolvidable. Disfrutá de nuestras habitaciones, desayuno casero y una ubicación privilegiada. Bienvenido al descanso que merecés' }), _jsx("div", { className: styles.btnGroup, children: _jsx("button", { className: styles.btnPrimary, style: {
                            color: ((_k = (_j = ctaButtonHero === null || ctaButtonHero === void 0 ? void 0 : ctaButtonHero.styleData) === null || _j === void 0 ? void 0 : _j.textColor) === null || _k === void 0 ? void 0 : _k.styleContent) || '#fff',
                            backgroundColor: ((_m = (_l = ctaButtonHero === null || ctaButtonHero === void 0 ? void 0 : ctaButtonHero.styleData) === null || _l === void 0 ? void 0 : _l.backgroundColor) === null || _m === void 0 ? void 0 : _m.styleContent) || '#fff',
                            fontSize: ((_p = (_o = ctaButtonHero === null || ctaButtonHero === void 0 ? void 0 : ctaButtonHero.styleData) === null || _o === void 0 ? void 0 : _o.buttonTextSize) === null || _p === void 0 ? void 0 : _p.styleContent) || '14px'
                        }, onClick: () => { var _a; return window.location.href = ((_a = ctaButtonHero === null || ctaButtonHero === void 0 ? void 0 : ctaButtonHero.content) === null || _a === void 0 ? void 0 : _a.link) || '#'; }, children: ((_q = ctaButtonHero === null || ctaButtonHero === void 0 ? void 0 : ctaButtonHero.content) === null || _q === void 0 ? void 0 : _q.textButton) || 'Offer' }) })] }) }));
};
export default HeroTravel1;
