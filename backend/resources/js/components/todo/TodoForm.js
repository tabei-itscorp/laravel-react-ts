import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // タスクの追加が完了したら入力値をクリア
    addTodo(value).then(() => {
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