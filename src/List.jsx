import React from "react"
function List(props){


  return(
    <ul>
      {props.itens.map(item => <li 
        key={item.id}>{item.text}

        <button onClick={()=> {props.onItemDeleted(item)}}>
          <img src="./public/assets/trash.svg" alt="delete" />
        </button>
      </li>)}

    </ul>
  )
}
export default List