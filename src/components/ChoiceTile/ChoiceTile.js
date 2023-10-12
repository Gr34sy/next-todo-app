import { useRouter } from "next/router"

export function ChoiceTile({link, content}){
    const router = useRouter();
    
    function handleRedirect(e){
        e.preventDefault();
        router.push(link);
    }

    return (
        <div className="choice-tile" onClick={handleRedirect}>
            <p className="choice-tile__description">
                {content}
            </p>
        </div>
    )
}