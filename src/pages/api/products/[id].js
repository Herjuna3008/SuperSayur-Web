import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === "GET") {
    const product = await prisma.product.findUnique({
      where: { id: Number(id) },
      include: { category: true }
    });
    if (!product) return res.status(404).json({ error: "Produk tidak ditemukan" });
    res.json(product);
  }
  else if (req.method === "PUT") {
    const { name, price, stock, description, imageUrl, categoryId } = req.body;
    const product = await prisma.product.update({
      where: { id: Number(id) },
      data: { name, price: Number(price), stock: Number(stock), description, imageUrl, categoryId: Number(categoryId) }
    });
    res.json(product);
  }
  else if (req.method === "DELETE") {
    await prisma.product.delete({ where: { id: Number(id) } });
    res.status(204).end();
  }
  else {
    res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
