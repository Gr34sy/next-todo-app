import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],

  // callbacks: {
  //   async session({session}){
  //     return session
  //   },
  //   async signIn({profile}){
  //     console.log(profile);
  //     try {
  //       const db = await dbConnect()

  //       if(!userExist){
  //         await db.createCollection(profile.email)
  //       }

  //       db.close();

  //       return true;
        
  //     }catch{
  //       console.log(error);
  //       return false;
  //     }
  //   }
  // },

  pages: {
    signIn: "/sign-in",
  }
};