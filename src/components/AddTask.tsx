import React,{ useState } from 'react'
interface AddTaskProps {
    onAdd: (task: Task) => void;
  }
  
  interface Task {
    text: string;
    day: string;
    reminder: boolean;
  }
const AddTask:React.FC<AddTaskProps> = ({ onAdd }) => {
    const [text, setText] = useState<string>('') //we need to add our data type 
    const [day, setDay] = useState<string>('')
    const [reminder, setReminder] = useState<boolean>(false)

    const onSubmit = (e:React.FormEvent) => {
        e.preventDefault()

        if (!text) {
            alert('Please enter a text')
            return
        }
        onAdd({ text, day, reminder })
        setText('')
        setDay('')
        setReminder(false)
    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type='text' placeholder="Add task" value={text}
                    onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type='text' placeholder="Add Day & Time" value={day}
                    onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type='checkbox'
                    checked={reminder}
                
                    onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <input type='submit' value='Save Task' className="btn btn-block" />
        </form>
    )
}
export default AddTask;