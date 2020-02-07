import { Link } from "gatsby"
import React from "react"

class Header extends React.Component {
  render() {
    return (
      <ul class="navbar-nav mr-auto">
        <li class="nav-item ">
          <Link to="/" className="nav-link text-dark">Order on Phone: +00 000 00 00000</Link>
        </li>
        <li class="nav-item ">
          <Link to="/about" className="nav-link text-dark">Organicstore@gmail.com</Link>
        </li>
        <li className="nav-item ">
          <Link to="/project" className="nav-link text-dark">Account</Link>
        </li>
        <li class="nav-item ">
          <Link to="/experience" className="nav-link text-dark">Whishlist</Link>
        </li>
      </ul>
    )
  }
}


export default Header
