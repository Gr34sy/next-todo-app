import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { dbConnect } from "./db";
import User from "../models/user";
import { Dummy_List } from "./dummy-data";
import { redirect } from "next/dist/server/api-utils";

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

  callbacks: {
    async session({session}){
      const sessionUser = await User.findOne({email: session.user.email},{_id:1});
      session.user.id = sessionUser._id.toString();
      return session
    },
    async signIn({profile}){
      try {
        await dbConnect();
        const userExist = await User.findOne({email: profile.email});
        if(!userExist){
          const user = await User.create({
            email: profile.email,
            name: profile.name,
            image: profile.picture,
            theme: 'default',
            lists: [Dummy_List],
            tasklists: [],
          })
        }

        return true;
        
      }catch{
        console.log(error);
        return false;
      }
    }
  },


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