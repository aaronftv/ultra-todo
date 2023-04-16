import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Type your new todo</label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder="Type todo here"
            />
            <div className="TodoForm-buttonContainer">
            <button
                type="button"
                className="TodoForm-button TodoForm-button--cancel"
                onClick={onCancel}
            >
                Cancel
            </button>
            <button
                type="submit"
                className="TodoForm-button TodoForm-button--add"
            >
                Add
            </button>
            </div>
        </form>
    );
}

export { TodoForm };