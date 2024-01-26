import { FormLogIn } from "@/components/Forms/FormLogIn"
import { useRouter } from "next/router";
import { useSession } from "next-auth/react"

export default function SignInPage(){
    const { data: session} = useSession();

    if(session) {
        useRouter().push('/')
    };

    return (
        <main className="sign-in">
            <h1 className="section__header">Sign in</h1>
            <FormLogIn />
        </main>
    )
}