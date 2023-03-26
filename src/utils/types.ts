export type CreateUserParams = {
  username: string;
  password: string;
};

export type UpdateUserParams = {
  username: string;
  password: string;
};

export type CreateUserProfileParam = {
  firstname: string;
  lastname: string;
  age: number;
  date_of_birth: string;
};

export type createUserPostParam = {
  title: string;
  description: string;
};

export type CreateTodoParam = {
  title: string;
  description: string;
};
