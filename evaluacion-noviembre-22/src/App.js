import React from 'react'
import {useState} from 'react'
import Estatus from './Estatus'
import Posteos from './Posteos'
// El componente App es el padre de:
// - Estatus
// - Posteos
// ESTADO: App debe manejar en su estado un número para contabilizar el total de likes.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Post.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos para que manipulen o lean su estado.

function App() {
  const [TotalClickCounter, setTotalClickCounter]=useState(0)

  const ClickCounter=()=>{
    setTotalClickCounter(TotalClickCounter+1)
  }

  return (
    <div>
      <Estatus TotalClickCounter={TotalClickCounter}/>
      <Posteos ClickCounter={ClickCounter}/>
    </div>
  );
}

export default App;
