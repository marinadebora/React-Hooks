import ReactUseContext from './components/ReactUseContext'
import ReactUseEffect from './components/ReactUseEffect'
import ReactUseState from './components/ReactUseState'
import './styles/App.css'
import UserProvider from './UserProvider'


function App()
{

  return (
    <UserProvider>
      <div className="App">
        <ReactUseState />
        <ReactUseEffect />
        <ReactUseContext />
      </div>
    </UserProvider>
  )
}

export default App
