import React, { useState, useMemo } from 'react';
import TodoFilter from './TodoFilter';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import useTodo from '../../hooks/useTodo';
import { TODO_FILTER, TodoFilterType } from '../../services/todos';

const Top = () => {
  const {todos, addTodo, toggleTodo, deleteTodo} = useTodo();
  const [filter, setFilter] = useState<TodoFilterType>(TODO_FILTER.ALL);

  // 絞り込みラジオボタンのイベントハンドラ
  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  // 絞り込みを適用したTodo
  const filteredTodos = useMemo(() => {
    switch (filter) {
      case TODO_FILTER.ACTIVE:
        console.log(TODO_FILTER.ACTIVE);
        return todos.filter(todo => !todo.completed);
      case TODO_FILTER.COMPLETED:
        console.log(TODO_FILTER.COMPLETED);
        return todos.filter(todo => todo.completed);
      case TODO_FILTER.ALL:
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