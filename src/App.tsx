import './App.css'
import { CompanyContext } from './components/Company/CompanyContext'
import { CompanyInfo } from './components/Company/CompanyInfo'

// 3 klientow = logo, nazwa, kolory
// kontekst do zmiany
// kontekst m info o opcji
// komponent wyboru
function App() {

  return (
    <div>
      <CompanyContext.Provider value={{company: 2}}>
        <CompanyInfo />
      </CompanyContext.Provider>
    </div>
  )
}

export default App
