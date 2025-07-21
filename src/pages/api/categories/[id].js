import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  const { id } = req.query;
  if (req.method === "PUT") {
    const { name } = req.body;
    const cat = await prisma.category.update({
      where: { id: Number(id) },
      data: { name }
    });
    res.json(cat);
  } else if (req.method === "DELETE") {
    await prisma.category.delete({ where: { id: Number(id) } });
    res.status(204).end();
  } else {
    res.setHeader("Allow", ["PUT", "DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
