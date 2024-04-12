"use client";
import UserInfo from "@/components/UserInfo";
import { signOut } from "next-auth/react";
import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Post from "@/components/Post";

const Dashboard = () => {
  const { data: session } = useSession();
  return (
    <>
      <nav className="w-full shadow-md">
        <div className="w-10/12 mx-auto  flex items-center justify-between">
          <h1>{session?.user?.name}</h1>
          <button
            onClick={() => signOut()}
            className="bg-red-500 text-white font-bold px-6 py-2 my-2"
          >
            Log Out
          </button>
        </div>
      </nav>
      <div className="md:w-6/12 md:mx-auto md:border">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </>
  );
};

export default Dashboard;
