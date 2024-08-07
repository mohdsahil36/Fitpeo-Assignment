import React from 'react';
import { AiOutlineAim } from "react-icons/ai";
import { BiDish, BiFoodMenu } from "react-icons/bi";
import { RxCaretRight } from "react-icons/rx";
import classes from './Options.module.css';

export default function Options() {
    return (
        <div className={classes['container']}>
            <p className={classes.optionsTitle}>Options</p>
            <div className='container-fluid p-0'>
                <div className={`row ${classes['option-row']}`}>
                    <div className='col-10 d-flex'>
                        <div className={classes['goals-icon-circle']}>
                            <AiOutlineAim className={classes.goalsIcon}/>
                        </div>
                        <div className={classes['option-text']}>
                            <p className={classes['orders-desc']}>Goals</p>
                        </div>
                    </div>
                    <div className='col-2 d-flex justify-content-end'>
                        <div className={classes['caret-icon']}>
                            <RxCaretRight />
                        </div>
                    </div>
                </div>
                <div className={`row ${classes['option-row']}`}>
                    <div className='col-10 d-flex'>
                        <div className={classes['dishes-icon-circle']}>
                            <BiDish className={classes.dishesIcon}/>
                        </div>
                        <div className={classes['option-text']}>
                            <p className={classes['orders-desc']}>Popular Dishes</p>
                        </div>
                    </div>
                    <div className='col-2 d-flex justify-content-end'>
                        <div className={classes['caret-icon']}>
                            <RxCaretRight />
                        </div>
                    </div>
                </div>
                <div className={`row ${classes['option-row']}`}>
                    <div className='col-10 d-flex'>
                        <div className={classes['menu-icon-circle']}>
                            <BiFoodMenu  className={classes.menuIcon}/>
                        </div>
                        <div className={classes['option-text']}>
                            <p className={classes['orders-desc']}>Menus</p>
                        </div>
                    </div>
                    <div className='col-2 d-flex justify-content-end'>
                        <div className={classes['caret-icon']}>
                            <RxCaretRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
