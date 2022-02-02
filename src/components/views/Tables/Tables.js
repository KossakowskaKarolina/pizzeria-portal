import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Tables.module.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const Tables = () => {
  const demoContent = [
    {
      hour: '12:00-12:30',
      tables: [
        {table: 1, type: 'event', id: '1234'},
        {table: 2, type: null, id: null},
        {table: 3, type: null, id: null},
        {table: 4, type: 'event', id: '1515'},
        {table: 5, type: 'booking', id: '9898'},
      ],
    },
    {
      hour: '12:30-13:00',
      tables: [
        {table: 1, type: 'event', id: '1234'},
        {table: 2, type: null, id: null},
        {table: 3, type: 'booking', id: '3456'},
        {table: 4, type: 'event', id: '1515'},
        {table: 5, type: 'booking', id: '9898'},
      ],
    },
    {
      hour: '13:00-13:30',
      tables: [
        {table: 1, type: null, id: null},
        {table: 2, type: null, id: null},
        {table: 3, type: 'booking', id: '3456'},
        {table: 4, type: 'event', id: '1515'},
        {table: 5, type: null, id: null},
      ],
    },
    {
      hour: '13:30-14:00',
      tables: [
        {table: 1, type: 'booking', id: '7891'},
        {table: 2, type: 'event', id: '6543'},
        {table: 3, type: null, id: null},
        {table: 4, type: null, id: null},
        {table: 5, type: 'event', id: '6543'},
      ],
    },
  ];

  const renderActions = (type, table) => {
    switch(type) {
      case 'event':
        return (
          <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/events/${table.id}`}>Event no. {table.id}</Button>
        );
      case 'booking':
        return (
          <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/${table.id}`}>Booking no. {table.id}</Button>
        );
      default:
        return null;
    }
  };

  return(
    <Paper className={styles.component}>
      <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/new`}>New booking</Button>
      <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/events/new`}>New Event</Button>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Table 1</TableCell>
            <TableCell>Table 2</TableCell>
            <TableCell>Table 3</TableCell>
            <TableCell>Table 4</TableCell>
            <TableCell>Table 5</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.map(row => (
            <TableRow key = {row.hour}>
              <TableCell component="th" scope="row">
                {row.hour}
              </TableCell>
              {row.tables.map(table => (
                <TableCell key= {table}>
                  {renderActions(table.type, table)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};


export default Tables;
