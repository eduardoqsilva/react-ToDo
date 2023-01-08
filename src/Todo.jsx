import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Item from './item'
import List from "./List";

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

  return (
    <div className="container">
      <h1>Todo</h1>
        <TodoForm onAddItem={onAddItem}></TodoForm>
        <List onItemDeleted={onItemDeleted} itens={itens}></List>
    </div>
  )
}

export default Todo