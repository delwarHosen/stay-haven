"use client"

import { login } from "@/app/actions";
import { useRouter } from "next/navigation";

import { useState } from "react";

const LoginForm = () => {
  const [error, setError] = useState("")
  const router = useRouter();

  async function onSubmit(event) {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      const respons = login(formData);

      if (!!respons.error) {
        setError(respons.error.message);
      } else {
        router.push("/bookings")
      }
    } catch (error) {
      setError(error.message)
    }

  }


  return (
    <>
      {error && <div className="text-xl font-medium text-red-600">{error}</div>}
      <form className="login-form" onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button type="submit" className="btn-primary w-full mt-4">
          Login
        </button>
      </form>
    </>

  );
};

export default LoginForm;
