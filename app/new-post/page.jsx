"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";

const NewPost = () => {
  const { data: session } = useSession();
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFIleChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleSubmit = async (event) => {
    const user = session?.user?.name;
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", user);
    formData.append("file", selectedFile);
    formData.append("description", description);

    try {
      const response = await fetch("/api/post", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        console.log("Image uploaded successfully");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  return (
    <>
      <nav className="w-full shadow-md">
        <div className="w-10/12 mx-auto  flex items-center justify-between">
          <h1 className="py-3">{session?.user?.name}</h1>
        </div>
      </nav>
      <div className="flex justify-center items-center w-full h-screen ">
        <div className="w-4/12 h-[400px] bg-green-400 p-4">
          <form onSubmit={handleSubmit}>
            <input type="file" accept="image/*" onChange={handleFIleChange} />
            <input
              type="text"
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Desciption"
            />
            <button className="bg-red-500 text-white font-bold px-6 py-2 my-2">
              Post
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewPost;
