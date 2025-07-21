import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const categories = await prisma.category.findMany({ orderBy: { name: "asc" } });
    res.json(categories);
  } else if (req.method === "POST") {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: "Nama kategori wajib diisi" });
    const cat = await prisma.category.create({ data: { name } });
    res.status(201).json(cat);
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
