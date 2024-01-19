import React, { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<Todo[] | null>(null);

    const retrieveData = (): void => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((data: Todo[]) => setTodos(data))
            .catch((error) => console.error('Error fetching data:', error));
    };

    const removeItem = (id: number): void => {
        const confirmed = window.confirm('Are you sure you want to delete this item?');
        if (confirmed) {
            setTodos((prevTodos) => prevTodos!.filter((item) => item.id !== id));
        }
    };

    const addTodo = (newTodo: Todo): void => {
        setTodos((prevTodos) => {
            const maxId = prevTodos?.reduce((max, todo) => (todo.id > max ? todo.id : max), 0) || 0;
            const newId = maxId + 1;

            return [...(prevTodos || []), { ...newTodo, id: newId }];
        });
    };

    useEffect(() => {
        retrieveData();
    }, []);

    return (
        <div className='container mx-auto p-8'>
            <AddTodoForm onAddTodo={addTodo} />
            <div className='grid grid-cols-3 gap-4'>
                {todos &&
                    todos.map((item: Todo) => (
                        <TodoItem key={item.id} item={item} onRemove={removeItem} />
                    ))}
            </div>
        </div>
    );
};

export default TodoList;
