import React, { useState } from 'react';

type TodoFormProps = {
  addTodo: (title: string) => Promise<void>
}

const TodoForm = (todoFormProps: TodoFormProps) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // タスクの追加が完了したら入力値をクリア
    todoFormProps.addTodo(value).then(() => {
      setValue('');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <button type="submit">追加</button>
    </form>
  );
};
export default TodoForm;