import { FaTimes } from 'react-icons/fa'
import React from 'react';
interface TaskProps {
    task: {
      id: number;
      text: string;
      day: string;
      reminder: boolean;
    };
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
  }
  
const Task :React.FC<TaskProps> =({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text}
                <FaTimes
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => onDelete(task.id)} /></h3>
            <p>{task.day}</p>
        </div>
    )
}
export default Task;
