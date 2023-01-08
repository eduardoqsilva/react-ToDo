import React from "react"
import { useState } from "react"

function TodoForm(props){

  const [text, setText] = useState("")

  function handleChange(event) {
    let txt = event.target.value
    setText(txt)
  }
  function addItem(event) {
    event.preventDefault()
    if(text){ 
      props.onAddItem(text)
      setText('')
    } 
  }

  return(
    <form>
        <input onChange={handleChange} value={text} type="text" />
        <button onClick={addItem}>Add</button>
    </form>
  )
}

export default TodoForm