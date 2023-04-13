
  import './style.css';
  import profil from "../assets/images/profil.jpg";
  import { Icon } from '@iconify/react';
  import React, { useEffect, useState } from "react";


  const BANNER = "https://i.imgur.com/CaKdFMq.jpg";


const SideBar1 = () => {
  
  const [header_id, setHeader_id]= useState("header")
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  const updateMenu = () => {
    if (!isMenuClicked) {
      setHeader_id("header2")
      setIsMenuClicked(true)
    }else {
      setHeader_id("header")
      setIsMenuClicked(false)
    }
  }

  return (
    <>
        <i className="bi bi-list mobile-nav-toggle d-xl-none" onClick={updateMenu}></i>
        <header id={header_id}>
          <div class="d-flex flex-column">

            <div class="profile">
              <img src={profil} alt="" class="img-fluid rounded-circle" width='150'/>
              <h1 class="text-light" className="my-2 py-2"><a href="index.html">Alex Smith</a></h1>
            </div>

            <nav id="navbar" class="nav-menu navbar">
              <ul>
                <li><a href="/dashboard" class="nav-link scrollto active"><Icon icon="bx:home" /> <span>&nbsp; Home</span></a></li>
                <li><a href="/wasiatku" class="nav-link scrollto"><Icon icon="bx:book-bookmark" /> <span>&nbsp; Wasiatku</span></a></li>
                <li><a href="/wasiatuntukku" class="nav-link scrollto"><Icon icon="bx:book-heart" /> <span>&nbsp; Wasiat Untukku</span></a></li>
                <li><a href="/profile" class="nav-link scrollto"><Icon icon="bx:user" /> <span>&nbsp; Profil</span></a></li>
                <li><a href="/logout" class="nav-link scrollto"><Icon icon="bx:undo" /> <span>&nbsp; Logout</span></a></li>
                </ul>
            </nav>
          </div>
        </header>
    </>
  );


};
export default SideBar1;