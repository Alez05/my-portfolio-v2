import { getUser } from './action';

const UserID = async ({ params }: { params: { userId: string } }) => {
  const { userId } = params;
  const user = await getUser(userId);
  const {
    name,
    username,
    email,
    address: {
      city,
      geo: { lat, lng },
      street,
      suite,
      zipcode,
    },
  } = user;
  console.log(user);
  return (
    <div>
      <h1>User</h1>
      <p>id: {userId}</p>
      <p>name: {name}</p>
      <p>email: {email}</p>
      <p>username: {username}</p>
      <p>city: {city}</p>
    </div>
  );
};

export default UserID;
