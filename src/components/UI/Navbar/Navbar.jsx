import React, { useState, useRef, useEffect } from 'react';
import { IoMdSearch } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import classes from './Navbar.module.css';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const toggleButtonRef = useRef(null);

  // Toggle the sidebar open/close
  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  // Close the sidebar if the click is outside of it
  const closeSidebar = (event) => {
    if (
      sidebarRef.current && !sidebarRef.current.contains(event.target) &&
      toggleButtonRef.current && !toggleButtonRef.current.contains(event.target)
    ) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeSidebar);
    return () => {
      document.removeEventListener('mousedown', closeSidebar);
    };
  }, []);

  useEffect(() => {
    // Function to handle screen size changes
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setIsSidebarOpen(false); // Hide the sidebar on large screens
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check screen size on initial render

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className={`${classes.navbar} navbar navbar-expand-md`}>
        <div className="container-fluid">
          <div className='col-1 text-center'>
            <a className={`${classes.logo} navbar-brand`} href="#">LOGO</a>
          </div>
          <div className='col-11 d-flex justify-content-end'>
            <form className={`${classes.searchForm} d-none d-md-flex`} role="search">
              <div className={classes.searchContainer}>
                <IoMdSearch className={classes.searchIcon} />
                <input className={classes['form-control']} type="search" placeholder="Search" aria-label="Search" />
              </div>
            </form>
            <button
              className={`${classes['navbar-toggler']} navbar-toggler d-md-none`}
              type="button"
              onClick={toggleSidebar}
              ref={toggleButtonRef}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className={classes['nav-item']}>
                  <MdOutlineEmail />
                </li>
                <li className={classes['nav-item']}>
                  <IoSettingsOutline />
                </li>
                <li className={classes['nav-item']}>
                  <FaRegBell />
                </li>
                <li className={classes['nav-item']}>
                  <FiUser />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div ref={sidebarRef} className={`${classes.sidebar} ${isSidebarOpen ? classes.active : ''}`}>
        <form className={`${classes.searchForm} d-flex d-md-none`} role="search">
          <div className={classes.searchContainer}>
            <IoMdSearch className={classes.searchIcon} />
            <input className={classes['form-control']} type="search" placeholder="Search" aria-label="Search" />
          </div>
        </form>
        <ul className={`list-unstyled ${classes.sidebarList}`}>
          <li className={classes['sidebar-links']}><a href="#" className={classes['nav-link']}><MdOutlineEmail /></a></li>
          <li className={classes['sidebar-links']}><a href="#" className={classes['nav-link']}><IoSettingsOutline /></a></li>
          <li className={classes['sidebar-links']}><a href="#" className={classes['nav-link']}><FaRegBell /></a></li>
          <li className={classes['sidebar-links']}><a href="#" className={classes['nav-link']}><FiUser /></a></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
