import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const wa = await prisma.whatsApp.findFirst();
    res.json(wa || {});
  } else if (req.method === "PUT") {
    const { number } = req.body;
    let wa = await prisma.whatsApp.findFirst();
    if (wa) {
      wa = await prisma.whatsApp.update({
        where: { id: wa.id },
        data: { number },
      });
    } else {
      wa = await prisma.whatsApp.create({ data: { number } });
    }
    res.json(wa);
  } else {
    res.setHeader("Allow", ["GET", "PUT"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
