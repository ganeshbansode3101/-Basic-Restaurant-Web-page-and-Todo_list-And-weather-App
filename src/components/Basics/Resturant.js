import React, { useState } from 'react'
import "./style.css";
import Menu from './MenuApi';
import MenuCard from "./MenuCard";

import Navbar from "./Navbar";


const uniqelist = [

  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All", 
];


console.log(uniqelist);



const Resturant = () => {

  const [menuData, setmenuData] = useState(Menu)
  const [menulist, setMenulist] = useState(uniqelist)

  console.log(Menu)
  const filterItem = (category) => {

    if(category === "All"){
      setmenuData(Menu);
      return;
    }
    const updatedlist = Menu.filter((curElem) => {
      return curElem.category === category;

    });

    setmenuData(updatedlist);
  }


  return (
    <>


      <Navbar filterItem={filterItem} menulist = {menulist} />

      <MenuCard menuData={menuData} />



    </>
  )
}

export default Resturant