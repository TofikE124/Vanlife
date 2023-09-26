import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Layout from './Components/Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import NotFoundPage from './Pages/NotFoundPage'
import Vans from './Pages/Vans/Vans'
import VanDetails from './Pages/Vans/VanDetails'
import HostLayout from './Pages/Host/HostLayout'
import HostIncome from './Pages/Host/HostIncome'
import HostReviews from './Pages/Host/HostReviews'
import HostDashboard from './Pages/Host/HostDashboard'
import HostVans from './Pages/Host/HostVans'
import HostVanDetails from './Pages/Host/HostVanDetails/HostVanDetails'
import HostVanInfo from './Pages/Host/HostVanDetails/HostVanInfo'
import HostVanPricing from './Pages/Host/HostVanDetails/HostVanPricing'
import HostVanPhotos from './Pages/Host/HostVanDetails/HostVanPhotos'
import Login from './Pages/Login'
import AuthRequired from './Components/AuthRequired'


function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='vans' element={<Vans />} />
                    <Route path='vans/:id' element={<VanDetails />}/>
                    <Route path='login' element={<Login />}/>

                    <Route element={<AuthRequired />}>
                        <Route path='host' element={<HostLayout />}>
                            <Route index element={<HostDashboard />} />
                            <Route path='income' element={<HostIncome />} />
                            <Route path='reviews' element={<HostReviews />} />
                            <Route path='vans' element={<HostVans />} />
                            <Route path='vans/:id' element={<HostVanDetails />}>
                                <Route index element={<HostVanInfo />} />
                                <Route path='pricing' element={<HostVanPricing />} />
                                <Route path='photos' element={<HostVanPhotos />} />
                            </Route>
                        </Route>
                    </Route>
                     
                    <Route path='*' element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
