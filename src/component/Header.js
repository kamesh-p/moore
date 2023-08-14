import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SellIcon from "@mui/icons-material/Sell";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HistoryTwoToneIcon from "@mui/icons-material/HistoryTwoTone";
import LoginIcon from "@mui/icons-material/Login";
import Tooltip from "@mui/material/Tooltip";
import { useSelector } from "react-redux";
const Header = ({ length, count }) => {
  const user = useSelector((state) => state.auth.user);

  // console.log("username", user);
  // console.log("username12", user.Users.name);
  const name = user?.Users?.name || "viewers";
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <div id="container">
            <div className="Title-logo">
              <Link to="/about" className="link-logo">
                <LibraryBooksIcon /> E-Moore
              </Link>
            </div>
            <div className="nav-div-class">
              <ul className="navbar-nav mr-auto">
                {/* <li className="nav-item active">
                <Link className="nav-link" to="/Cart">
                  Cart
                </Link>
              </li> */}
                <li className="nav-item active">
                  <Link
                    className="nav-link"
                    to={name === "admin" ? "/sell-admin" : "/Buy"}
                  >
                    <Tooltip title="Shop">
                      <ShoppingBagIcon />
                    </Tooltip>
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link
                    className="nav-link"
                    to={name === "admin" ? "/admin-dashboard" : "/Sell"}
                  >
                    <Tooltip title="Sell">
                      <SellIcon />
                    </Tooltip>
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/Library">
                    <Tooltip title="Library">
                      <LocalLibraryIcon />
                      <sup className="sup-length">{count}</sup>
                    </Tooltip>
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/Cart">
                    <Tooltip title="Cart">
                      <ShoppingCartIcon />
                      <sup className="sup-length">{length}</sup>
                    </Tooltip>
                  </Link>
                </li>
                <DropdownButton
                  align="end"
                  title={<AccountCircleOutlinedIcon />}
                  id="dropdown-menu-align-end"
                >
                  {/* <Dropdown.Item eventKey="4">
                    <Link className="Login-page" to="/Login">
                      <LoginIcon /> Login/Signin
                    </Link>
                  </Dropdown.Item> */}
                  <Dropdown.Item eventKey="4">
                    <Link className="Login-page" to="/Login">
                      <LoginIcon />
                      Login/Signin
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="4">
                    <Link className="Login-page" to="/history">
                      <HistoryTwoToneIcon />
                      History
                    </Link>
                  </Dropdown.Item>
                </DropdownButton>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
