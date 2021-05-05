import React, { useState, useMemo } from 'react';
import TodoFilter from './TodoFilter';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import useTodo from '../../hooks/useTodo';

const Top = () => {
  const {todos, addTodo, toggleTodo, deleteTodo} = useTodo();
  const [filter, setFilter] = useState('all');

  // 絞り込みラジオボタンのイベントハンドラ
  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  // 絞り込みを適用したTodo
  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'active':
        console.log('active');
        return todos.filter(todo => !todo.completed);
      case 'completed':
        console.log('completed');
        return todos.filter(todo => todo.completed);
      case 'all':
      default:
        console.log('default');
        return todos;
    }
  }, [todos, filter]);

  return (
    <>
      <h1>Todoリスト</h1>
      <TodoFilter
        selectedFilter={filter}
        handleFilter={handleFilter}
      />
      <TodoForm
        addTodo={addTodo}
      />
      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
};
export default Top;