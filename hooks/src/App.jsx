import ReactUseCallback from './components/ReactUseCallback'
import ReactUseContext from './components/ReactUseContext'
import ReactUseEffect from './components/ReactUseEffect'
import ReactUseMemo from './components/ReactUseMemo'
import ReactUseState from './components/ReactUseState'
import './styles/App.css'
import UserProvider from './FuncionesYHooks/UserProvider'
import ReactUseReducer from './components/ReactUseReducer'


function App()
{

  return (
    <UserProvider>
      <div className="App">
        <ReactUseState />
        <ReactUseEffect />
        <ReactUseContext />
        <ReactUseCallback />
        <ReactUseMemo />
        <ReactUseReducer />
      </div>
    </UserProvider>
  )
}

export default App
