import { Action } from "redux";

export const ENTER_EMAIL = "ENTER_EMAIL";
export const ENTER_PASSWORD = "ENTER_PASSWORD";

type Email = string;
type Password = string;

export type EnterEmail = Action & {
  email: Email
}

export type EnterPassword = Action & {
  password: Password
}

export const enterEmail = (email: Email): EnterEmail => ({
  type: ENTER_EMAIL,
  email
});

export const enterPassword = (password: Password): EnterPassword => ({
  type: ENTER_PASSWORD,
  password
});
