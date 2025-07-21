import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    // Ambil semua produk (include kategori)
    const products = await prisma.product.findMany({
      include: { category: true },
      orderBy: { createdAt: "desc" }
    });
    res.json(products);
  } else if (req.method === "POST") {
    // Tambah produk baru
    const { name, price, stock, description, imageUrl, categoryId } = req.body;
    if (!name || !price || !stock || !categoryId || !imageUrl) {
      return res.status(400).json({ error: "Field tidak boleh kosong" });
    }
    const product = await prisma.product.create({
      data: { name, price: Number(price), stock: Number(stock), description, imageUrl, categoryId: Number(categoryId) }
    });
    res.status(201).json(product);
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
