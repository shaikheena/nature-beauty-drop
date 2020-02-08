import React from "react"

const logo = require("../images/logo.png")
var sidebarMenu = [
    {
        home: "Home",
        products: "Products",
        about: "About Us",
        contact: "Contact Us"
    }
];

export default function Sidebar({ }) {
    return <sidebar style={sidebarStyle.sidebar} className="shadow d-flex">
        <div className="text-center mt-5">
            <img src={logo} className="sidebar__logo mb-4" />
        </div>
        <div className="pl-4 " style={sidebarStyle.menu}>
            {sidebarMenu.map((menu, index) => <SideMenu key={index} menu={menu} />)}
        </div>
        <ul class="list-unstyled d-flex justify-content-center mt-5">
            <li class=" p-2"><a href="#"><i class="fas fa-dove"></i></a></li>
            <li class=" p-2 ml-2"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
            <li class=" p-2 ml-2"><a href="#"><i class="fab fa-instagram"></i></a></li>
        </ul>
    </sidebar>
}

const SideMenu = (props) => {
    var sideMenu = props.menu;
    return <ul className="list-unstyled">
        <li><a href="#" className="nav-bar">{sideMenu.home}</a></li>
        <li><a href="#">{sideMenu.products}</a></li>
        <li><a href="#">{sideMenu.about}</a></li>
        <li><a href="#">{sideMenu.contact}</a></li>
    </ul>
}

const sidebarStyle = {
    sidebar: {
        "min-width": "20vw",
        "maxWidth": "240px",
        "background-color": "rgba(255, 255, 255, 1)",
        "flex-direction": "column",
    },

    menu: {
        "flex":1
    }

}