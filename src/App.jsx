import { useState } from 'react'

export function App() {
  const [numero, setNumero] = useState(100)
  const [escondido, setEscondido] = useState(false)

  function handleAumentar() {
    setNumero(numero + 100)
  }

  function handleEsconder() {
    escondido ? setEscondido(false) : setEscondido(true)
  }

  return (
    <main>
      <h1>App</h1>

      <section>
        <p>o numero é: {numero}</p>

        <button onClick={handleAumentar}>aumentar</button>
      </section>

      <section>
        <h2>O carro amaldiçoado:</h2>
        {escondido ? <p>Fiesta</p> : ""}

        <button onClick={handleEsconder}>Esconder</button>
      </section>
    </main>
  )
}


