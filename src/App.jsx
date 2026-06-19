import './App.css'
import { QuizzProvider } from './context/QuizzContext';
import { AppUI } from './components/AppUI';

function App() {

  return (
    <>
      <QuizzProvider>
        <AppUI />
      </QuizzProvider>
    </>
  )
}

export default App
