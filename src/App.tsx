
import './App.css'
import { CompanyContextProvider } from './components/Company/CompanyContext'
import { CompanyInfo } from './components/Company/CompanyInfo'

// 3 klientow = logo, nazwa, kolory
// kontekst do zmiany
// kontekst m info o opcji
// komponent wyboru
function App() {
  
  return (
    <div>
      <CompanyContextProvider>
        <CompanyInfo />
      </CompanyContextProvider>
    </div>
  )
}

export default App
