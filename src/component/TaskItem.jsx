// src/TaskItem.js
import React, { useState } from 'react';
import { Badge, Button, Form, ListGroup } from 'react-bootstrap';
import { BsPencilSquare, BsTrash } from 'react-icons/bs'; // Import Bootstrap icons from react-icons
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleComplete } from '../utilis/todoSlice';
import EditTaskPopup from './EditTaskPopup';

const TaskItem = ({ todo }) => {
    const dispatch = useDispatch();
    const [editOpen, setEditOpen] = useState(false);

    const handleToggleComplete = () => {
        dispatch(toggleComplete(todo.id));
    };

    const handleDelete = () => {
        dispatch(deleteTodo(todo.id));
    };

    const handleEdit = () => {
        setEditOpen(true);
    };

    return (
        <>
            <ListGroup.Item className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <Form.Check
                        type="checkbox"
                        checked={todo.completed}
                        onChange={handleToggleComplete}
                        className="me-3"
                    />
                    <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.text}
                    </span>
                    {todo.completed && (
                        <Badge bg="success" className="ms-2">
                            Completed
                        </Badge>
                    )}
                </div>
                <div>
                    <Button variant="warning" size="sm" onClick={handleEdit} className="me-2">
                        <BsPencilSquare />
                    </Button>
                    <Button variant="danger" size="sm" onClick={handleDelete}>
                        <BsTrash />
                    </Button>
                </div>
            </ListGroup.Item>
            {editOpen && <EditTaskPopup todo={todo} open={editOpen} onClose={() => setEditOpen(false)} />}
        </>
    );
};

export default TaskItem;
