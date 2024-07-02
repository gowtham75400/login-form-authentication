import { BrowserRouter, Routes ,Route} from "react-router-dom"
import Login from "./Components/Login"
import Dashboard from "./Components/Dashboard"

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/" element={<Login />} />

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
