import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import styles from "./EngineFormTravel1.module.css";
import "../reset.css";
export const EngineFormTravel1 = (props) => {
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
    return (_jsx("section", { className: styles.tourSearch, style: sectionContainerStyles, children: _jsx("div", { className: styles.container, children: _jsxs("form", { action: "", className: styles.tourSearchForm, children: [_jsxs("div", { className: styles.inputWrapper, children: [_jsx("label", { htmlFor: "destination", className: styles.inputLabel, children: "Search Destination" }), _jsx("input", { type: "text", name: "destination", id: "destination", required: true, placeholder: "Enter Destination", className: styles.inputField })] }), _jsxs("div", { className: styles.inputWrapper, children: [_jsx("label", { htmlFor: "people", className: styles.inputLabel, children: "Number of People" }), _jsx("input", { type: "number", name: "people", id: "people", required: true, placeholder: "Enter Number of People", className: styles.inputField })] }), _jsxs("div", { className: styles.inputWrapper, children: [_jsx("label", { htmlFor: "checkin", className: styles.inputLabel, children: "Check-in Date" }), _jsx("input", { type: "date", name: "checkin", id: "checkin", required: true, className: styles.inputField })] }), _jsxs("div", { className: styles.inputWrapper, children: [_jsx("label", { htmlFor: "checkout", className: styles.inputLabel, children: "Check-out Date" }), _jsx("input", { type: "date", name: "checkout", id: "checkout", required: true, className: styles.inputField })] }), _jsx("button", { type: "submit", className: styles.btnSecondary, children: "Inquire Now" })] }) }) }));
};
export default EngineFormTravel1;
