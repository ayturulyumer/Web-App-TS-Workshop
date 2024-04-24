import { Adress, Company } from "./common";

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

export type UserDetails = {
  user: User;
  address: Adress;
  company: Company;
};
