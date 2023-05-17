import Header from "../Header/Header.jsx";
import {Outlet} from "react-router-dom";
import classes from './Layout.module.css'

const Layout = () => {
    return (
        <>
            <Header />
            <div className={classes.app}>
             <Outlet/>
            </div>
        </>
    );
};

export default Layout;