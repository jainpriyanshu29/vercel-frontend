import React from 'react'
import { Routes, Route } from "react-router"
import Index from './component/Index'
import About from './component/About'
import Blog from './component/Blog'
import Contact from './component/Contact'
import Signup from './component/Signup'
import Login from './component/Login'
import Dashboard from './component/Dashboard'
import Add from "./component/Add"
import SingleBlog from './component/SingleBlog'

const PublicRoutes = () => {


    
    return (

        <>
            <Routes>
                <Route index path='/' element={<Index />} />
                <Route path='/about' element={<About />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path='/userpanel' element={<Dashboard />} />
                <Route path='/addblog' element={<Add />} />
                <Route path='/blog/:id' element={<SingleBlog />} />
            </Routes>
        </>

    )
}

export default PublicRoutes