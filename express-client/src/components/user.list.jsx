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
  useEffect(() => {
    getEmployeesData();
  }, []);

  return (
    <div class="overflow-x-auto">
      <table class="table">
        <UserHead />
        <UserRow users={users} />
      </table>
    </div>
  );
};

export default UserList;
