const users = [{ id: 0, username: "Vasya", age: 25 }];

const root = {
  getAllUsers: () => {
    return users;
  },
  getUser: (id) => {
    return users.filter((user) => user.id === id);
  },
  createUser: (input) => {
    const user = {
      id: Date.now(),
      username: input.username,
      age: input.age,
    };
    users.push(user);
    return user;
  },
};

module.exports = root;
