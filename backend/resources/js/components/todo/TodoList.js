import React from 'react';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {

  console.log(JSON.stringify(todos));

  const todoList = todos.map(todo => {
    const label = todo.completed ? '済' : '作業中';

    return (
      <tr key={todo.id}>
        <td>{todo.title}</td>
        <td>
          <button onClick={() => toggleTodo(todo.id, todo.completed)}>
            {label}
          </button>
        </td>
        <td>
          <button onClick={() => deleteTodo(todo.id)}>
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