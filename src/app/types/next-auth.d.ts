import NextAuth from "next-auth"
import type {DefaultSession, Session , User} from "next-auth"
declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      username: string              // from user's github accnt usrname
    } & DefaultSession["user"]
  }
}