import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import exp from 'constants';

export type UserType = {
  id: number
  name: string
  email: string
  email_verified_at: Date
  password: string
};

const User = () => {

  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    getUsers()
  }, []);

  const getUsers = async () => {
    const response = await axios.get('/api/user');
    setUsers(response.data.users);
  };

  return (
    <>
      <h1>Userページ</h1>
      <ul>
        {users.map((user) =>
        <li key={user.id}>
          {user.name}
          <Link to={`/basic/user/${user.id}`}>
            詳細
          </Link>
        </li>)}
      </ul>
    </>
  );
};
export default User;