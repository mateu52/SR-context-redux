import { type MouseEventHandler } from "react"

import { useCompanyContext } from './CompanyContext'

export const CompanyCredential = () => {
    const { company, toggleValue, falseCompany, trueCompany } = useCompanyContext()

    const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
        toggleValue()
    }

    return (
        <div>
            <p>Is company nr: {company===true? "true": "false"} </p>
                {/* {company===2? "nr2": null}{company===3? "nr3": null}</p> */}
            <button onClick={handleClick}>toogle</button>
            <button onClick={falseCompany}>falseCompany</button>
            <button onClick={trueCompany}>trueCompany</button>
        </div>
    )
}