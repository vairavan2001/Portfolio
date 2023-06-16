import{FiMail} from 'react-icons/fi' 
import {BsTelephoneFill} from 'react-icons/bs'
import photo from './1659272132871.jpg'
import file from './VairavanResume.pdf'
const AboutMe =()=>{
    return(
        <>
        <div style={{display:"inline-block",margin:0,alignItems:"center",padding:"10px"}}>
        <div style={{backgroundColor:"MediumSeaGreen",marginTop:"5%",marginRight:"5%",marginLeft:"5%",marginBottom:0,borderRadius:"10px",}}>
        <h3 style={{textAlign:"center",marginTop:"80px",paddingTop:"30px",fontSize:"30px"}}>About Me</h3>
        <img src={photo} style={{margin:"3% 35%",border:"2px solid black",marginLeft:"30%",border:"0",borderRadius:"10px"}} alt="Vairavan" width={"40%"}/>
        <p style={{fontSize:"25px",margin:"0 25px",color:"black",fontWeight:"initial",paddingBottom:"30px",marginBottom:0,textAlign:"justify"}}>Hi,My name is Vairavan. I am a Mechanical Engineer turned to a developer.The capability of building things that people can use just by giving instructions,made me how amazing and powerful programming can be.</p>
        <button style={{marginLeft:"35%",width:"25%",height:"50px",backgroundColor:"#007FFF",border:"2px solid black",borderRadius:"10px",fontSize:"18px",display:"block",fontFamily:"Gill Sans", color:"white"}}><a style={{textDecoration:"none"}}href={file} target='_blank'>Download Resume</a></button>
        <div style={{paddingBottom:"30px"}}></div>
        </div>
        <div style={{margin:"5% 10%",width:"80%",display:"inline-block"}}>
            <h3 style={{textAlign:"center",fontSize:"30px",marginLeft:0}}>Projects</h3>
            <div style={{width:"80%",marginRight:"10%",marginLeft:"10%",marginBottom:"5%",backgroundColor:"#E8E8E8",border:"20px solid transparent",borderRadius:"10px"}}>
                <h3>Automated Teller Machine(ATM)</h3>
                <p style={{fontSize:"20px",marginTop:"0px",color:"black",fontWeight:"lighter",textAlign:"justify",padding:"5px"}}>It is a web application developed with the help of Spring Boot framework.It had been forced on both administrator and customer priorities like create and delete account,modifty customer details,changing pin,cash withdrawal,fast cash etc..,  </p>
                <a href="https://github.com/vairavan2001/ATM-Web-Application.git" target='_blank' style={{color:"MediumSeaGreen", fontWeight:"bold",textDecoration:"none",}}>Source Code</a> 
            </div>
            <div style={{width:"80%",marginLeft:"10%",marginBottom:"5%",backgroundColor:"#E8E8E8",border:"20px solid transparent",borderRadius:"10px"}}>
                <h3>Flames Calculator</h3>
                <p style={{fontSize:"20px",marginTop:"0px",color:"black",fontWeight:"lighter",textAlign:"justify"}}>It is a web application developed by using JavaScript,HTML,CSS</p>
                <a href="https://github.com/vairavan2001/FlamesApp.git" target='_blank' style={{color:"MediumSeaGreen", fontWeight:"bold",textDecoration:"none",}}>Source Code</a> 
            </div>
            <div style={{width:"80%",marginRight:"10%",marginLeft:"10%",marginBottom:"5%",backgroundColor:"#E8E8E8",border:"20px solid transparent",borderRadius:"10px"}}>
                <h3>ToDo App </h3>
                <p style={{fontSize:"20px",marginTop:"0px",color:"black",fontWeight:"lighter",textAlign:"justify"}}>It is a web application developed by using React JS. This application is used to add our daily tasks. We can also able to check-in and check-out the task completion status and can able to see the count of task completed and pending and can delete the task as well.</p>
                <a href="https://github.com/vairavan2001/ToDoApp.git" target='_blank' style={{color:"MediumSeaGreen", fontWeight:"bold",textDecoration:"none",}}>Source Code</a> 
                <a href="https://todoapplicationbyvairavan.netlify.app/" target='_blank' style={{color:"MediumSeaGreen", fontWeight:"bold",textDecoration:"none",paddingLeft:"20px"}}>Launch App</a> 

            </div>
            <div style={{width:"80%",marginRight:"10%",marginLeft:"10%",marginBottom:"5%",backgroundColor:"#E8E8E8",border:"20px solid transparent",borderRadius:"10px"}}>
                <h3>Portfolio</h3>
                <p style={{fontSize:"20px",marginTop:"0px",color:"black",fontWeight:"lighter",textAlign:"justify"}}>It is my portifolio deveploed by using React JS</p>
                <a href="https://github.com/vairavan2001/Portfolio.git" style={{color:"MediumSeaGreen", fontWeight:"bold",textDecoration:"none",}}>Source Code</a> 
            </div>
        </div>
        <div style={{display:"inline-block",width:"100%",textAlign:"center",marginBottom:"5%",marginTop:"-8%"}}>
        <h3 style={{textAlign:"center",fontSize:"30px",margin:"1% 0"}}>Contact</h3>
        <a href="mailto:vairavan0719@gmail.com" target="_blank" style={{fontFamily: 'Gill Sans',fontSize:20,fontWeight:"inherit"}}><FiMail size="30" style={{paddingRight:10}}/>vairavan0719@gmail.com</a>
        <h2 style={{fontSize:20,color:"black",fontWeight:"inherit"}}><BsTelephoneFill size="30" style={{paddingRight:10}}/>7708249150</h2>
        </div>
        </div>
        </>
    );
}
export default AboutMe;