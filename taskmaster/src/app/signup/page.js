"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-hot-toast";


export default function SignupPage() {
  const [user, setUser] = React.useState({
    email: "",
    username: "",
    password: "",

    // confirmPassword: "",

  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      router.push("/login");

    } catch (error) {
      console.log("Signup failed", error.message);

      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div class="w-full flex flex-wrap">

      <div class="w-full md:w-1/2 flex flex-col">

        <div class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-12">
          <Link href="/" class="bg-black text-white font-bold text-xl p-4 rounded-md" alt="Logo">TaskMaster</Link>
        </div>

        <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
          <p class="text-center text-3xl">Join Us.</p>
          <div class="flex flex-col pt-4">
            <label htmlFor="username" class="text-lg">Username</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline "
              type="text" id="username" onChange={(e) => setUser({ ...user, username: e.target.value })}
              placeholder="arthur_morgan" />
          </div>

          <div class="flex flex-col pt-4">
            <label for="email" class="text-lg">Email</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              type="email" id="email" onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder="arthur_morgan@gmail.com" />
          </div>

          <div class="flex flex-col pt-4">
            <label for="password" class="text-lg">Password</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              type="password" id="password" onChange={(e) => setUser({ ...user, password: e.target.value })} placeholder="password" />

          </div>

          {/* <div class="flex flex-col pt-4">
            <label for="confirm-password" class="text-lg">Confirm Password</label>
            <input type="password" id="confirm-password" placeholder="Password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
          </div> */}

          <button onClick={onSignup} className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8 rounded"> Signup</button>
          <div class="text-center pt-12 pb-12">
            <p>Already have an account? <Link href="login" class="underline font-semibold">Log in here.</Link></p>
          </div>
        </div>

      </div>

      <div class="w-1/2 shadow-2xl">
        <Image width={600} height={600} class="object-cover w-full h-screen hidden md:block" src="https://source.unsplash.com/IXUM4cJynP0" alt="Background" />
      </div>
    </div>
  )
}