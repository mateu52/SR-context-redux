import { createContext, useContext, useState } from "react";

type CompanyContextType = {
    color: string;
    company: string;
    toggleOne: () => void;
    toggleTwo: () => void;
    toggleThree: () => void;
}

const CompanyContext = createContext<CompanyContextType | null>(null)

export const useCompanyContext = () => {
    const context = useContext(CompanyContext);
    if(context === null) {
        throw new Error('Oh no! error compnent inside')
    }
    return context;
}

const style1 = {
    backgroundColor: "red"
}
const style2 = {
    backgroundColor: "blue"
}
const style3 = {
    backgroundColor: "green"
}
const useCompany = () => {
    const [color, setColor] = useState('#ee5253');
    const [company, setCompany] = useState('Coca-cola')
    const toggleOne = () => {setColor('#ee5253'); setCompany('Coca-cola');}
    const toggleTwo = () => {setColor('#1dd1a1'); setCompany('Starbucks');}
    const toggleThree = () => {setColor('#54a0ff'); setCompany('Ibm');}

    return { color, company, toggleOne, toggleTwo, toggleThree }
}

export const CompanyContextProvider = ({ children}: {children: React.ReactNode}) => {
    const { color, company, toggleOne, toggleTwo, toggleThree } = useCompany();
    return (
        <CompanyContext.Provider value={{ color, company, toggleOne, toggleTwo, toggleThree}} >
            {children}
        </CompanyContext.Provider>
    )
}