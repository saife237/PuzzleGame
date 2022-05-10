import React from 'react'

const Data = ({item,id,handleClick}) => {
    const itemClass = item.stat ? " active " + item.stat: ""
  return (
    <div className={"data" + itemClass} onClick={()=> handleClick(id)}>
      <img src={item.img} alt=""/>
    </div>
  )
}

export default Data
