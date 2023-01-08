import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import Item from './components/Item'
import List from "./components/List";

import './Todo.css'


function Todo() {

  const [itens, setItens] = useState([])

  function onAddItem(text){
    let it = new Item(text)
    setItens([...itens, it])
  }
  function onItemDeleted(item){
    let filteredItens = itens.filter(it => it.id != item.id)
    setItens(filteredItens)
  }
  function onDone(item){
    let updatedItens = itens.map(it => {
      if(it.id === item.id){
        it.done = !it.done
      }
      return it
    })
    setItens(updatedItens)
  }

  return (
    <div className="container">
      <h1>Todo</h1>
        <TodoForm onAddItem={onAddItem}></TodoForm>
        <List onDone={onDone} onItemDeleted={onItemDeleted} itens={itens}></List>
    </div>
  )
}

export default Todo