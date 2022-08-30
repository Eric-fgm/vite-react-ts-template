import reactLogo from "@/assets/react.svg"
import { useCallback, useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  const handleClick = useCallback(() => {
    setCount((_count) => _count + 1)
  }, [])

  return (
    <div className="pt-5 text-center">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="mx-auto" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="mx-auto" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button type="button" onClick={handleClick}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
