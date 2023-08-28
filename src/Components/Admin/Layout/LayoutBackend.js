 
import React from 'react';
import NavBar from './Header';
import Footer from './Footer';



const LayoutBackend = ({ children }) => {
  return (

    <body className='container'>
        <NavBar/>
        <div>{children}</div>
     
       
    </body>
  );
};

export default LayoutBackend;


