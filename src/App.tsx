import React from 'react';
import TodoList from './components/TodoList'

const App: React.FC = () => {
  return (
    <div>
      <h1 className='text-4xl font-semibold text-center mb-8'>Todo App</h1>
      <TodoList />
    </div>
  );
};

export default App;
