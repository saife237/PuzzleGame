import React, { useState } from 'react'
import Data from './Data'
const Card = () => {
    const[items, setItems] = useState([
        {id:1 , img:"https://images.unsplash.com/photo-1651303780707-a30a86b27478?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8aG1lbnZRaFVteE18fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60", stat:""},
        {id:1 , img:"https://images.unsplash.com/photo-1651303780707-a30a86b27478?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8aG1lbnZRaFVteE18fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60", stat:""},
        {id:2 , img:"https://images.unsplash.com/photo-1651416814697-a63cb1d30ce7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8aG1lbnZRaFVteE18fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60", stat:""},
        {id:2 , img:"https://images.unsplash.com/photo-1651416814697-a63cb1d30ce7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8aG1lbnZRaFVteE18fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60", stat:""},
        {id:3 , img:"https://images.unsplash.com/photo-1649958639104-ff8b771623d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8eGpQUjRobGtCR0F8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60", stat:""},
        {id:3 , img:"https://images.unsplash.com/photo-1649958639104-ff8b771623d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8eGpQUjRobGtCR0F8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60", stat:""},
        {id:4 , img:"https://images.unsplash.com/photo-1650012763642-70bd8dc5f324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8eGpQUjRobGtCR0F8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60", stat:""},
        {id:4 , img:"https://images.unsplash.com/photo-1650012763642-70bd8dc5f324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8eGpQUjRobGtCR0F8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60", stat:""},
        {id:5 , img:"https://images.unsplash.com/photo-1643958415975-b75211d0fd47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60", stat:""},
        {id:5 , img:"https://images.unsplash.com/photo-1643958415975-b75211d0fd47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60", stat:""},
        {id:6 , img:"https://images.unsplash.com/photo-1651694922630-19f2d61ed4a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60", stat:""},
        {id:6 , img:"https://images.unsplash.com/photo-1651694922630-19f2d61ed4a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60", stat:""},
        {id:7 , img:"https://images.unsplash.com/photo-1651932167017-60502240bb22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60", stat:""},
        {id:7 , img:"https://images.unsplash.com/photo-1651932167017-60502240bb22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60", stat:""},
        {id:8 , img:"https://images.unsplash.com/photo-1650327930027-7f907c9ad6c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8eGpQUjRobGtCR0F8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60", stat:""},
        {id:8 , img:"https://images.unsplash.com/photo-1650327930027-7f907c9ad6c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8eGpQUjRobGtCR0F8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60", stat:""}
    ].sort(()=>Math.random() - 0.5))

const[prev,setPrev] = useState(-1)

function check(current){
    if(items[current].id === items[prev].id){
        items[current].stat = "correct"
        items[prev].stat = "correct"
        setItems([...items])
        setPrev(-1)
    }else{
        items[current].stat = "wrong"
        items[prev].stat = "wrong"
        setItems([...items])
        setTimeout(()=>{
            items[current].stat = ""
            items[prev].stat = ""
            setItems([...items])
            setPrev(-1)
        }, 1000)   
    }
}

function handleClick(id){
    // alert(id)
    if(prev === -1){
        items[id].stat = "active"
        setItems([...items])
        setPrev(id)
    }else{
        check(id)
    }
}


  return (
    <div className="container">
    {items.map((item,index) => (
<Data key={index} item={item} id={index} handleClick={handleClick}/>
    ))}
    </div>
  )
}

export default Card
