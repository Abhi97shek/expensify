import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense} from '../actions/expenses';
const ExpenseEdit=(props)=>{

       
    return (
        <div>
        {console.log(props)}
            <p>This is the ExpenseEdit Page with ID {props.match.params.id}</p>
            <ExpenseForm onSubmit={(expense)=>{
                props.dispatch(editExpense(props.expense.id,expense));
                props.history.push('/');
            }}/>
        </div>
    )


};

const mapStateToProps =(state,props)=>{

    return {
        expense: state.expenses.find((expense)=>{
            return expense.id === props.match.params.id;
        })
    }
}

export default connect(mapStateToProps)(ExpenseEdit);