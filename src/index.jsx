import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Layout from './Components/Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Vans from './Pages/Vans'

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='vans' element={<Vans />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
