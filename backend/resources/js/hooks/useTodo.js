import { useState, useEffect } from 'react';
import todoService from '../services/todos';

/**
 * Todoのstateと更新ロジックをもつフック
 */
export default function useTodo() {
  const [todos, setTodos] = useState([]);

  // コンポーネントがマウントされたらTodoを取得
  useEffect(() => {
    todoService.getAll().then(todos => {
      // 降順に表示
      setTodos(todos.reverse());
    });
  }, []);

  // タスクを追加
  const addTodo = (title) => {
    const newTodo = { title:title, completed:false };

    return todoService
      .add(newTodo)
      .then(addedTodo => {
        setTodos([addedTodo].concat(todos));
      });
  };

  // IDが一致したTodoの状態（作業中／完了）を更新
  const toggleTodo = (id, completed) => {
    const todo = todos.find(todo => todo.id === id);
    const newTodo = { ...todo, completed:!completed };

    // 更新し、更新が成功したらstateを更新
    todoService
      .update(id, newTodo)
      .then(updatedTodo => {
        const newTodos = todos.map(todo =>
          todo.id !== updatedTodo.id ? todo : updatedTodo
        );
        setTodos(newTodos);
      });
  };

  // IDが一致したTodoを削除
  const deleteTodo = (id) => {
    // 削除が成功したらstateを更新
    todoService
      .delete(id)
      .then(deletedTodoId => {
        const newTodos = todos.filter(todo => todo.id !== deletedTodoId);
        setTodos(newTodos);
      });
  };

  return { todos, addTodo, toggleTodo, deleteTodo };
};