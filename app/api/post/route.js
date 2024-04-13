// pages/api/upload-image.js

import multer from "multer";
import connectToDatabase from "@/lib/mongodb";
import { NextResponse } from "next/server";

const upload = multer({ dest: "uploads/" });

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req, res) {
  upload.single("image")(req, res, async function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    try {
      const { db } = await connectToDatabase();
      const collection = db.collection("images");

      const imagePath = req.file.path;
      const description = req.body.description;

      // Save imagePath and description to MongoDB
      await collection.insertOne({ imagePath, description });

      return NextResponse.json({ success: true });
    } catch (error) {
      console.error("Error uploading image:", error);
      return NextResponse.json({ error: "Internal server error" });
    }
  });
}
