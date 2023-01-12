import React, { useEffect, useInsertionEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import Item from './components/Item'
import List from "./components/List";
import Modal from "./components/Modal";
import './Todo.css'

const SAVED_ITEMS = 'savedItens'

function Todo() {

  const [items, setItems] = useState([])
  const [showModal, setShowModal] = useState(false)
  
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
    onHideModal()
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

  function onHideModal(e){
    setShowModal(false)
  }

  return (
    <div className="container">
     
      <header className="header"> 
        <h1>Todo</h1>
        <button onClick={() => (setShowModal(true))} className="addButton">+</button>
      </header>
        <List onDone={onDone} onItemDeleted={onItemDeleted} itens={items}></List>
      <Modal show={showModal} onHideModal={onHideModal}>
        <TodoForm onAddItem={onAddItem}></TodoForm>
      </Modal>
    </div>
  )
}

export default Todo