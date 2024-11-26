import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: true },
];

mock.onGet('/users').reply(200, users);
mock.onPost('/users').reply((config) => {
  const newUser = JSON.parse(config.data);
  users.push({ ...newUser, id: Date.now() });
  return [200, newUser];
});
mock.onPut('/users/:id').reply((config) => {
  const { id } = config.url.match(/\/users\/(\d+)/).groups;
  const updatedUser = JSON.parse(config.data);
  const index = users.findIndex((u) => u.id === +id);
  if (index !== -1) users[index] = updatedUser;
  return [200, updatedUser];
});
mock.onDelete('/users/:id').reply((config) => {
  const { id } = config.url.match(/\/users\/(\d+)/).groups;
  const index = users.findIndex((u) => u.id === +id);
  if (index !== -1) users.splice(index, 1);
  return [200];
});
