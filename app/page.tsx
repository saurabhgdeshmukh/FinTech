"use client";
import { useState } from "react";
import Image from "next/image";
import loginImage from "@/public/icons/auth-image.svg"; // Import uploaded image

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

    const url = isLogin ? "/api/auth/signin" : "/api/auth/signup";
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
    <div className="flex w-full min-h-screen items-center  justify-end">
      <div className="items-center justify-center  w-full sm:w-[50%]">
      <div className="flex bg-white  overflow-hidden ">
        {/* Left Side - Login / Signup Form */}
        <div className="w-[450px] items-center p-10 space-y-6">
         
          <h3 className="text-xl font-semibold">{isLogin ? "Log in" : "Sign up"}</h3>
          <p className="text-gray-600">
            {isLogin ? "Welcome back! Please enter your details." : "Please enter your details."}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="FirstName"
                    placeholder="First Name"
                    value={formData.FirstName}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md"
                    required
                  />
                  <input
                    type="text"
                    name="LastName"
                    placeholder="Last Name"
                    value={formData.LastName}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md"
                    required
                  />
                </div>

                <input
                  type="text"
                  name="Address"
                  placeholder="Enter your specific address"
                  value={formData.Address}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-md"
                  required
                />

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="State"
                    placeholder="ex: NY"
                    value={formData.State}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md"
                    required
                  />
                  <input
                    type="text"
                    name="PostalCode"
                    placeholder="ex: 11101"
                    value={formData.PostalCode}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="date"
                    name="DOB"
                    value={formData.DOB}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md"
                    required
                  />
                  <input
                    type="text"
                    name="SSN"
                    placeholder="ex: 1234"
                    value={formData.SSN}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md"
                    required
                  />
                </div>
              </>
            )}

            <input
              type="email"
              name="Email"
              placeholder="Enter your email"
              value={formData.Email}
              onChange={handleChange}
              className="w-full p-3 border rounded-md"
              required
            />
            <input
              type="password"
              name="Password"
              placeholder="Enter your password"
              value={formData.Password}
              onChange={handleChange}
              className="w-full p-3 border rounded-md"
              required
            />

            <button
              type="submit"
              className="w-full p-3 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              {isLogin ? "Login" : "Sign up"}
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
        {/* Right Side - Image Section */}
      </div>
      <div className="hidden sm:block  w-1/3  ">
        <div className="w-[500px]">
          <Image
            src={loginImage}
            alt="Auth Preview"
            layout="responsive"
            className="object-cover "
          />
        </div>
      </div>
    </div>
  );
}
