import React from "react"
import { Link } from 'gatsby'

const logo = require("../images/logo.png")
var sidebarMenu = [
    { label: 'Home', link: '/' },
    { label: 'Products', link: '/products' },
    { label: 'About Us', link: '/about' },
    { label: 'Contact Us', link: '/contact' },
];

export default function Sidebar({ }) {
    return <sidebar style={sidebarStyle.sidebar} className="shadow d-flex">
        <div className="text-center mt-5">
            <img src={logo} className="sidebar__logo mb-4" />
        </div>
        <div className="pl-4 " style={sidebarStyle.menu}>
            <ul className="list-unstyled">
                {sidebarMenu.map((menu, index) => <SideMenu key={index} menu={menu} />)}
            </ul>
        </div>
        <ul class="list-unstyled d-flex justify-content-center mt-5">
            <li class=" p-2"><a href="#"><i class="fas fa-dove"></i></a></li>
            <li class=" p-2 ml-2"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
            <li class=" p-2 ml-2"><a href="#"><i class="fab fa-instagram"></i></a></li>
        </ul>
    </sidebar>
}

const SideMenu = (props) => {
    var menu = props.menu;
    return <li>
        <Link to={menu.link} className="nav-link">{menu.label} </Link>
    </li>

}

const sidebarStyle = {
    sidebar: {
        "min-width": "20vw",
        "maxWidth": "240px",
        "min-height": "100vh",
        "background-color": "rgba(255, 255, 255, 1)",
        "flex-direction": "column",
    },

    menu: {
        "flex": 1
    }

}