import React, { useContext } from 'react'
import {List as MUIList, ListItem, ListItemText, ListItemAvatar, Avatar, ListItemSecondaryAction, IconButton, Slide} from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';
import { mergeClasses } from '@material-ui/styles';

import { ExpenseTrackerContext } from '../../../context/context';
import useStyle from './styles';

const List = () => {
  const classes = useStyle();
  const { deleteTransaction, transactions} = useContext(ExpenseTrackerContext);

  // const transactions = [
  //   {
  //     id: 1,
  //     type: "Income",
  //     category : "Business",
  //     amount: 50,
  //     date: "Mon May 09 2022" 
  //   },
  //   {
  //     id: 2,
  //     type: "Expense",
  //     category : "Business",
  //     amount: 50,
  //     date: "May 09 2022" 
  //   },
  //   {
  //     id: 3,
  //     type: "Income",
  //     category : "Business",
  //     amount: 50,
  //     date: "Mon May 09 2022" 
  //   }
  // ];
  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map((transaction) => (
        <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}> 
          <ListItem>
            <ListItemAvatar>
              <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense} >
                <MoneyOff /> 
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => deleteTransaction(transaction.id)}>
                <Delete />
              </IconButton>   
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList> 
  )
} 

export default List 



