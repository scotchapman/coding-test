import React, { useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'; 

import orderFertilizers from './api/orderFertilizers';
import getFertilizers from './api/getFertilizers';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function FertilizerTable() {
  const classes = useStyles();
  const [rows, setState] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await getFertilizers()
      setState(response)
    }
    fetchMyAPI()
  },[])

  const handleOrderClick = (id) => {
    orderFertilizers(id);
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="fertilizer table">
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell align="right">N</TableCell>
            <TableCell align="right">P</TableCell>
            <TableCell align="right">K</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Order</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.nutrients.N}</TableCell>
              <TableCell align="right">{row.nutrients.P}</TableCell>
              <TableCell align="right">{row.nutrients.K}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">
                <Button variant="contained" onClick={() => handleOrderClick(row.id)}>Order</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

