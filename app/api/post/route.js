import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectMongoDB } from "@/lib/mongodb";
import Post from "@/components/Post";
import multer from "multer";

const upload = multer({ dest: "uploads/" });

export const config = {
  api: {
    bodyParser: false,
  },
};
export async function POST(req, res) {
  upload.single("image")(req, res, async function (err) {
    if (err) {
      return res.end("Something went wrong!");
    }
    try {
      const { name, description } = await req.body;
      const image = req.file.path;
      await connectMongoDB();
      await Post.create({ name, description, image });
      return NextResponse.json(
        { message: "Post Created Successfully" },
        { status: 201 }
      );
    } catch (error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }
  });
}
