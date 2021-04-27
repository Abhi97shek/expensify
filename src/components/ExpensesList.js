import React from 'react';
import ExpenseListItems from './ExpenseListItems';
import {connect} from 'react-redux';
 const ExpenseList=(props)=>{
    return(
            <div>
                <h2>Expense List</h2>
                {props.expense.map((expense)=>{
                        return <ExpenseListItems key={expense.id} {...expense}/>
                })}
               
            </div>
    )
};

 
const mapStateToProps = (state)=>{
    return {
        expense:state.expenses,
        filter:state.filers
    };
};

export default  connect(mapStateToProps)(ExpenseList);
