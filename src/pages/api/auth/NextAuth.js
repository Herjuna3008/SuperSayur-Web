import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma"; // Pastikan sudah ada lib/prisma.js

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // Hanya allow Google account yang ada di tabel Admin (berdasarkan sub/ID)
      const admin = await prisma.admin.findUnique({
        where: { googleId: profile.sub },
      });
      return !!admin;
    },
    async session({ session, user }) {
      // Tambahkan user id di session untuk validasi frontend
      if (session?.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
  pages: {
    signIn: "/admin-panel/login", // Custom login page (opsional)
    error: "/admin-panel/login",  // Custom error page (opsional)
  },
});
