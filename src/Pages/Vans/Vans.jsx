import React, { useEffect, useState } from "react"
import { Link, useLocation, useSearchParams } from "react-router-dom"
import { getVans } from "../../firebase"

export default function Home(){

    const location =useLocation()

    const [vans,setVans] = useState(null)
    const [searchParams,setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get('type')

    const displayedVans = 
        typeFilter
            ?vans.filter(van=>van.type===typeFilter)
            :vans    

    const vansElements = displayedVans?.map(van=>{
        return(
            <div className="van" key={van.id}>
                <Link to={`/vans/${van.id}`} state={{search:`?${searchParams.toString()}`}}>
                    <img className="van-img" src={van.imageUrl} />
                    <div className="van-info">
                        <p className="van-name">{van.name}</p>
                        <p className="van-price">${van.price}<span>/day</span></p>
                    </div>
                    <div className={`filter-btn filter-${van.type} filter-active`}>{van.type}</div>
                </Link>
            </div>   
        )
    })

    function changeFilter(key,value){
        // const sp = new URLSearchParams(searchParams)
        // if(value){
        //     sp.set(key,value)
        //     setSearchParams(sp.toString())
        // }
        // else{
        //     sp.delete(key)
        //     setSearchParams(sp.toString())
        // }

        setSearchParams((prevSearchParams)=>{
            if(value){
                prevSearchParams.set(key,value)
            }
            else{
                prevSearchParams.delete(key)
            }
            return prevSearchParams

        })
    }


    useEffect(()=>{
        getVans()
            .then(data=>{
                setVans(data)
            })
            
    },[])


    return(
        <div className="vans-page">
            <div className="container">
                <h2 className="vans-page-title">Explore our vans options</h2>
                <div className="filter-vans-container">
                    <button 
                        className={`
                            filter-btn filter-simple 
                            ${searchParams.get('type')==='simple'?
                            'filter-active':''}`}
                        onClick={()=>changeFilter('type','simple')}
                        >
                            Simple
                    </button>

                    <button 
                        className={`
                            filter-btn filter-rugged 
                            ${searchParams.get('type')==='rugged'?
                            'filter-active':''}`}                        
                        onClick={()=>changeFilter('type','rugged')}
                        >
                            Rugged
                    </button>

                    <button 
                        className={`
                            filter-btn filter-luxury 
                            ${searchParams.get('type')==='luxury'?
                            'filter-active':''}`}                         
                        onClick={()=>changeFilter('type','luxury')}
                        >
                            Luxury
                    </button>

                    {
                        searchParams.size?
                        <button 
                        className="clear-filters-btn"
                        onClick={()=>changeFilter('type','')}
                        >
                            Clear filters
                        </button>
                        :null
                    }

                </div>

                <div className="vans-container">
                    {vansElements}
                </div>

            </div>
        </div>
    )
}