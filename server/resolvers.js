const users = [
  {
    id: 1,
    name: 'Bob',
    age: 32,
  },
  {
    id: 2,
    name: 'Alice',
    age: 28,
  },
  {
    id: 3,
    name: 'Chuck',
    age: 28,
  },
];

const resolvers = {
  Query: {
    users: (_, params) => {
      if (params && params.age) return users.filter(user => user.age === params.age);
      return users;
    }
  },
};

module.exports = resolvers;
