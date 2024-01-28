import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { dbConnect } from "./db";

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

export async function loginIsRequiredServer() {
  const session = await getServerSession(authOptions);
  if (!session) return redirect("/sign-in");
}

export function loginIsRequiredClient(){
    if(typeof window !== "undefined"){
        const {data: session} = useSession();
        const router = useRouter();
        if(!session) router.push("/sign-in");
    }
}