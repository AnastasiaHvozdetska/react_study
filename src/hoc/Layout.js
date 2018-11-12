import React from 'react';
import Header from '../components/Header';
// import Footer from '../components/header_footer/Footer';

const Layout = (props) => {
    console.log(props)
    return (
        <div>
            <Header/>
               {props.children}
            {/* <Footer/> */}
        </div>
    );
};

export default Layout;