import React from 'react'
import { Routes, Route } from "react-router-dom"
import SignupPage from '../pages/SignupPage'
import LoginPage from '../pages/LoginPage'
import NotFound from '../pages/PageNotFound'
import CreateResumePage from '../pages/CreateResumePage'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/create-resume" element={<CreateResumePage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default AllRoutes