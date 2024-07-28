import { useContext } from "react"

import { CompanyContext } from './CompanyContext'

export const CompanyCredential = () => {
    const {company} = useContext(CompanyContext) 

    return (
        <div>
            <p>Is company nr: {company===1? "nr1": null}{company===2? "nr2": null}{company===3? "nr3": null}</p>
        </div>
    )
}