import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Layout from './Components/Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Vans from './Pages/Vans/Vans'
import VanDetails from './Pages/Vans/VanDetails'
import HostLayout from './Pages/Host/HostLayout'
import HostIncome from './Pages/Host/HostIncome'
import HostReviews from './Pages/Host/HostReviews'
import HostDashboard from './Pages/Host/HostDashboard'

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='vans' element={<Vans />} />
                    <Route path='vans/:id' element={<VanDetails />}/>
                    <Route path='host' element={<HostLayout />}>
                        <Route index element={<HostDashboard />} />
                        <Route path='income' element={<HostIncome />} />
                        <Route path='reviews' element={<HostReviews />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
