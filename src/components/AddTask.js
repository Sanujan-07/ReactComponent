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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const AddTask = ({ onAdd }) => {
    const [text, setText] = (0, react_1.useState)(''); //we need to add our data type 
    const [day, setDay] = (0, react_1.useState)('');
    const [reminder, setReminder] = (0, react_1.useState)(false);
    const onSubmit = (e) => {
        e.preventDefault();
        if (!text) {
            alert('Please enter a text');
            return;
        }
        onAdd({ text, day, reminder });
        setText('');
        setDay('');
        setReminder(false);
    };
    return (react_1.default.createElement("form", { className: "add-form", onSubmit: onSubmit },
        react_1.default.createElement("div", { className: "form-control" },
            react_1.default.createElement("label", null, "Task"),
            react_1.default.createElement("input", { type: 'text', placeholder: "Add task", value: text, onChange: (e) => setText(e.target.value) })),
        react_1.default.createElement("div", { className: "form-control" },
            react_1.default.createElement("label", null, "Day & Time"),
            react_1.default.createElement("input", { type: 'text', placeholder: "Add Day & Time", value: day, onChange: (e) => setDay(e.target.value) })),
        react_1.default.createElement("div", { className: "form-control form-control-check" },
            react_1.default.createElement("label", null, "Set Reminder"),
            react_1.default.createElement("input", { type: 'checkbox', checked: reminder, onChange: (e) => setReminder(e.currentTarget.checked) })),
        react_1.default.createElement("input", { type: 'submit', value: 'Save Task', className: "btn btn-block" })));
};
exports.default = AddTask;
