import React from "react"
import Card from "./card"

function ListItem(props){

  function DoneImg(props){
    if(props.done){
      return <img src="/assets/check.svg" alt="done"/>
    }else{
      return <img src="/assets/unCheck.svg" alt="not done" />
    }
  }

  return(
      <li>
        <Card className={props.item.done ? "done item" : "item"}>
          {props.item.text}
        
          <div className="btn-container">
            <button onClick={() => {props.onDone(props.item)}}>
              <DoneImg done={props.item.done}></DoneImg>
            </button>
            <button onClick={()=> {props.onItemDeleted(props.item)}}>
              <img src="/assets/trash.svg" alt="delete" />
            </button>
          </div>
        </Card>

      </li>)
}
export default ListItem