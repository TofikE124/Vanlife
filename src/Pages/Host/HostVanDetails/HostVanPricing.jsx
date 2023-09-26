import React, { useEffect, useState } from "react"
import { useLocation, useOutletContext } from "react-router-dom"


export default function HostVanPrice(){

    const [van,setVan] = useState(null)
    const outletContext = useOutletContext()


    useEffect(()=>{
        setVan(outletContext.van)
    },[])

    return(
        van?
        <div className="container host-van-pricing">
            <p>${van.price}<span>/day</span></p>
        </div>
        :<h2>Loading...</h2>
    )
}