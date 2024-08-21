const express = require("express");
const cors = require("cors");

const fs = require("fs");

const app = express();
app.use(cors()); // Манай хаягт хаанаас хандаж болно
app.use(express.json()); // middleware

app.get("/users", (req, res) => {
  const data = fs.readFileSync("./users.json", { encoding: "utf8" });
  const obData = JSON.parse(data);
  console.log("Data", data);
  res.status(200).json({ users: obData.employees });
});

app.post("/users", (req, res) => {
  console.log("BODY", req.body);

  const data = fs.readFileSync("./users.json", { encoding: "utf8" });
  const { employees: users } = JSON.parse(data);
  const newUser = {
    eid: `${users.length + 1}`,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    position: req.body.position,
  };
  users.push(newUser);
  fs.writeFileSync("./users.json", JSON.stringify({ employees: users }));

  res.status(201).json({ user: newUser });
});

app.put("/users/:userId", (req, res) => {
  const data = fs.readFileSync("./users.json", { encoding: "utf8" });
  const { employees: users } = JSON.parse(data);

  const findIndex = users.findIndex((user) => user.eid === req.params.userId);

  if (findIndex > -1) {
    const updatedUser = {
      eid: users[findIndex].eid,
      firstname: req.body.firstname || users[findIndex].firstname,
      lastname: req.body.lastname || users[findIndex].lastname,
      email: req.body.email || users[findIndex].email,
      position: req.body.position || users[findIndex].position,
    };
    users[findIndex] = updatedUser;
    fs.writeFileSync("./users.json", JSON.stringify({ employees: users }));
    res.status(200).json({ user: updatedUser });
  } else {
    res.status(400).json({ message: "Not found user id" });
  }
});

// app.patch("/", (req, res) => {
//   res.send("Patch Request is successfully");
// });

app.delete("/users/:id", (req, res) => {
  const data = fs.readFileSync("./users.json", { encoding: "utf8" });
  const { employees: users } = JSON.parse(data);

  const findIndex = users.findIndex((user) => user.eid == req.params.id);

  if (findIndex === -1) {
    return res.status(400).json({ message: "Not found user id" });
  }
  const deletedUser = users.splice(findIndex, 1)[0];
  fs.writeFileSync("./users.json", JSON.stringify({ employees: users }));
  res.status(200).json({ user: deletedUser });
});

app.listen(8000, () => {
  console.log("Server is running at localhost:8000");
});
