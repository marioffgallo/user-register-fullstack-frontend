import { User } from "../models/user.model";

export const UsersListMock: User[] = [
  {
    ID: 1,
    name: 'Machado de Assis',
    email: 'machodo@gmail.com',
    age: 30,
    birthDate: new Date(),
  },
  {
    ID: 2,
    name: 'Arthur Conan',
    email: 'arthur@gmail.com',
    age: 44,
    birthDate: new Date(),
  },
  {
    ID: 3,
    name: 'Douglas Rodriges',
    email: 'douglas@yahoo.com',
    age: 88,
    birthDate: new Date(),
  },
  {
    ID: 4,
    name: 'Diego Oliveira',
    email: 'diego@hotmail.com',
    age: 18,
    birthDate: new Date(),
  },
]