import { createContext, useContext, useState } from "react";

type CompanyContextType = {
    company: boolean;
    toggleValue: () => void;
    trueCompany: () => void;
    falseCompany: () => void;
}

export const CompanyContext = createContext<CompanyContextType| null>(null);

export const useCompanyContext = () => {
    const context = useContext(CompanyContext);
    if(context === null) {
        throw new Error('Oh no! error component inside')
    }
    return context;
}

const useCompany = () => {
    const [company, setCompany] = useState(true);

    const toggleValue = () => setCompany((value) => !value);
    const trueCompany = () => setCompany(true);
    const falseCompany = () => setCompany(false);

    return { company, toggleValue, trueCompany, falseCompany }
}

export const CompanyContextProvider = ({ children}:{children: React.ReactNode}) => {
    const { company, toggleValue, trueCompany, falseCompany } = useCompany();
    return (
        <CompanyContext.Provider value={{ company, toggleValue, trueCompany, falseCompany }}>
            {children}
        </CompanyContext.Provider>
    )
}
