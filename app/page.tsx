"use client"
import { useState } from "react";

export default function Home() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Address: "",
    State: "",
    PostalCode: "",
    DOB: "",
    SSN: "",
    Email: "",
    Password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const url = isLogin ? "/api/auth/login" : "/api/auth/signup";
    const body = isLogin
      ? { Email: formData.Email, Password: formData.Password }
      : formData;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    alert(data.message || data.error);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-xl">
        <h2 className="text-2xl font-bold text-center">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <>
              <input
                type="text"
                name="FirstName"
                placeholder="First Name"
                value={formData.FirstName}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
              <input
                type="text"
                name="LastName"
                placeholder="Last Name"
                value={formData.LastName}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
              <input
                type="text"
                name="Address"
                placeholder="Address"
                value={formData.Address}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
              <input
                type="text"
                name="State"
                placeholder="State"
                value={formData.State}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
              <input
                type="text"
                name="PostalCode"
                placeholder="Postal Code"
                value={formData.PostalCode}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
              <input
                type="date"
                name="DOB"
                value={formData.DOB}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
              <input
                type="text"
                name="SSN"
                placeholder="SSN"
                value={formData.SSN}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </>
          )}

          <input
            type="email"
            name="Email"
            placeholder="Email"
            value={formData.Email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
          <input
            type="password"
            name="Password"
            placeholder="Password"
            value={formData.Password}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />

          <button
            type="submit"
            className="w-full p-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="text-center">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 hover:underline"
          >
            {isLogin ? "Sign up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
