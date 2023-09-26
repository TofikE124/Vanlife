import React, { useEffect, useState } from "react"
import { useParams,Link, Outlet, NavLink, useOutletContext } from "react-router-dom"
import { getVan } from "../../../firebase"


export default function HostVanDetails(){

    const {id} = useParams()
    const [van,setVan] = useState(null)
    useEffect(()=>{
        getVan(id)
            .then(data=>{
                setVan(data)
            })
    },[])


    const activeStyle=  {
        color: "#161616",
        fontWeight: 700,
        textDecoration: "underline"
    }

    return(
        van?
        <div className="container host-van-details-container">
            <Link to=".." relative="path" className="back-to-vans">
                <span>←</span> 
                <p>Back to all vans </p>
            </Link>
            <div className="host-van-details">
                <img src={van.imageUrl} />
                <div className="host-van-details-info">
                    <div className={`filter-btn filter-${van.type} filter-active filter-small`}>{van.type}</div>
                    <p className="host-van-details-name">{van.name}</p>
                    <p className="host-van-details-price">${van.price}<span>/day</span></p>
                </div>
            </div>

            <nav className="host-van-details-nav">
                <NavLink
                end
                 to="."
                 style={({isActive})=>isActive?activeStyle:null}
                 >
                    Details
                </NavLink>

                <NavLink
                 to="pricing"
                 style={({isActive})=>isActive?activeStyle:null}
                 >
                    Pricing
                </NavLink>

                <NavLink
                 to="photos"
                 style={({isActive})=>isActive?activeStyle:null}
                 >
                    Photos
                </NavLink>
            </nav>

            <Outlet context={{van}} />
        </div>
        :<h2>Loading....</h2>
    )
}