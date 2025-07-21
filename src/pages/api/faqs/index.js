import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const faqs = await prisma.fAQ.findMany({ orderBy: { id: "asc" } });
    res.json(faqs);
  } else if (req.method === "POST") {
    const { question, answer } = req.body;
    if (!question || !answer) return res.status(400).json({ error: "Semua field wajib diisi" });
    const faq = await prisma.fAQ.create({ data: { question, answer } });
    res.status(201).json(faq);
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}