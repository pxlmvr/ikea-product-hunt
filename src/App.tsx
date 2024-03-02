import './App.css'
import { MainView } from './containers/MainView'
import { TeamProvider } from './context/teamContext'

function App() {
  return (
    <TeamProvider>
      <MainView />
    </TeamProvider>
  )
}

export default App
