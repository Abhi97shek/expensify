import React from 'react';
import ExpenseForm from './ExpenseForm';
import  {connect} from 'react-redux';
import { addExpense } from '../actions/expenses';
const ExpenseCreate =(props)=>{

    return(
        <div>
            <p>Add Expense</p>
            <ExpenseForm onSubmit={(expense)=>{
                props.dispatch(addExpense(expense));
                props.history.push('/');
            }}/>
        </div>

    )
};

export default connect()(ExpenseCreate);