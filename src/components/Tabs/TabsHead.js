export function TabsHead({header1, header2, handlerFunction, activeContent}){
    return (
        <div className="tabs__head">
            <div
              className={ activeContent == "content1" ? "tabs__head_item tabs__head_item--active" : "tabs__head_item "}
              data-value="content1"
              onClick={handlerFunction}
            >
              {header1}
            </div>

            <div
              className={ activeContent == "content2" ? "tabs__head_item tabs__head_item--active" : "tabs__head_item "}
              data-value="content2"
              onClick={handlerFunction}
            >
              {header2}
            </div>
        </div>
    )
}