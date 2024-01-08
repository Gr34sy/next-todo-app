export function TabsHead({header1, header2, handlerFunction}){
    return (
        <div className="tabs__head">
            <div
              className="tabs__head_item"
              data-value="content1"
              onClick={handlerFunction}
            >
              {header1}
            </div>

            <div
              className="tabs__head_item"
              data-value="content2"
              onClick={handlerFunction}
            >
              {header2}
            </div>
        </div>
    )
}