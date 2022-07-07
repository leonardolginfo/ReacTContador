import React from "react";

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

const Button = (props) => <button>{props.texto}</button>

function App() {
  return (
    <div className="App">
<MostrarVoltas voltas = '100'/>
<Button texto = '+'/>
<Button texto = '-'/>
<MostraTempo tempo='1:25' />
<Button texto = 'Iniciar' />
<Button texto = 'Reiniciar' />
    </div>
  );
}

export default App;
