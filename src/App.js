import React, { useState } from 'react'
import Data from './Data'
import Card from './Card'
import Buttons from './Buttons';

const App = () => {
  const [item, setItem] = useState(Data);
  const menuItems = [...new Set(Data.map((val)=>val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal)=>{
      return newVal.category === curcat;
    })
    setItem(newItem)
  }
  return (
    <>
     <div className="container-fluid">
      <div className="row">
        <h1 className="col-12 text-center my-3 fw-bold">Food Filtering App</h1>
        <Buttons setItem={setItem} menuItems={menuItems} filterItem={filterItem} />
        <Card item={item} />
      </div>
     </div> 
    </>
  )
}

export default App
