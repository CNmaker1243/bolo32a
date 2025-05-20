import { useState } from 'react'

export function App() {
  const [numero, setNumero] = useState(100)
  const [escondido, setEscondido] = useState(false)

  function handleAumentar() {
    setNumero(numero + 100)
  }

  function handleEsconder() {
    if (escondido === false) {
      setEscondido(true)
      
    setEscondido(false)
  
    }
  }

  return (
    <main>
      <h1>App</h1>

      <section>
        <p>o numero é: {numero}</p>

        <button onClick={handleAumentar}>aumentar</button>
      </section>

      <section>
        <p></p>
      </section>
    </main>
  )
}

export default App
