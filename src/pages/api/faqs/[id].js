import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  const { id } = req.query;
  if (req.method === "PUT") {
    const { question, answer } = req.body;
    const faq = await prisma.fAQ.update({
      where: { id: Number(id) },
      data: { question, answer }
    });
    res.json(faq);
  } else if (req.method === "DELETE") {
    await prisma.fAQ.delete({ where: { id: Number(id) } });
    res.status(204).end();
  } else {
    res.setHeader("Allow", ["PUT", "DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
