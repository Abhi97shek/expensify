import React from 'react';
import ExpenseList from './ExpensesList';
import ExpenseListFilter from './ExpenseListFiler';
const ExpenseDashBoard =()=>{
  
    return(
            <div>
                <p>This is Expense DashBoard.</p>
                    <ExpenseListFilter />
                <ExpenseList />
            </div>

    )

};


export default ExpenseDashBoard;