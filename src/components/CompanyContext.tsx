import { createContext, useContext, useState } from "react";

type CompanyContextType = {
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
    const [company, setCompany] = useState('#ee5253');

    const toggleOne = () => setCompany('#ee5253');
    const toggleTwo = () => setCompany('#1dd1a1');
    const toggleThree = () => setCompany('#54a0ff');

    return { company, toggleOne, toggleTwo, toggleThree }
}

export const CompanyContextProvider = ({ children}: {children: React.ReactNode}) => {
    const { company, toggleOne, toggleTwo, toggleThree } = useCompany();
    return (
        <CompanyContext.Provider value={{ company, toggleOne, toggleTwo, toggleThree}} >
            {children}
        </CompanyContext.Provider>
    )
}