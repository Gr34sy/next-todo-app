import { TabsHead } from "./TabsHead"
import { TabsContent } from "./TabsContent"

import { useState } from "react";

export function Tabs(props){
    const [display, setDisplay] = useState("content1");

    function displayChange(e){
        e.preventDefault();
        setDisplay(e.target.dataset.value);
    }

    return (
        <div className="tabs">
            <TabsHead header1={props.header1} header2={props.header2} handlerFunction={displayChange}/>
            {display === "content1" && <TabsContent content={props.content1} />}
            {display === "content2" && <TabsContent content={props.content2} />}
        </div>
    )
}