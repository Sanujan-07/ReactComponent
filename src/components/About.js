"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const react_1 = __importDefault(require("react"));
const About = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h4", null, "version 2.0"),
        react_1.default.createElement(react_router_dom_1.Link, { to: "/" }, "Go Back")));
};
exports.default = About;
