import bcryptjs from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcryptjs.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Prashant Paudel",
    email: "prashant@email.com",
    password: bcryptjs.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "Prashanna Tiwari",
    email: "prashanna@email.com",
    password: bcryptjs.hashSync("123456", 10),
    isAdmin: false,
  },
];

export default users;
