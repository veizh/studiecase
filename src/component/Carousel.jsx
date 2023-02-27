import { useEffect, useState } from "react"
import { InView } from 'react-intersection-observer';

const Card =(props)=>{
    const [touchPosition, setTouchPosition] = useState(null)

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
        console.log(touchDown);
    }
    const handleTouchMove = (e) => {
        const touchDown = touchPosition
    
        if(touchDown === null) {
            return
        }
    
        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch
    
        if (diff > 5) {
            props.incr()

        }
    
        if (diff < -5) {
            props.prev()
        }
    
        setTouchPosition(null)
    }
    return(

        <div className="cardAvis" onTouchStart={handleTouchStart}  onTouchMove={handleTouchMove}  onClick={()=>props.incr()} >
            <img className="photo" src={props.source} />
            <p className="name">{props.name + " "+props.lastname}</p>
            <p className="avis">{props.avis}</p>
        </div>
    )
}
const avis=[
    {
        source:"./feedBack/1.jpg",
        name:"Cillian",
        lastname:"Murphy",
        avis:"I had an incredible experience with Xadventure! The guides were knowledgeable and made me feel safe, while still pushing me outside of my comfort zone. I would definitely recommend them to anyone looking for an unforgettable adventure. The attention to detail from start to finish was impressive. From the initial booking process to the adventure itself, everything was well-organized and seamless. The guides were friendly, professional, and experienced, which made me feel confident in their abilities. They struck the perfect balance of encouraging me to push my limits while still making sure I was comfortable and safe."
    },
    {
        source:"./feedBack/2.jpg",
        name:"Will",
        lastname:"Smith",
        avis:"The attention to detail from this agency is truly amazing. From the equipment they provide to the food they serve on camping trips, everything is top-notch. They clearly care about their customers and providing the best possible experience. I was blown away by the level of thought and care that went into every aspect of the adventure. The equipment was in excellent condition and well-maintained, and the food was delicious and well-prepared. It's clear that this agency takes pride in what they do and wants to give their customers an unforgettable experience. "
    },
    {
        source:"./feedBack/3.jpg",
        name:"Elon ",
        lastname:"Musk",
        avis:"I've been on several adventures with this agency, and each one has been unique and amazing in its own way. They really know how to tailor experiences to different interests and skill levels, so everyone can have a great time. I appreciate the variety of adventures that this agency offers. Whether you're looking for something more extreme or a more relaxed experience, they have something for everyone. The guides are excellent at gauging the skill levels and interests of the group and making sure that everyone has a great time. I've always felt like I was in good hands with this agency. "
    },
    {
        source:"./feedBack/4.jpg",
        name:"Quentin",
        lastname:"Tarantino",
        avis:"The enthusiasm and passion of the guides and instructors is infectious. They clearly love what they do and want to share that with others. It's hard not to feel inspired and energized after an adventure with them. The guides and instructors are the heart and soul of this agency. They have an infectious energy and enthusiasm that makes every adventure feel like a once-in-a-lifetime experience. They're knowledgeable, patient, and genuinely care about their customers' experience. I've always felt like I was part of a team with this agency, rather than just a customer "
    },
    {
        source:"./feedBack/5.jpg",
        name:"Otto",
        lastname:"Hahn",
        avis:"This adventure agency exceeded my expectations in every way. I came in with high hopes, and they managed to blow me away. I can't wait to plan my next adventure with them! From start to finish, this agency went above and beyond to make sure that I had an unforgettable experience. They exceeded my expectations in every way, and I can't wait to see what other adventures they have in store. They've set the bar high for adventure companies, and I can't imagine going anywhere else."
    },
]
export default  function Carousel(){
    let [index,setIndex]=useState(0)
    const [isVisible,setVisible]=useState(false)
 
    function incrementer(){
        if(index===avis.length-1){

            setIndex(0)
        }
        else{
            setIndex(index+1)

           
        }
    }
    function next(){
        if(index===avis.length-1){

            setIndex(0)
        }
        else{
            setIndex(index+1)

           
        }
    }
    function prev(){
        if(index===0){

            setIndex(avis.length-1)
        }
        else{
            setIndex(index-1)
        }
    }
    useEffect(()=>{

    },[index])
    return(
        <InView as="div" onChange={(InView)=>setVisible(InView)} className={isVisible?"wrapper-carousel active":"wrapper-carousel"}>
           {<Card source={avis[index].source} lastname={avis[index].lastname} prev={()=>prev()} incr={()=>incrementer()} avis={avis[index].avis} name={avis[index].name}/>}
           <div className="navigation">{avis.map((e,i)=>{
            return(
           <div className={index===i?"point active":"point"} key={i}  onClick={()=>setIndex(i)}>
           </div>)})}
        </div>
        </InView>

    )
}