"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
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
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className="w-full flex flex-wrap">

            <div className="w-full md:w-1/2 flex flex-col">

                <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
                    <Link href="#" className="bg-black text-white font-bold text-xl p-4 rounded-md">TaskMaster</Link>
                </div>

                <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                    <p className="text-center text-3xl">Welcome.</p>
                    <form class="flex flex-col pt-3 md:pt-8" onsubmit="event.preventDefault();">
                        <div className="flex flex-col pt-4">
                            <label for="email" class="text-lg">Email</label>
                            <input id="email"
                                type="text"
                                value={user.email}
                                onChange={(e) => setUser({ ...user, email: e.target.value })}
                                placeholder="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>

                        <div class="flex flex-col pt-4">
                            <label for="password" class="text-lg">Password</label>
                            <input id="password"
                                type="password"
                                value={user.password}
                                onChange={(e) => setUser({ ...user, password: e.target.value })}
                                placeholder="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <button
                            onClick={onLogin}
                            className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8 rounded">Login</button>
                    </form>
                    <div class="text-center pt-12 pb-12">
                        <p>Don&rsquo;t have an account? <Link href="signup" class="underline font-semibold">Register here.</Link></p>
                    </div>
                </div>

            </div>

            <div class="w-1/2 shadow-2xl">
                <Image width={500} height={500} className="object-cover w-full h-screen hidden md:block" src="https://source.unsplash.com/IXUM4cJynP0" alt="side-image" />
            </div>
        </div>
    )

}