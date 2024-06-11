// src/App.js
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Header from './component/Header';
import TaskInput from './component/TaskInput';
import TaskList from './component/TaskList';

function App() {
  return (
    <>
    <Header/>
    <Container className="mt-5">
    
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <h1 className="text-center mb-4">To-Do List</h1>
              <TaskInput />
              <TaskList />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
