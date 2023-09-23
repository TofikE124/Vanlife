import React, { useEffect, useState } from "react"
import { getVan } from "../data"
import { Link } from "react-router-dom"


export default function Van({id}){

    const [van,setVan] = useState(null)

    useEffect(()=>{
        setVan(getVan(id))
    },[])


    return(
        van&&
            <div className="van">
                <Link to={`/vans/${id}`}>
                    <img className="van-img" src={van.imageUrl} />
                    <div className="van-info">
                        <p className="van-name">{van.name}</p>
                        <p className="van-price">${van.price}<span>/day</span></p>
                    </div>
                    <div className={`filter-btn filter-${van.type} filter-active`}>{van.type}</div>
                </Link>
            </div>
    )
}