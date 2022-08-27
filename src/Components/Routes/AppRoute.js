import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from '../Error/Error';
import Home from '../Layouts/Home';
import MainLayout from '../Layouts/MainLayout';
import Weather from '../Layouts/Weather';

const AppRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayout />}>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/weather' element={<Weather />}></Route>
                </Route>
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoute;