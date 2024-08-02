
// 3 klientow = logo, nazwa, kolory
// kontekst do zmiany
// kontekst m info o opcji

import { Companies } from "./components/Companies"
import { Company } from "./components/Company"
import { CompanyContextProvider } from "./components/CompanyContext"

// komponent wyboru
function App() {
  
  return (
    <div>
      <CompanyContextProvider>
        <Company />
      </CompanyContextProvider>
    </div>
  )
}

export default App
