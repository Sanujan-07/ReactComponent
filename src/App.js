"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Header_1 = __importDefault(require("./components/Header"));
const Tasks_1 = __importDefault(require("./components/Tasks"));
const react_router_dom_1 = require("react-router-dom");
const AddTask_1 = __importDefault(require("./components/AddTask"));
const Footer_1 = __importDefault(require("./components/Footer"));
const About_1 = __importDefault(require("./components/About"));
const react_2 = __importDefault(require("react"));
function App() {
    const [showAddTask, setShowAddTask] = (0, react_1.useState)(false);
    const [tasks, setTasks] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        const getTasks = () => __awaiter(this, void 0, void 0, function* () {
            const tasksFromServer = yield fetchTasks();
            setTasks(tasksFromServer);
        });
        getTasks();
    }, []);
    // fetch data
    const fetchTasks = () => __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch("http://localhost:5000/tasks");
        const data = yield res.json();
        return data;
    });
    // fetch data
    const fetchTask = (id) => __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`http://localhost:5000/tasks/${id}`);
        const data = yield res.json();
        return data;
    });
    // Add task
    const addTask = (task) => __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield fetch("http://localhost:5000/tasks", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(task),
            });
            if (!res.ok) {
                // Handle errors here if needed
                throw new Error("Failed to add task");
            }
            const data = yield res.json();
            setTasks([...tasks, data]);
        }
        catch (error) {
            // Handle any errors that occurred during the fetch or processing
            console.error("Error adding task:", error);
        }
    });
    //delete task
    const deleteTask = (id) => __awaiter(this, void 0, void 0, function* () {
        yield fetch(`http://localhost:5000/tasks/${id}`, {
            method: "DELETE",
        });
        setTasks(tasks.filter((task) => task.id !== id));
    });
    // Toggle Reminder
    const toggleRemider = (id) => __awaiter(this, void 0, void 0, function* () {
        const taskToToggle = yield fetchTask(id);
        const updTask = Object.assign(Object.assign({}, taskToToggle), { reminder: !taskToToggle.reminder });
        const res = yield fetch(`http://localhost:5000/tasks/${id}`, {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ updTask }),
        });
        const data = yield res.json();
        setTasks(tasks.map((task) => task.id === id ? Object.assign(Object.assign({}, task), { reminder: data.reminder }) : task));
    });
    return (react_2.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_2.default.createElement("div", { className: "container" },
            react_2.default.createElement(Header_1.default, { onAdd: () => setShowAddTask(!showAddTask), showAdd: showAddTask }),
            react_2.default.createElement(react_router_dom_1.Routes, null,
                react_2.default.createElement(react_router_dom_1.Route, { path: "/", element: react_2.default.createElement(react_2.default.Fragment, null,
                        showAddTask && react_2.default.createElement(AddTask_1.default, { onAdd: addTask }),
                        tasks.length > 0 ? (react_2.default.createElement(Tasks_1.default, { tasks: tasks, onDelete: deleteTask, onToggle: toggleRemider })) : ("no task to show")) }),
                react_2.default.createElement(react_router_dom_1.Route, { path: "/about", element: react_2.default.createElement(About_1.default, null) })),
            react_2.default.createElement(Footer_1.default, null))));
}
exports.default = App;
