import React, { useState } from "react";

const UserModal = ({ isOpen, close, createEmployee }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");

  const handleSave = () => {
    createEmployee({ firstname, lastname, email, position });
  };

  return (
    <div>
      <dialog open={isOpen} className="modal">
        Modal
        <div className="modal">
          <div className="modal-box">
            <h3 className="text-lg font-bold">User input area</h3>
            <div className="flex flex-col gap-4 mt-6">
              <label class="input input-bordered flex items-center gap-2">
                Name
                <input
                  type="text"
                  class="grow"
                  placeholder="Daisy"
                  onChange={(e) => {
                    setFirstname(e.target.value);
                  }}
                />
              </label>
              <label class="input input-bordered flex items-center gap-2">
                Email
                <input
                  type="text"
                  class="grow"
                  placeholder="daisy@site.com"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </label>
              <label class="input input-bordered flex items-center gap-2">
                <input type="text" class="grow" placeholder="Search" />
                <kbd class="kbd kbd-sm">⌘</kbd>
                <kbd class="kbd kbd-sm">K</kbd>
              </label>
            </div>
            <div className="modal-action">
              <a href="#" className="btn" onClick={handleSave}>
                Save
              </a>
              <a href="#" className="btn" onClick={close}>
                Close
              </a>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UserModal;
