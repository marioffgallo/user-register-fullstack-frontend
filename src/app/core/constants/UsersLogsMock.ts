import { Log } from "../models/log.model";

export const UsersLogsMock: Log[] = [
  {
    id: 1,
    action: "GET",
    date: new Date('2000-01-01'),
    payload: "Busca no banco de dados", 
  },
  {
    id: 2,
    action: "POST",
    date: new Date('2009-04-11'),
    payload: "Criado um usuário", 
  },
]