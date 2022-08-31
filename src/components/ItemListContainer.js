import React, { useState}  from 'react'

const ItemListContainer = () => {
    const [counter, setCounter] = useState(0);
    const handlerCounterUp = () => {
      setCounter(counter + 1);
    };
  
    return (
        <div className="App">
        <p className="texto">{counter}</p>
        <button onClick={handlerCounterUp} className="boton">+</button>
        <button onClick={() => setCounter(counter - 1)} className="boton">-</button>
      </div>
  )
}

export default ItemListContainer