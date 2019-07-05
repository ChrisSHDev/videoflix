import React from "react";
import Mohan from "../assets/images/Mohan-muruge.jpg";
import Logo from "../assets/logo/Logo-brainflix.svg";
import { Link } from "react-router-dom";

function Header({ history }) {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img id="logo" src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="header__toRight">
        <input className="header__search" placeholder="Search" />
        <div className="header__right">
          <button
            onClick={() => {
              if (typeof history !== "undefined") {
                history.push("/upload");
              } else {
                window.location.reload();
              }
            }}
            className="header__right--button"
            type="button"
            name="upload"
          >
            UPLOAD
          </button>

          <img className="header__right--Mohan" src={Mohan} alt="Mohan" />
        </div>
      </div>
    </header>
  );
}

export default Header;
