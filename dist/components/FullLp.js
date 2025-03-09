"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FullLp = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
require("./index.css");
const Header_1 = __importDefault(require("./Header"));
const Hero_1 = __importDefault(require("./Hero"));
const Service_1 = __importDefault(require("./Service"));
const About_1 = __importDefault(require("./About"));
const Features_1 = __importDefault(require("./Features"));
const Pricing_1 = __importDefault(require("./Pricing"));
const Faq_1 = __importDefault(require("./Faq"));
const Cta_1 = __importDefault(require("./Cta"));
const Footer_1 = __importDefault(require("./Footer"));
const FullLp = () => {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Header_1.default, {}), (0, jsx_runtime_1.jsx)("main", { children: (0, jsx_runtime_1.jsxs)("article", { children: [(0, jsx_runtime_1.jsx)(Hero_1.default, {}), (0, jsx_runtime_1.jsx)(Service_1.default, {}), (0, jsx_runtime_1.jsx)(Pricing_1.default, {}), (0, jsx_runtime_1.jsx)(About_1.default, {}), (0, jsx_runtime_1.jsx)(Features_1.default, {}), (0, jsx_runtime_1.jsx)(Faq_1.default, {}), (0, jsx_runtime_1.jsx)(Cta_1.default, {})] }) }), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] }));
};
exports.FullLp = FullLp;
exports.default = exports.FullLp;
