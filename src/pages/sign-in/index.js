import { FormLogIn } from "@/components/Forms/FormLogIn"
import { useRouter } from "next/router";
import { useSession } from "next-auth/react"
import { useEffect } from "react";

export default function SignInPage(){
    const { data: session, status} = useSession();
    const router = useRouter();

    useEffect(() => {
        if(status == 'authenticated') {
            router.push('/')
            return () => {};
        };
        return () => {};
    }, [status])

    return (
        <main className="sign-in">
            <h1 className="section__header">Sign in</h1>
            <FormLogIn />
        </main>
    )
}