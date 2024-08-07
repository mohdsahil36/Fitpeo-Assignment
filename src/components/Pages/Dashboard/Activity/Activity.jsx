import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import classes from './Activity.module.css';
import data from '../../../../assets/data/expenditure.json';

export default function Activity() {
    const [timePeriod, setTimePeriod] = useState('daily');
    const chartRef = useRef(null);

    useEffect(() => {
        const chartData = {
            labels: timePeriod === 'daily'
                ? Object.keys(data.daily_expenditures).map((key) => key.replace('day_', 'Day '))
                : Object.keys(data.weekly_expenditures).map((key) => key.replace('week_', 'Week ')),
            datasets: [
                {
                    label: timePeriod === 'daily' ? 'Daily Expenditures' : 'Weekly Expenditures',
                    data: timePeriod === 'daily'
                        ? Object.values(data.daily_expenditures)
                        : Object.values(data.weekly_expenditures),
                    backgroundColor: 'rgba(112,150,255)',
                    borderWidth: 1,
                    borderRadius:10,
                },
            ],
        };

        const ctx = document.getElementById('expendituresChart').getContext('2d');
        if (chartRef.current) {
            chartRef.current.destroy();
        }
        chartRef.current = new Chart(ctx, {
            type: 'bar',
            data: chartData,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: true,
                    },
                    tooltip: {
                        enabled: true,
                    },
                },
                scales: {
                    x: {
                        grid: {
                            display: false,
                        },
                        ticks: {
                            color: 'rgb(76, 78, 82)',
                        },
                    },
                    y: {
                        grid: {
                            color: 'rgb(76, 78, 82)',
                        },
                        ticks: {
                            color: 'rgb(76, 78, 82)',
                        },
                    },
                },
            },
        });

        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, [timePeriod]);

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <p className={classes.activityTitle}>Activity</p>
                <div className={classes.selectContainer}>
                    <select
                        id="timePeriodSelect"
                        value={timePeriod}
                        onChange={(e) => setTimePeriod(e.target.value)}
                    >
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                    </select>
                </div>
            </div>
            <div className={classes.chartContainer}>
                <canvas id="expendituresChart"></canvas>
            </div>
        </div>
    );
}
