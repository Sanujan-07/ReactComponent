"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const react_1 = __importDefault(require("react"));
const Footer = () => {
    return (react_1.default.createElement("footer", null,
        react_1.default.createElement("p", null, "copyright \u00A9 2023"),
        react_1.default.createElement(react_router_dom_1.Link, { to: "/about" }, "about")));
};
exports.default = Footer;
