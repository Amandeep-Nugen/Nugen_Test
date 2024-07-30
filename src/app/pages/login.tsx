"use client";
import { serverRedirect } from "./actions";
import { IAuth } from "./api/interfaces";
import { login } from "./api/login";
import { useApi } from "./api/http/useApi";

export default function LoginPage() {
  const { post } = useApi();
  const email = "admin@gmail.com";
  const password = "qwerty1";

  async function handleClick() {
    if (email.length !== 0 && password.length !== 0) {
      const authPayload: IAuth = { email, password };
      const response: { accessToken: string; message: string } = await post(
        authPayload,
        login
      );
      if (response.accessToken) {
        serverRedirect("/stats");
      }
    }
  }
  return (
    <div className="text-center">
      <br />
      <h2>Log in</h2>
      <form>
        <input
          id="email"
          type="email"
          placeholder="username"
          required
          className="border-2 border-black"
        ></input>
        <br />
        <input
          id="password"
          type="password"
          placeholder="password"
          required
          className="border-2 border-black"
        ></input>
        <br />
        <input type="submit" value="Login" onClick={() => handleClick()} />
      </form>
    </div>
  );
}
