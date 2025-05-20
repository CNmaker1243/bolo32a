import { useState } from 'react'

export function App() {
  const [numero, setNumero] = useState(100)
  const [mardito, setMudarMardito] = useState("Fiesta")
  const [escondido, setEscondido] = useState(false)

  function handleAumentar() {
    setNumero(numero + 100)
  }

  function handleEsconder() {
    if (escondido === false) {
      setEscondido(true)
      setMudarMardito("")

    }

    setEscondido(false)
    setMudarMardito("Fiesta")

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
        <p>{mardito}</p>

        <button onClick={handleEsconder}>Esconder</button>
      </section>
    </main>
  )
}

export default App
