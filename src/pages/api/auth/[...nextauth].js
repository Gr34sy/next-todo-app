import NextAuth from "next-auth";
import { authOptions } from "@/utils/sessionUtils";

export default NextAuth(authOptions);
