// src/TaskList.js
import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

const TaskList = () => {
    const todos = useSelector((state) => state.todos);

    return (
        <ListGroup>
            {todos.map((todo) => (
                <TaskItem key={todo.id} todo={todo} />
            ))}
        </ListGroup>
    );
};

export default TaskList;
