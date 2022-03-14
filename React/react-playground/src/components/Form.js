import { useState } from 'react'
import List from './List';

const Form = () => {

    const [task, setTask] = useState('');
    const [tasksList, setTasksList] = useState([]);

    function handleInput(e) {
        const handleTask = e.target.value
        setTask(handleTask)
    }

    function addTask(e) {
        e.preventDefault();

        if (task) {
            setTasksList([...tasksList, task]);
        }
        setTask('')
    }


    return (
        <div className='form-container'>
            <form>
                <input type='text' placeholder='add task' onChange={handleInput} value={task} />
                <button onClick={addTask}>+</button>
            </form>

            <List todoList={tasksList} />
        </div>
    )
}

export default Form;