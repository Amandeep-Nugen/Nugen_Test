export interface IAuth {
    email: string;
    password: string;
    [key: string]: string;
  }
  
export interface IAuthError {
    emailError: boolean;
    passwordError: boolean;
}