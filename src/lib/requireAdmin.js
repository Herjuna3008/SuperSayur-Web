import { getSession } from "next-auth/react";
import prisma from "./prisma";

// HOC untuk server-side props
export function requireAdmin(gssp) {
  return async (context) => {
    const session = await getSession(context);
    if (!session) {
      return {
        redirect: {
          destination: "/api/auth/signin",
          permanent: false,
        },
      };
    }
    // Pastikan ada di tabel Admin
    const admin = await prisma.admin.findUnique({ where: { googleId: session.user.id } });
    if (!admin) {
      return {
        redirect: {
          destination: "/api/auth/signin",
          permanent: false,
        },
      };
    }
    // Lanjut ke page asli
    return await gssp(context, session);
  };
}
