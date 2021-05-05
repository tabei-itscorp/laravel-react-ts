import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserDetail = (props) => {

  const [user, setUser] = useState([]);

  useEffect(() => {
    getUser()
  }, []);

  const getUser = async () => {
    const response = await axios.get(`/api/user/${props.match.params.id}`);
    setUser(response.data.user);
  };

  return (
    <>
      <h1>User詳細ページ</h1>
      <p>{user.id}</p>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </>
  );
};
export default UserDetail;