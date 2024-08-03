import {  useCompanyContext } from "./CompanyContext"

export const Companies = () => {
    const {toggleOne, toggleTwo, toggleThree } = useCompanyContext()
    return (
        <div>
            <button onClick={toggleOne}>Coca-cola</button>
            <button onClick={toggleTwo}>Starbucks</button>
            <button onClick={toggleThree}>Ibm</button>
            <div>
                
            </div>
        </div>
    )
}