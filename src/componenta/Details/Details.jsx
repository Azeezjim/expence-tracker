import React from 'react'
import {Card, CardHeader, CardContent, Typography} from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';

// eslint-disable-next-line no-unused-vars
import useStyles from "../Details/styles"


const Details = ( { title } ) => {
  const classes = useStyles();

  return (
    <Card className={title === "incomr" ? classes.income : classes.expense}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">$50</Typography> 
        {/* <Doughnut data="" /> */}
      </CardContent>
    </Card>
  )
}

export default Details
