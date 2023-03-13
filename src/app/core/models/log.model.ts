export interface Log {
  ID?: number,
  type: TypeAction,
  date: Date,
  payload: any,
}

export enum TypeAction {
  Get = 0,
  Post = 1,
  Put = 2,
  Delete = 3
}