import { Companies } from "./Companies"
import { useCompanyContext } from "./CompanyContext"

const style1 = {
     color:"white",
     width: "200px",
     height: "200px",
     backgroundRepeat: "no-repeat"  ,
     backgroundSize: "contain",
    backgroundImage:"url(https://static.vecteezy.com/system/resources/previews/020/190/670/original/cocacola-logo-cocacola-icon-free-free-vector.jpg)",  
}
const style2 = {
    color:"white",
    width: "200px",
    height: "200px",
    backgroundRepeat: "no-repeat"  ,
    backgroundSize: "cover",
   backgroundImage:"url(https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/640px-Starbucks_Corporation_Logo_2011.svg.png)",  
}
const style3 = {
    color:"white",
    width: "200px",
    height: "200px",
    backgroundRepeat: "no-repeat"  ,
    backgroundSize: "contain",
    backgroundImage:"url(https://animationvisarts.com/wp-content/uploads/2021/01/IBM-Icon.jpg)",  
}

export const Company = () => {
    const { company } = useCompanyContext()
    return (
        <div>
            <Companies />
                <p>Firma nr {company}</p>
                <p style={{ color: company}}>1</p>
            {/* {company===1 ? 
                <p style={{backgroundColor:"red"}}>1</p>: null}
            {company===2 ? 
                <p style={style2}>2</p>: null}
            {company===3 ? 
                <p style={style3}>3</p>: null} */}
        </div>
        
    )
}