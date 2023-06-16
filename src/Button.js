import AboutMe from "./AboutMe";
import ReactDom from "react-dom";
const Button=(props)=>{
const Am=()=>{
    const root = ReactDom.createRoot(document.getElementById('root'));
    root.render(
        <AboutMe/>
    );
}
return(
<>
<button style={{backgroundColor:"#007FFF",border:"2px solid black",height:"50px",borderRadius:"25px",fontSize:"20px",fontFamily:"Gill Sans",color:"white",fontWeight:"bold",}} onClick= {Am}>{props.value}</button>
</>
);
}
export default Button;