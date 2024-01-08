export function TabsHead({header1, header2, handlerFunction}){
    return (
        <div className="tabs__head">
            <div
              className="tabs__head_item"
              data-value="header1"
              onClick={handlerFunction}
            >
              {header1}
            </div>

            <div
              className="tabs__head_item"
              data-value="header2"
              onClick={handlerFunction}
            >
              {header2}
            </div>
        </div>
    )
}