import React, { useState, useEffect } from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FaWallet } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { fetchWalletBalance } from "../../utils/fetchWallet";
import { logOut } from "../../utils/logOut";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const { wallet } = useSelector((state) => state.wallet);

  function navActive() {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  window.addEventListener("scroll", navActive);

  let location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchWalletBalance(dispatch, currentUser);
  }, [currentUser]);

  return (
    <>
      <nav id={navbar ? classes.active : ""} className={classes.main}>
        <div className={classes.li}>
          <Link to={currentUser ? "/profile" : "/login"}>
            <p className={classes.black}>
              Digistore <span>Pay</span>
            </p>
          </Link>
        </div>
        <div className={classes.li}>
          {!currentUser && location.pathname === "/signup" ? (
            <p>
              Already a Member?{" "}
              <Link to="/login">
                <span>Login In</span>
              </Link>
            </p>
          ) : (!currentUser && location.pathname === "/login") ||
            (!currentUser && location.pathname === "/forgot") ? (
            <p>
              New User?{" "}
              <Link to="signup">
                <span>Sign Up</span>
              </Link>
            </p>
          ) : currentUser ? (
            <div className={classes.menuLinks}>
              <Link to="/profile" id={classes.desktopNav}>
                <span className={classes.menuLink}>Profile</span>
              </Link>
              {currentUser.data.userType === "franchise" && (
                <Link to="/services" id={classes.desktopNav}>
                  <span className={classes.menuLink}>Services</span>
                </Link>
              )}
              {(currentUser.data.userType === "admin" ||
                currentUser.data.userType === "distributor" ||
                currentUser.data.userType === "filedExecutive") && (
                <Link to="/onboard" id={classes.desktopNav}>
                  <span className={classes.menuLink}>onBoard</span>
                </Link>
              )}
              {wallet && (
                <Link to="profile/wallet">
                  {wallet !== null ? (
                    <span className={classes.menuLink}>
                      <FaWallet style={{ color: "var(--honoblue)" }} />{" "}
                      {parseFloat(wallet.balance).toFixed(2)}
                    </span>
                  ) : (
                    <span className={classes.menuLink}>
                      <FaWallet style={{ color: "var(--honoblue)" }} /> loading
                    </span>
                  )}
                </Link>
              )}
              <div
                id={classes.desktopNav}
                className={classes.logout}
                onClick={async () => await logOut(dispatch)}
              >
                <span className={classes.menuLink}>
                  <RiLogoutCircleRLine style={{ color: "var(--honoblue)" }} />{" "}
                  Logout
                </span>
              </div>
              <div
                className={classes.menu}
                onClick={() => setShowMenu(!showMenu)}
              >
                <span className={classes.menuLink}>
                  <IoMdMenu style={{ color: "var(--honoblue)" }} />
                </span>
              </div>
            </div>
          ) : null}
        </div>
      </nav>
      {showMenu && (
        <div id={navbar ? classes.active : ""} className={classes.mobileNav}>
          <Link
            to="/profile"
            className={classes.link}
            onClick={() => setShowMenu(!showMenu)}
          >
            <span className={classes.menuLink}>Profile</span>
          </Link>
          {currentUser.data.userType === "franchise" && (
            <Link
              to="/services"
              className={classes.link}
              onClick={() => setShowMenu(!showMenu)}
            >
              <span className={classes.menuLink}>Services</span>
            </Link>
          )}
          {(currentUser.data.userType === "admin" ||
            currentUser.data.userType === "distributor" ||
            currentUser.data.userType === "fieldExecutive") && (
            <Link
              to="/onboard"
              className={classes.link}
              onClick={() => setShowMenu(!showMenu)}
            >
              <span className={classes.menuLink}>OnBoard</span>
            </Link>
          )}
          <div
            className={classes.logout}
            onClick={async () => {
              setShowMenu(!showMenu);
              await logOut(dispatch);
            }}
          >
            <span className={classes.menuLink}>
              <RiLogoutCircleRLine style={{ color: "var(--honoblue)" }} />{" "}
              Logout
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
