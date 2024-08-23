import React, { useEffect, useState } from "react";
import UserRow from "./user-row";
import UserHead from "./user-head";
import UserModal from "./user-modal";

const UserList = () => {
  const [users, setUsers] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const getEmployeesData = async () => {
    const res = await fetch("http://localhost:8000/users");
    const { users } = await res.json();
    setUsers(users);
  };

  const createEmployee = async ({ newUser }) => {
    const res = await fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(...newUser),
    });
    const { user } = await res.json();
    setUsers([...users, user]);
  };

  const deleteEmployee = async (id) => {
    const res = await fetch(`http://localhost:8000/users/${id}`, {
      method: "DELETE",
    });

    const { employees } = await res.json();
    console.log("De", employees);
    // setUsers(deletedUser.filter((user) => user.eid !== id));
  };
  const show = () => setIsOpen(true);
  const hide = () => setIsOpen(false);

  useEffect(() => {
    getEmployeesData();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <UserHead />
        <UserModal isOpen={isOpen} close={hide} />
        <tbody>
          {users?.map((user) => (
            <UserRow user={user} deleteEmployee={deleteEmployee} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
