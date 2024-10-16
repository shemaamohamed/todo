import Container from "react-bootstrap/esm/Container";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './styles/Navtodo.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from "react";
import Stack from "react-bootstrap/Stack";
import Checkbox from "./components/Checkbox";
import { toast } from 'react-hot-toast';
import Checkremove from "./components/Checkremove";

function Todolist() {
    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null); // State for current index
    const [todo, setToDo] = useState(""); 
    const [todoList, setTodoList] = useState(() => {
        const savedTasks = localStorage.getItem('todo');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todoList)); 
    }, [todoList]); 

    const handleChange = (e) => {
        setToDo(e.target.value); 
    };

    const submitTodo = (e) => {
        e.preventDefault(); 
        const createdAt = Date.now();
        const createdAtDate = new Date(createdAt);
        const formattedDate = createdAtDate.toLocaleString();
        if (todo.trim() !== "") {
            setTodoList([...todoList, { text: todo, done: false, date: formattedDate }]); 
            setToDo("");  
        } else {
            toast.error('Please Enter Your Task ', {
                style: {
                  border: '1px solid rgb(111,171,230)',
                  padding: '16px',
                  color: 'rgb(111,171,230)',
                },
                iconTheme: {
                  primary: 'rgb(111,171,230)',
                  secondary: '#FFFAEE',
                },
            });
        }
    };

    const toggleTaskDone = (index) => {
        const updatedList = todoList.map((item, i) => 
            i === index ? { ...item, done: !item.done } : item  
        );
        setTodoList(updatedList);
        if (!todoList[index].done) {
            toast.success('You Did It!', {
                style: {
                  border: '1px solid rgb(111,171,230)',
                  padding: '16px',
                  color: 'rgb(111,171,230)',
                },
                iconTheme: {
                  primary: 'rgb(111,171,230)',
                  secondary: '#FFFAEE',
                },
            });
        }
    };

    const removeTodo = (index) => {
        const updatedList = todoList.filter((_, i) => i !== index);
        setTodoList(updatedList);
        handleClose();
        setCurrentIndex(null); // Reset the current index after removal
    };

    const handleClickOpen = (index) => {
        setCurrentIndex(index); // Set the current index
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container>
            <Row className="justify-content-md-center" style={{ height: '100vh', margin: 'auto', paddingTop: '10px' }}>
                <Col xs lg="4" className="todolist">
                    <Form onSubmit={submitTodo}>
                        <h1 style={{ textAlign: 'center', padding: '6px' }}>To Do List</h1>
                        <Form.Group className="mb-3" controlId="formBasicTask">
                            <Form.Control 
                                type="text"
                                name="task"  
                                placeholder="Write your plan"
                                onChange={handleChange}
                                value={todo}  
                            />
                        </Form.Group>
                    </Form>

                    <Stack gap={1}>
                        {todoList.length > 0 ? (
                            todoList.map((todo, index) => (
                                <>
                                <li 
                                    key={index}
                                    style={{
                                        backgroundColor: 'rgb(255, 218, 255)', 
                                        color: 'white',
                                        padding: '10px',
                                        listStyleType: 'none',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        justifyContent: 'space-between', 
                                        alignItems: 'center', 
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <Checkbox 
                                            isChecked={todo.done}  
                                            onChange={() => toggleTaskDone(index)}  
                                            id={`checkbox-${index}`}
                                        />
                                        <span>{todo.text}</span>
                                    </div>
                                    <Button 
                                        className="removetodo"
                                        size="sm" 
                                        onClick={(e) => {
                                            e.stopPropagation(); 
                                            handleClickOpen(index); 
                                        }}
                                    >
                                        X
                                    </Button>
                                    <Checkremove 
                                        name={currentIndex !== null ? todoList[currentIndex].text : ''} 
                                        open={open} 
                                        onClose={handleClose} 
                                        remove={() => removeTodo(currentIndex)} 
                                    />
                                </li>
                                <span className="datetodo"> {todo.date}</span>


                                </>
                            ))
                        ) : (
                            <h4 style={{ textAlign: 'center', padding: '6px' }}>No tasks</h4>
                        )}
                    </Stack>
                </Col>
            </Row>
        </Container>
    );
}

export default Todolist;
