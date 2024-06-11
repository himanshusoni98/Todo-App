// src/EditTaskPopup.js
import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editTodo } from '../utilis/todoSlice';

const EditTaskPopup = ({ todo, open, onClose }) => {
    const [text, setText] = useState(todo.text);
    const dispatch = useDispatch();

    const handleEdit = () => {
        dispatch(editTodo({ id: todo.id, text }));
        onClose();
    };

    return (
        <Modal show={open} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleEdit}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditTaskPopup;
