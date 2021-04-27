import React from 'react';
import ReactDOM, { render } from 'react-dom';
import AppRouter from './routes/AppRouters';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';

import {Provider} from 'react-redux';
import getVisibleExpenses from './selector/expenses';
import configureStore from './store/configureStore';
// import 'normalize-css/normalize.css'
import './style/style.scss';


const store = configureStore();


store.dispatch(addExpense({description:"Water Bills",amount:4000}));
store.dispatch(addExpense({description:"Gas Bills",amount:100}));
store.dispatch(addExpense({description:"Gas Bills",amount:300}));
store.dispatch(setTextFilter("Gas"));


const state = store.getState();
const visibleExpense =getVisibleExpenses(state.expenses,state.filters);


const jsx=(
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
ReactDOM.render(jsx,document.getElementById("app"));