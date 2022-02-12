import React from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, value) {
  return { name, value };
}

export default class WordContainer extends React.Component {
  constructor(props) {
          super(props)
          this.state = {
              data: [''],
          }
  }
  componentDidMount() {
    this.setState({ data: this.props.data })
  }

  render() {
      const { data } = this.state
      let data0 = data
      const rows = [
          createData('unicode', data0[0]),
          createData('mc', data0[1]),
          createData('pu', data0[2]),
          createData('ct', data0[3]),
          createData('sh', data0[4]),
          createData('mn', data0[5]),
          createData('kr', data0[6]),
          createData('vn', data0[7]),
          createData('jp-go', data0[8]),
          createData('jp-kan', data0[9]),
          createData('jp-tou', data0[10]),
          createData('jp-kwan', data0[11]),
          createData('jp-othern', data0[12]),
];
      return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Type</TableCell>
            <TableCell align="right">Pronunciation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      )
  }
}