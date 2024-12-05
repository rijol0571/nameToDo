import React, { useContext } from 'react';
import { UserContext } from '../context/ UserContext';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';

const NewUser = () => {
  const { users, deleteUser } = useContext(UserContext);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Registered Users</h1>
      {users.map((user) => (
        <div key={user.id} className="flex items-center justify-between bg-white p-4 rounded shadow mb-2">
          <p>{user.name}</p>
          <div className="flex items-center gap-2">
            <button className="text-blue-500">
              <FaEdit />
            </button>
            <button onClick={() => deleteUser(user.id)} className="text-red-500">
              <MdDelete />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewUser;
