import React from "react"
import Card from "./card"

function List(props){

  function DoneImg(props){
    if(props.done){
      return <img src="/assets/check.svg" alt="done"/>
    }else{
      return <img src="/assets/unCheck.svg" alt="not done" />
    }
  }

  return(
    <ul>
      {props.itens.map(item => 
      <li key={item.id}>
        <Card className={item.done ? "done item" : "item"}>
          {item.text}
        
          <div className="btn-container">
            <button onClick={() => {props.onDone(item)}}>
              <DoneImg done={item.done}></DoneImg>
            </button>
            <button onClick={()=> {props.onItemDeleted(item)}}>
              <img src="/assets/trash.svg" alt="delete" />
            </button>
          </div>
        </Card>

      </li>)}

    </ul>
  )
}
export default List