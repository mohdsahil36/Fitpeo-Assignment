import React from 'react';
import TilesGrid from './Tiles/TilesGrid';
import Profit from './Profit-Revenue/Profit';
import RecentOrders from './Recent-Orders/Recent-Oders';
import CustomersFeedback from './Customer\'s-Feedback/CustomersFeedback';
import classes from './Dashboard.module.css';
import Activity from './Activity/Activity';
import Options from './Options/Options';

export default function Dashboard() {
    return (
        <div className={classes.dashboard}>
            <p className={classes['dashboard-title']}>Dashboard</p>
            <div className='container-fluid p-0'>
                <div className='row'>
                    <div className='col-12 col-md-8'>
                        <TilesGrid />
                    </div>
                    <div className='col-12 col-md-4'>
                        <Profit />
                    </div>
                </div>
            </div>
            
            <div className='container-fluid p-0'>
                <div className='row'>
                    <div className='col-12 col-md-8'>
                        <Activity/>
                    </div>
                    <div className='col-12 col-md-4'>
                        <Options/>
                    </div>
                </div>
            </div>

            <div className='container-fluid p-0'>
                <div className='row'>
                    <div className='col-12 col-md-8'>
                        <RecentOrders/>
                    </div>
                    <div className='col-12 col-md-4'>
                        <CustomersFeedback/>
                    </div>
                </div>
            </div>
        </div>
    );
}
