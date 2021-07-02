import axios from 'axios';

export const TODO_FILTER = {
  ACTIVE: 'active',
  COMPLETED: 'completed',
  ALL: 'all',
}
export type TodoFilterType = typeof TODO_FILTER[keyof typeof TODO_FILTER];

export type TodoType = {
  id: number,
  title: string,
  completed: boolean
}

export type AddTodoType = {
  title: string,
  completed: boolean
}

const getAll = async(): Promise<TodoType[]> => {
  const response = await axios.get('/api/todo/getAll');
  return response.data.data;
};

const add = async(addTodo: AddTodoType): Promise<TodoType> => {
  const response = await axios.post(`/api/todo/add`, addTodo);
  return response.data.data;
};

const update = async(id: number, updTodo: TodoType): Promise<TodoType> => {
  const response = await axios.put(`/api/todo/update/${id}`, updTodo);
  return response.data.data;
};

const _delete = async(id: number): Promise<number> => {
  await axios.delete(`/api/todo/delete/${id}`);
  return id;
};

export default { getAll, add, update, delete: _delete };