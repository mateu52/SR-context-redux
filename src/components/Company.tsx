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
document.getElementById("root").style.height = '100vh'
document.getElementById("root").style.width = '100vh'
export const Company = () => {
    const { color, company } = useCompanyContext()
    console.log(document.body)
    return (
        <div>
                <p>Firma {company}</p>
            {color==='#ee5253' ? 
                document.getElementById("root").style.backgroundColor='#ee5253' && 
                <p style={style1}></p>
                : null}
            {color==='#1dd1a1' ? 
                document.getElementById("root").style.backgroundColor='#1dd1a1'  &&
                <p style={style2}></p>  
                : null}
            {color==='#54a0ff' ? 
                document.getElementById("root").style.backgroundColor='#54a0ff' && 
                <p style={style3}></p>
                : null}
        </div>
        
    )
}