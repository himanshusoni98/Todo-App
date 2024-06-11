// src/TaskInput.js
import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addTodo } from '../utilis/todoSlice';


const TaskInput = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (text.trim().length > 0) {
            dispatch(addTodo(text));
            setText('');
        }
    };

    return (
        <Form className="mb-4">
            <InputGroup>
                <Form.Control
                    type="text"
                    placeholder="Enter a new task"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
                />
                <Button variant="primary" onClick={handleAddTodo}>
                    Add Task
                </Button>
            </InputGroup>
        </Form>
    );
};

export default TaskInput;
