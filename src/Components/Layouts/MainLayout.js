import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavigationBar/NavigationBar";

const MainLayout = () => {
    return (
        <React.Fragment>
            <NavBar />
            <Outlet />
        </React.Fragment>
    )
}

export default MainLayout;