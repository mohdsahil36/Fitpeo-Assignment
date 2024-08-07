import React from 'react';
import { IoMdHome, IoMdLogOut } from "react-icons/io";
import { FaWallet } from "react-icons/fa6";
import { IoBagCheckOutline } from "react-icons/io5";
import { BiBarChartSquare } from "react-icons/bi";
import { CgNotes } from "react-icons/cg";
import classes from './Sidebar.module.css';

export default function Sidebar() {
    return (
        <div className={classes.sidebar}>
            <div className={`col-sm-9 ${classes.navigation}`}>
                <ul className={classes['sidebar-pages']}>
                    <li className={classes.icons}><IoMdHome /></li>
                    <li className={classes.icons}><BiBarChartSquare /></li>
                    <li className={classes.icons}><CgNotes /></li>
                    <li className={classes.icons}><FaWallet /></li>
                    <li className={classes.icons}><IoBagCheckOutline /></li>
                </ul>
            </div>
            <div className={`col-sm-3 ${classes.logout}`}>
                <IoMdLogOut />
            </div>
        </div>
    );
}
