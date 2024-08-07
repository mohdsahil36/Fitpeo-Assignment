import React, { useEffect, useState } from 'react';
import data from '../../../../assets/data/recent-orders.json'; // Adjust the path as needed
import classes from './Recent-Orders.module.css';

const TableComponent = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(data);
  }, []);

  // Function to determine the class based on status
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return classes.delivered;
      case 'pending':
        return classes.pending;
      case 'cancelled':
        return classes.cancelled;
      default:
        return '';
    }
  };

  return (
    <div className={classes.tableContainer}>
      <p className={classes['recent-orders-title']}>Recent Orders</p>
      <table className={classes.table}>
        <thead>
          <tr>
            <th className='text-start'>Customer</th>
            <th>Order Number</th>
            <th>Amount</th>
            <th>Delivered</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index} className={classes.dataRow}>
              <td className='text-start'>{row.name}</td>
              <td>{row.orderNumber}</td>
              <td>${row.amount}</td>
              <td><span className={getStatusClass(row.status)}>{row.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
