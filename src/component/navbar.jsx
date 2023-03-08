import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import Menu,{Cross}  from "../svg/svg"


const NavBar = (props)=>{
    const [modalActive,SetModalActive] = useState(false)
    
    return(
    <>
        <div className={modalActive?"modalNav active":"modalNav"} style={{height:props.hauteur}}>
            <div className="wrapper">
                <div onClick={()=>SetModalActive(!modalActive)}>
                <Cross  />  

            </div>
                <div onClick={()=>SetModalActive(!modalActive)}><Link href="./">Home</Link> </div>
                <div onClick={()=>SetModalActive(!modalActive)}><Link href="./#feedback">FeedBack</Link> </div>
                <div onClick={()=>SetModalActive(!modalActive)}><Link href="./#offer">Experiences</Link> </div>
                <div onClick={()=>SetModalActive(!modalActive)}><Link href="./#contact">Contact</Link></div> 
            </div>
            
            
        </div>
         <nav >
            <div className="wrapper-nav">

                <img className="logo" src="./logo.png" />  
                <div  onClick={()=>{
                    SetModalActive(!modalActive)}
                    }>
                <Menu  />  
                </div>
                <div className="list">
                    <Link href="./">Home</Link> 
                    <Link href="./#feedback">FeedBack</Link> 
                    <Link href="./#offer">Experiences</Link> 
                    <Link href="./#contact">Contact</Link> 
                </div>
            </div>
            
        </nav>
    
    </>
       
    )
}
export default NavBar