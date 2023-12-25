import { ListCard } from "@/components/ListCard/ListCard";
import { Dummy_List } from "@/utils/dummy-data";

export default function List(props){
    console.log(props.simple_list);
    
    return (
        <div className="simple-list">
            <main className="main">
                <h1>List</h1>

                <ListCard />
            </main>
        </div>
    );
}

export function getStaticProps(){
    return {
        props: {
            simple_list: Dummy_List,
        },
    }
}