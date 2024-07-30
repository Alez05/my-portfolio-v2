'use server';
import type { TUser } from '../type';

export const getUser = async (userID: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userID}`
  );
  const user: TUser = await res.json();

  return user;
};
