import { Company } from "./Company"
import {  useCompanyContext } from "./CompanyContext"

export const Companies = () => {
    const {toggleOne, toggleTwo, toggleThree } = useCompanyContext()
    return (
        <div>
            <button onClick={toggleOne}>1</button>
            <button onClick={toggleTwo}>2</button>
            <button onClick={toggleThree}>3</button>
            <div>
                
            </div>
        </div>
    )
}