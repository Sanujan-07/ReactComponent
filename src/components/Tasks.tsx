import Task from "./Task";
import React from 'react';
interface TasksProps {
    tasks: Array<{
      id: number;
      text: string;
      day: string;
      reminder: boolean;
    }>;
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
  }
const Tasks : React.FC<TasksProps>= ({ tasks, onDelete, onToggle }) => {

    return (

        <>
            {tasks.map((task, index) => (
                <Task
                    key={index}
                    task={task}
                    onDelete={onDelete}
                    onToggle={onToggle}
                />
            ))}
        </>

    )
}
export default Tasks;

