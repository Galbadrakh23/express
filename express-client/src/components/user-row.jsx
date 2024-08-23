const UserRow = ({ user, deleteEmployee }) => {
  return (
    <tr key={user.eid}>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={user.profileImg} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{user.firstname}</div>
          </div>
        </div>
      </td>
      <td>
        <span className="badge badge-ghost badge-sm">{user.position}</span>
      </td>
      <td>
        <span>{user.email}</span>
      </td>
      <th>
        <button className="btn btn-outline btn-info btn-xs mx-2">Edit</button>
        <button
          onClick={deleteEmployee}
          className="btn btn-online btn-error btn-xs mx-2"
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

export default UserRow;
