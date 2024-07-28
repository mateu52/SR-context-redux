import { createContext } from "react";

const defaultValue = {
    company: 1
}
 type CompanyContextType = typeof defaultValue;

export const CompanyContext = createContext<CompanyContextType>(defaultValue);
