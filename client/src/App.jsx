import NavBar from './Components/NavBar'
import Home from './Components/Homepage/index'

const App = function App() {
  return (
    <main className="h-screen w-full flex justify-center items-center">
      <NavBar />
      <div>
        <Home />
      </div>
    </main>
  )
}

export default App
