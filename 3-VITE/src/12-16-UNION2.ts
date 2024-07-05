interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  admin: boolean;
}

interface Guest {
  name: string;
  guest: boolean;
}

type UserType = User | Admin | Guest;

const user: UserType = {
  name: 'Alice',
  email: 'alice@example.com',
}; // valid

const admin: UserType = {
  name: 'Bob',
  email: 'bob@example.com',
  admin: true,
}; // valid

const guest: UserType = {
  name: 'Charlie',
  guest: true,
}; // valid

const invalidUser: UserType = {
  name: 'Dana',
  email: 'abc@gmail.com',
  guest: true,
  // missing required properties for any of the types
}; // error: Property 'email' is missing in type '{ name: string; }' but required in type 'User'.
