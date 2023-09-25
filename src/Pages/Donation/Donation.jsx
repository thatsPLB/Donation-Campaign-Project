import { useEffect, useState } from "react";
import SingleCard from "../Category/SingleCard";

const Donation = () => {

    const [donate,setDonate] =  useState([])

    const[noFound, setNoFound] = useState("")


    const [isShow,setShow] =useState(false)
    useEffect(()=>{
        const donateItem = JSON.parse(localStorage.getItem('donation'))
        if(donateItem){
            setDonate(donateItem)
        }
        else{
            setNoFound("no data found")
        }

    },[])
    console.log(donate);
    return (
        <div>
            {noFound? <p className="h-[80vh] flex justify-center items-center">{noFound}</p> 
            :
            <div>
                <div className="grid grid-cols-2 gap-5">
                    {
                        isShow? donate.map(category => <SingleCard key={category.id} category={category}></SingleCard>) 
                        :
                        donate.slice(0,4).map(category => <SingleCard key={category.id} category={category}></SingleCard>)
                    }
                   
                </div>
                <button onClick={()=>setShow(!isShow)} className="px-5 bg-green-600 block mx-auto">{isShow?"See Less" : "See all"}</button>
                
            </div>}
        </div>
    );
};

export default Donation;