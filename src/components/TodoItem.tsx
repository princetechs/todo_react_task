import React from 'react';

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

interface TodoItemProps {
    item: Todo;
    onRemove: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ item, onRemove }) => (
    <div className='bg-blue-100 p-4 text-center rounded-md'>
        <p className='font-bold text-lg'>ID: {item.id}</p>
        <p>Title: {item.title}</p>
        <p>Completed: {item.completed ? 'Yes' : 'No'}</p>
        <button
            onClick={() => onRemove(item.id)}
            className='mt-4 bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition'
        >
            Delete
        </button>
    </div>
);

export default TodoItem;
