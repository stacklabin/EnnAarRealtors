import {useState,useEffect} from 'react'
import axios from 'axios'
import TrendingCard from './TrendingCard'
export default function Projects({limit, heading, type}) {
    const [trendingPropertyList, setTrendingPropertyList] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(async() => {
        await axios.get('/api/admin/property')
        .then(res => {
            console.log("res is ",res.data)
            setTrendingPropertyList(res.data)
            setLoading(false)
        })
        .catch(err=>{  
            console.log("error is ",err.response.data)
        })

    
}, [])
    return (
        <section className="bg-gray-900 p-4">
            <h2 className="text-white text-center font-bold text-2xl p-4">{heading}</h2>
            <div className="cardContainers flex justify-evenly flex-wrap">
            {
                trendingPropertyList.length>0||loading===false?(
                    trendingPropertyList.map((item) => {
                        return (
                            <TrendingCard key={item._id} item={item}/>
                        );
                    })
                ):(
                    <div className="loader"></div>
                )
            }
            </div>
        </section>
    );
}