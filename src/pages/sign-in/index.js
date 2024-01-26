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
            <FormLogIn />
        </main>
    )
}