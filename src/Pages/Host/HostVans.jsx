import React, { useEffect, useState } from "react"
import { getHostVans} from "../../firebase"
import { Link } from "react-router-dom"

export default function HostReviews(){


    const [vans,setVans] = useState([])

    useEffect(()=>{
        getHostVans('123')
            .then(data=>{
                setVans(data)
            })
    },[])

    const vansElements = vans.map(van=>{
        return(
            <div className="host-van-container">
                <Link to={`/host/vans/${van.id}`}>
                    <img className="host-van-img" src={van.imageUrl} />
                    <div className="host-van-info">
                        <p className="host-van-name">{van.name}</p>
                        <p className="host-van-price">${van.price} /day</p>
                    </div>
                </Link>
            </div>
        )
    })
     
    return(
        vansElements.length>0?
        <div className="host-vans">
            <div className="container">
                <h2 className="host-vans-title">Your listed vans</h2>
                <div className="host-vans-container">
                    {vansElements}
                </div> 
            </div>
        </div>
        :<h2>Loading</h2>
    )
}