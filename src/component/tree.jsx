import { useEffect, useState } from "react"
import { InView } from 'react-intersection-observer';

const Tree =()=>{
    let [isVIsible,setIsVIsible] = useState(false)
    
    let [index,setIndex] = useState(0)
    function incr(){
        if(index===2){
            setIndex(0)
        } else{

            setIndex(index+1)
        }
    }
    useEffect(()=>{
      
        const interval = setInterval(()=>{
            incr()
        },1500)

        return ()=>clearInterval(interval)
    })
    return(
        <InView as="div" onChange={(inView)=>setIsVIsible(inView)} className={isVIsible?"gallery active":"gallery"}>
            <img className={index===0?"active":""} src="./savane.jpg" />
            <img className={index===1?"active":""} src="./kite.jpg" />
            <img className={index===2?"active":""} src="./jungle.jpg" />

        </InView>
    )
}
export default Tree