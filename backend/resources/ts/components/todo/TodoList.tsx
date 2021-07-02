import React from 'react';
import { TodoType } from '../../services/todos';

type TodoListProps = {
  todos: TodoType[],
  toggleTodo: (id: number, completed: boolean) => void,
  deleteTodo: (id: number) => void
}

const TodoList = (todoListProps: TodoListProps) => {

  console.log(JSON.stringify(todoListProps.todos));

  const todoList = todoListProps.todos.map(todo => {
    const label = todo.completed ? '済' : '作業中';

    return (
      <tr key={todo.id}>
        <td>{todo.title}</td>
        <td>
          <button onClick={() => todoListProps.toggleTodo(todo.id, todo.completed)}>
            {label}
          </button>
        </td>
        <td>
          <button onClick={() => todoListProps.deleteTodo(todo.id)}>
            削除
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <table className="table mt-5">
        <tbody>{todoList}</tbody>
      </table>
    </div>
);
};
export default TodoList;