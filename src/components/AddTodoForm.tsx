import React, { useState } from 'react';

interface AddTodoFormProps {
    onAddTodo: (newTodo: { userId: number; id: number; title: string; completed: boolean }) => void;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAddTodo }) => {
    const [newTodo, setNewTodo] = useState({ title: '', userId: 1 });

    const handleAddTodo = (): void => {
        if (newTodo.title.trim() !== '') {
            onAddTodo({
                userId: newTodo.userId,
                id: -1,
                title: newTodo.title,
                completed: false,
            });

            setNewTodo({ title: '', userId: 1 });
        }
    };

    return (
        <div className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>Add Todo</h2>
            <div className='flex items-center space-x-4'>
                <input
                    type='text'
                    placeholder='Enter todo title'
                    value={newTodo.title}
                    onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
                    className='p-2 border border-gray-300 rounded-md flex-1'
                />
                <button
                    onClick={handleAddTodo}
                    className='bg-green-500 text-white p-2 rounded-md'
                >
                    Add Todo
                </button>
            </div>
        </div>
    );
};

export default AddTodoForm;
