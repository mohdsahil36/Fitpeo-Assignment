import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { FaCaretUp } from "react-icons/fa";
import classes from './Profit.module.css';

export default function Profit() {
    const chartRef = useRef(null);

    useEffect(() => {
        const chartData = {
            labels: ['Completed', 'Remaining'],
            datasets: [
                {
                    data: [70, 30],
                    backgroundColor: ['rgb(115,150,250)', '#e0e0e0'],
                    borderColor: ['#4caf50', '#e0e0e0'],
                    borderWidth: 1,
                },
            ],
        };

        const ctx = document.getElementById('completionChart').getContext('2d');
        if (chartRef.current) {
            chartRef.current.destroy();
        }
        chartRef.current = new Chart(ctx, {
            type: 'pie',
            data: chartData,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        enabled: true,
                    },
                },
            },
        });

        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, []);
    return (
        <div className={classes['profit-tile']}>
            <p className={classes['net-profit-title']}>Net profit</p>
            <div className={classes['profit-data']}>
                <div className={classes['profit-value']}>
                    <h1 className={classes['profit-amount']}>$ 6759.25</h1>
                    <p className={classes['profit-visual']}><FaCaretUp /><span className={classes['grid-info-data-value']}>3%</span></p>
                </div>
                <div className={classes['profit-graph']}>
                    <div className={classes.chartContainer}>
                        <canvas id="completionChart"></canvas>
                    </div>
                    <p className={classes.roundedOff}>*The values here have been rounded off</p>
                </div>
            </div>
        </div>
    );
}
