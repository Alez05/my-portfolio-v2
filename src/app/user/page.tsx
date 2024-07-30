import React from 'react';
import { getUserList } from './action';

const UsersPage = async () => {
  const userList = await getUserList();

  return (
    <>
      <h1>Users page</h1>
      <ul>
        {userList.map((user) => (
          <li key={user.id}>
            <a href={`/user/${user.id}`}>{user.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
