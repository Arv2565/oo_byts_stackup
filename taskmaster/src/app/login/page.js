"use client";
import Link from "next/link";
import React, {useEffect} from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import Image from "next/image";




export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
       
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);


    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login success", response.data);
            toast.success("Login success");
            router.push("/profile");
        } catch (error) {
            console.log("Login failed", error.message);
            toast.error(error.message);
        } finally{
        setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else{
            setButtonDisabled(true);
        }
    }, [user]);

    return (
    // <div className="flex flex-col items-center justify-center min-h-screen py-2">
    //     <h1>{loading ? "Processing" : "Login"}</h1>
    //     <hr />
        
    //     <label htmlFor="email">email</label>
    //     <input 
    //     className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
    //         id="email"
    //         type="text"
    //         value={user.email}
    //         onChange={(e) => setUser({...user, email: e.target.value})}
    //         placeholder="email"
    //         />
    //     <label htmlFor="password">password</label>
    //     <input 
    //     className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
    //         id="password"
    //         type="password"
    //         value={user.password}
    //         onChange={(e) => setUser({...user, password: e.target.value})}
    //         placeholder="password"
    //         />
    //         <button
    //         onClick={onLogin}
    //         className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Login here</button>
    //         <Link href="/signup">Visit Signup page</Link>
    //     </div>
    <div class="w-full flex flex-wrap">

    <div class="w-full md:w-1/2 flex flex-col">

        <div class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
            <Link href="#" class="bg-black text-white font-bold text-xl p-4">Logo</Link>
        </div>

        <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <p class="text-center text-3xl">Welcome.</p>
            <form class="flex flex-col pt-3 md:pt-8" onsubmit="event.preventDefault();">
                <div class="flex flex-col pt-4">
                    <label for="email" class="text-lg">Email</label>
                    <input type="email" id="email" placeholder="your@email.com" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>

                <div class="flex flex-col pt-4">
                    <label for="password" class="text-lg">Password</label>
                    <input type="password" id="password" placeholder="Password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>

                <input type="submit" value="Log In" class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"/>
            </form>
            <div class="text-center pt-12 pb-12">
                <p>Don't have an account? <a href="register.html" class="underline font-semibold">Register here.</a></p>
            </div>
        </div>

    </div>

    <div class="w-1/2 shadow-2xl">
        <Image width={500} height={500}  className="object-cover w-full h-screen hidden md:block" src="https://source.unsplash.com/IXUM4cJynP0"/>
    </div>
</div>
    )

}