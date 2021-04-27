import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { removeExpense } from "../actions/expenses";
const ExpenseListItems =({dispatch,id,description,amount,createdAt})=>{
    return (
       
        <div>
        <h2>Expense List Items</h2>
          
            
            <p>Id:{id}</p>
            <Link to={`/edit/${id}`}>
            <p>Description:{description}</p>
            </Link>
            <p>Amount:{amount}</p>
            <p>Created At: {createdAt}</p>
           
            <button onClick={(e)=>{
                    dispatch(removeExpense({id}));
            }}>Remove</button>

        </div>   
    )
};


const mapStateToProps =(state)=>{
    return {
        name:"Abhishek"
    }
};

export default connect(mapStateToProps)(ExpenseListItems);