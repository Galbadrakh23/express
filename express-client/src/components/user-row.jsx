import React, { useState } from "react";

const UserRow = ({ users }) => {
  return (
    <>
      <tbody>
        {users?.map((user) => (
          <tr key={user.eid}>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <td>
              <div class="flex items-center gap-3">
                <div class="avatar">
                  <div class="mask mask-squircle h-12 w-12">
                    <img
                      src={user.profileImg}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div class="font-bold">{user.firstname}</div>
                </div>
              </div>
            </td>
            <td>
              <span class="badge badge-ghost badge-sm">{user.position}</span>
            </td>
            <td>
              <span>{user.email}</span>
            </td>
            <th>
              <button class="btn btn-outline btn-info btn-xs mx-2">Edit</button>
              <button class="btn btn-online btn-error btn-xs mx-2">
                Delete
              </button>
            </th>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </>
  );
};

export default UserRow;
