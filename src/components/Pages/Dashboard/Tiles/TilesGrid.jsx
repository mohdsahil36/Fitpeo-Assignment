import React from 'react';
import { TbShoppingBagPlus,TbShoppingBagCheck,TbShoppingBagX } from "react-icons/tb";
import { BsCurrencyExchange } from "react-icons/bs";
import { FaCaretUp,FaCaretDown } from "react-icons/fa";
import classes from './TilesGrid.module.css';

export default function TilesGrid() {
    return (
        <div className={classes['grid-container']}>
            <div className={classes['grid-item']}>
                <div className={classes['grid-tile-icon-totalOrders']}>
                    <TbShoppingBagPlus className={classes.totalOrders}/>
                </div>
                <div className={classes['grid-info']}>
                    <p className={classes['tile-subject']}>Total Orders</p>
                    <div className={classes['grid-info-data']}>
                        <p className={classes.tileNumberValue}>75</p>
                        <p className={classes.increaseValue}><FaCaretUp/><span className={classes['grid-info-data-value']}>3%</span></p>
                    </div>
                </div>
            </div>
            <div className={classes['grid-item']}>
                <div className={classes['grid-tile-icon-totalDelivered']}>
                    <TbShoppingBagCheck className={classes.totalDelivered}/>
                </div>
                <div className={classes['grid-info']}>
                    <p className={classes['tile-subject']}>Total Delivered</p>
                    <div className={classes['grid-info-data']}>
                        <p className={classes.tileNumberValue}>70</p>
                        <p className={classes.decreaseValue}><FaCaretDown /><span className={classes['grid-info-data-value']}>3%</span></p>
                    </div>
                </div>
            </div>
            <div className={classes['grid-item']}>
                <div className={classes['grid-tile-icon-totalCancelled']}>
                    <TbShoppingBagX className={classes.totalCancelled}/>
                </div>
                <div className={classes['grid-info']}>
                    <p className={classes['tile-subject']}>Total Cancelled</p>
                    <div className={classes['grid-info-data']}>
                        <p className={classes.tileNumberValue}>05</p>
                        <p className={classes.increaseValue}><FaCaretUp /><span className={classes['grid-info-data-value']}>3%</span></p>
                    </div>
                </div>
            </div>
            <div className={classes['grid-item']}>
                <div className={classes['grid-tile-icon-totalRevenue']}>
                    <BsCurrencyExchange className={classes.totalRevenue}/>
                </div>
                <div className={classes['grid-info']}>
                    <p className={classes['tile-subject']}>Total Revenue</p>
                    <div className={classes['grid-info-data']}>
                        <p className={classes.tileNumberValue}>$12k</p>
                        <p className={classes.decreaseValue}><FaCaretDown /><span className={classes['grid-info-data-value']}>3%</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
