import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import prisma from "../lib/prisma";
import GitHub from "next-auth/providers/github";
import { NextAuthConfig } from "next-auth";

export const AUTH_OPTIONS = {
  providers: [
    GitHub({
      allowDangerousEmailAccountLinking: true,
      clientId: process.env.AUTH_GITHUB_ID!,
      clientSecret: process.env.AUTH_GITHUB_SECRET!
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/signin",
    error: "/signin",
  },
  callbacks: {
    async jwt({ token, user,profile,session,account}) {
      console.log('profile in jwt: ', profile);
      if (user) {
        return {
          ...token,
          id: user.id,
          // @ts-ignore
          username: profile.login as string
        };
      }
      return token;
    },
    session: async ({ session, token, user }) => {
      console.log(session,token,user);
      return {
        ...session,
        user: {
          ...session.user,
          id: token.sub,
          username: token.username as string
        },
      };
    },
    authorized: async ({ auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      return !!auth;
    },
    async signIn({ user, account, profile,credentials }) {
      // Check if the user exists in the database
      const existingUser = await prisma.user.findUnique({
        where: { email: user.email! },
      });
      // if(!existingUser?.username){
      //   await prisma.user.update({
      //     data:{
      //       // @ts-ignore
      //       username: profile.login as string
      //     },
      //     where:{
      //       email: user.email!
      //     }
      //   });
      // }

      if (!existingUser) {
        console.log('NOT EXISTING USER... Will create a new one for u with team.');
        // Create a new user if they don't exist
        const newUser = await prisma.user.create({
          data: {
            email: user.email!,
            name: user.name!,
            image: user.image!,
            // @ts-ignore
            username: profile.login as string
          },
        });
      }

      return true; // Continue with the sign-in process
    },
  },
  session: {
    strategy: "jwt"       // veryimportant, if not provided , then authjs will give prisma client edge runtime error.
  }
} as NextAuthConfig;
export const { handlers, signIn, signOut, auth } = NextAuth(AUTH_OPTIONS);
