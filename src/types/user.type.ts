export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  hashedPassword: string;
};

export type CreateUserPayload = {
  firstName: string;
  lastName: string;
  email: string;
  hashedPassword: string;
};
