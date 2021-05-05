import axios from 'axios';

const getAll = async() => {
  const response = await axios.get('/api/todo/getAll');
  return response.data.data;
};

const add = async(newTodo) => {
  const response = await axios.post(`/api/todo/add`, newTodo);
  return response.data.data;
};

const update = async(id, newTodo) => {
  const response = await axios.put(`/api/todo/update/${id}`, newTodo);
  return response.data.data;
};

const _delete = async(id) => {
  await axios.delete(`/api/todo/delete/${id}`);
  return id;
};

export default { getAll, add, update, delete: _delete };