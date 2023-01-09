import React, { useEffect, useInsertionEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import Item from './components/Item'
import List from "./components/List";
import './Todo.css'

const SAVED_ITEMS = 'savedItens'

function Todo() {

  const [items, setItems] = useState([])
  
  useEffect(() =>{
    let savedItens = JSON.parse(localStorage.getItem(SAVED_ITEMS))
    if(savedItens){
      setItems(savedItens)
    }
  },[])

  useEffect(()=>{
    console.log("SALVOU")
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
  }, [items])

  function onAddItem(text){
    let it = new Item(text)
    setItems([...items, it])
  }
  function onItemDeleted(item){
    let filteredItens = items.filter(it => it.id != item.id)
    setItems(filteredItens)
  }
  function onDone(item){
    let updatedItens = items.map(it => {
      if(it.id === item.id){
        it.done = !it.done
      }
      return it
    })
    setItems(updatedItens)
  }

  return (
    <div className="container">
      <h1>Todo</h1>
        <TodoForm onAddItem={onAddItem}></TodoForm>
        <List onDone={onDone} onItemDeleted={onItemDeleted} itens={items}></List>
    </div>
  )
}

export default Todo