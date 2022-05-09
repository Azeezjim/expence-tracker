import React from 'react'
import {List as MUIList, ListItem, ListItemText, ListItemAvatar, Avatar, ListItemSecondaryAction, IconButton, Slide} from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';
// import { mergeClasses } from '@material-ui/styles';
 
import useStyle from './styles';

const List = () => {
  const classes = useStyle();
  const transactions = [
    {
      id: 1,
      type: "Income",
      catigory : "Business",
      amount: 50,
      date: new Date()
    }
  ];
  return (
    <MUIList dense={false} className={classes.List}>
      {transactions.map(transaction => (
        <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense} >
                <MoneyOff /> 
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={transaction.catigory} secondary={`$${transaction.amount} - ${transaction.date}`} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick=" "></IconButton> 
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList> 
  )
} 

export default List