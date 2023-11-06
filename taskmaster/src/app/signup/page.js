"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";



export default function SignupPage() {
  const [user,setUser] = React.useState({
    email: "",
    username: "",
    password: "",

    // confirmPassword: "",

  });
  const onSignup = async () => {

  };
    
  return (
    <div className="p-2 flex flex-col items-center justify-center min-h-screen py-2 bg-grey">
    <h1>Signup</h1>
    <hr />
    <label htmlFor="username">Username</label>
    <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 "
     type="text" id="username" onChange={(e) => setUser({...user,username:e.target.value})}
    placeholder="username" />
    <label htmlFor="email">Email</label>
    <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 "
    type="email" id="email" onChange={(e) => setUser({...user,email:e.target.value})} placeholder="email"/>
    <label htmlFor="password">Password</label>
    <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 " 
    type="password" id="password" onChange={(e) => setUser({...user,password:e.target.value})} placeholder="password"/>
    <button onClick={onSignup} className="p-1 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 ">
      Signup</button>
      <p>already registered? login <Link href="/login" className="underline">here</Link></p>
    
    </div>
  )
}