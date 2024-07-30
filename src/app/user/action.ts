import type { TUser } from './type';

export const getUserList = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const userList: TUser[] = await res.json();

  return userList;
};
