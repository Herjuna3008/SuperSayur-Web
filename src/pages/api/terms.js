import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const terms = await prisma.terms.findFirst();
    res.json(terms || {});
  } else if (req.method === "PUT") {
    const { content } = req.body;
    let terms = await prisma.terms.findFirst();
    if (terms) {
      terms = await prisma.terms.update({
        where: { id: terms.id },
        data: { content },
      });
    } else {
      terms = await prisma.terms.create({ data: { content } });
    }
    res.json(terms);
  } else {
    res.setHeader("Allow", ["GET", "PUT"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
