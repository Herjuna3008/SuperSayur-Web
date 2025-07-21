import { v2 as cloudinary } from "cloudinary";
import formidable from "formidable";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Only POST allowed" });

  const form = new formidable.IncomingForm();
  form.maxFileSize = 10 * 1024 * 1024;
  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Formidable error:", err);
      return res.status(400).json({ error: "Gagal upload file: " + err.message });
    }
    try {
      const file = files.file;
      if (!file) return res.status(400).json({ error: "No file uploaded" });
      const result = await cloudinary.uploader.upload(file.filepath, {
        folder: "supersayur",
      });
      return res.status(200).json({ url: result.secure_url });
    } catch (e) {
      console.error("Cloudinary error:", e);
      return res.status(500).json({ error: "Cloudinary: " + e.message });
    }
  });
}
