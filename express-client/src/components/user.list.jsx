import React, { useEffect, useState } from "react";
import UserRow from "./user-row";
import UserHead from "./user-head";

const UserList = () => {
  const [users, setUsers] = useState();
  const getEmployeesData = async () => {
    const res = await fetch("http://localhost:8000/users");
    const { users } = await res.json();
    setUsers(users);
  };

  const createEmployee = async () => {
    const res = await fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: "Woody",
        lastname: "Light-Year",
        email: "woodyPride@gmail.com",
        position: "Sheriff",
      }),
    });
    const { user } = await res.json();
    console.log("Ae", user);
    setUsers([...users, user]);
  };

  const deleteEmployee = async (id) => {
    const res = await fetch(`http://localhost:8000/users/${id}`, {
      method: "DELETE",
    });
    const { user } = await res.json();
    setUsers(user.filter((user) => user.eid !== id));
  };

  useEffect(() => {
    getEmployeesData();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <UserHead />
        <tbody>
          {users?.map((user) => (
            <UserRow user={user} deleteEmployee={deleteEmployee} />
          ))}
        </tbody>
      </table>
      <div>
        <button
          onClick={createEmployee}
          className="btn btn-info btn-square btn-outline"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default UserList;
