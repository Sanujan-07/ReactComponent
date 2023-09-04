"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Task_1 = __importDefault(require("./Task"));
const react_1 = __importDefault(require("react"));
const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null, tasks.map((task, index) => (react_1.default.createElement(Task_1.default, { key: index, task: task, onDelete: onDelete, onToggle: onToggle })))));
};
exports.default = Tasks;
