import React from "react";

const Post = () => {
  return (
    <div className="my-12">
      <div className="border w-full pl-4 p-2 bg-green-300">User</div>

      <div className=" border-b-4  w-full h-auto">
        <img src="/test.png" className="w-full h-full" alt="" />
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          perferendis voluptatibus earum in cum ad voluptates voluptatem
          consequatur maxime et placeat praesentium, atque veniam animi, cumque
          inventore sequi maiores excepturi.
        </p>
      </div>
      <div className="my-4 w-full flex justify-between items-center">
        <p className="font-bold">Likes: 0</p>
        <button className="bg-red-500 text-white font-bold px-6 py-2 my-2">
          Like
        </button>
      </div>
      {/* comment section */}
      <div className="w-11/12 border mx-auto p-2 h-[200px] overflow-y-scroll ">
        <div className="my-2 border">
          <p>
            <span className="font-bold">User </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            enim.
          </p>
        </div>
        <div className="my-2 border">
          <p>
            <span className="font-bold">User </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            enim.
          </p>
        </div>
        <div className="my-2 border">
          <p>
            <span className="font-bold">User </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            enim.
          </p>
        </div>
        {/* new comment*/}
        <form action="">
          <div>
            <input type="text" />
          </div>
          <button className="bg-green-500 text-white font-bold px-6 py-2 my-2">
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default Post;
