import React, {useState} from "react";

const MostrarVoltas = (props) => {
  return(
  <p>
  {props.voltas}<br />
  voltas
  </p>
  )
}

const MostraTempo = (props)=> { 
  return(
    <p>
    {props.tempo}<br />
    Tempo médio por volta
    </p>
  )
}

const Button = (props) => <button onClick={props.clicar}>{props.texto}</button>

function App() {
  const [numVoltas, setNumVoltas] = useState(0);
    const increment = () =>{
   setNumVoltas(numVoltas + 1);
  }
  const decrement = () =>{
    setNumVoltas(numVoltas - 1);
  }
  return (
    <div className="App">
<MostrarVoltas voltas={numVoltas}/>
<Button texto = '+' clicar={increment}/>
<Button texto = '-' clicar={decrement}/>
<MostraTempo tempo='1:25' />
<Button texto = 'Iniciar' />
<Button texto = 'Reiniciar' />
    </div>
  );
}

export default App;
