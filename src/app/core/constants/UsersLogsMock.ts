import { Log } from "../models/log.model";

export const UsersLogsMock: Log[] = [
  {
    id: 1,
    type: "GET",
    date: new Date(),
    payload: "Busca no banco de dados", 
  },
  {
    id: 2,
    type: "POST",
    date: new Date(),
    payload: "Criado um usuário", 
  },
]