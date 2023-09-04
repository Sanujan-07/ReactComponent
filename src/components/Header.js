"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = __importDefault(require("prop-types"));
const Button_1 = __importDefault(require("./Button"));
const react_1 = __importDefault(require("react"));
const Header = ({ title, onAdd, showAdd }) => {
    return (react_1.default.createElement("header", { className: 'header' },
        react_1.default.createElement("h1", null, title),
        react_1.default.createElement(Button_1.default, { color: showAdd ? 'red' : 'green', text: showAdd ? 'Close' : 'Add', onClick: onAdd })));
};
Header.defaultProps = {
    title: 'This test react app'
};
Header.propTypes = {
    title: prop_types_1.default.string.isRequired,
};
exports.default = Header;
