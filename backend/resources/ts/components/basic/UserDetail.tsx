import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import axios from 'axios';
import { UserType } from './User';

type UserProps = RouteComponentProps<{id: string}>;

const UserDetail: React.FC<UserProps> = (props) => {

  const [user, setUser] = useState<UserType>();

  useEffect(() => {
    getUser()
  }, []);

  const getUser = async () => {
    const response = await axios.get(`/api/user/${props.match.params.id}`);
    // console.log(`user.name: ${response.data.user.name}`);
    setUser(response.data.user);
  };

  return (
    <>
      <h1>User詳細ページ</h1>
      <p>{user?.id}</p>
      <p>{user?.name}</p>
      <p>{user?.email}</p>
    </>
  );
};
export default UserDetail;