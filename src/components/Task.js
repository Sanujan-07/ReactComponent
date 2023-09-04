"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fa_1 = require("react-icons/fa");
const react_1 = __importDefault(require("react"));
const Task = ({ task, onDelete, onToggle }) => {
    return (react_1.default.createElement("div", { className: `task ${task.reminder ? 'reminder' : ''}`, onDoubleClick: () => onToggle(task.id) },
        react_1.default.createElement("h3", null,
            task.text,
            react_1.default.createElement(fa_1.FaTimes, { style: { color: 'red', cursor: 'pointer' }, onClick: () => onDelete(task.id) })),
        react_1.default.createElement("p", null, task.day)));
};
exports.default = Task;
