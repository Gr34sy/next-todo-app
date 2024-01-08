import { TabsHead } from "./TabsHead"
import { TabsContent } from "./TabsContent"

export function Tabs(props){
    return (
        <div className="tabs">
            <TabsHead header1={props.header1} header2={props.header2}/>
            <TabsContent content1={props.content1} content2={props.content2}/>
        </div>
    )
}