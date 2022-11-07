import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/SharedPage/Footer/Footer';
import Header from '../../Components/SharedPage/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;