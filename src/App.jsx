import "./App.css"
import Demo from './components/Demo'
import Hero from './components/Hero'

const App = () => {
  return (
    <main>
      <div className="main"></div>
      <div  className="gradient"/>
      <div className="app">
        <Hero />
        <Demo />
      </div>
    </main>

  )
}

export default App