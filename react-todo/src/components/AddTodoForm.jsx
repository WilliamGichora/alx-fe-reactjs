import { useState } from "react";

const AddTodoForm = ({ addTodo }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                placeholder="Add Todo"
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Add Todo</button>
        </form>
    );
};
export default AddTodoForm;