"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetChat = exports.Cta = exports.About = exports.Hero = exports.Header = void 0;
require("./styles/index.css");
var Header_1 = require("./components/Header");
Object.defineProperty(exports, "Header", { enumerable: true, get: function () { return __importDefault(Header_1).default; } });
var Hero_1 = require("./components/Hero");
Object.defineProperty(exports, "Hero", { enumerable: true, get: function () { return __importDefault(Hero_1).default; } });
var About_1 = require("./components/About");
Object.defineProperty(exports, "About", { enumerable: true, get: function () { return __importDefault(About_1).default; } });
var Cta_1 = require("./components/Cta");
Object.defineProperty(exports, "Cta", { enumerable: true, get: function () { return __importDefault(Cta_1).default; } });
var WidgetChat_1 = require("./components/WidgetChat");
Object.defineProperty(exports, "WidgetChat", { enumerable: true, get: function () { return __importDefault(WidgetChat_1).default; } });
__exportStar(require("./componentList"), exports);
