import React from 'react';
import ReactDOM, { render } from 'react-dom';
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';
import Header from '../components/Header';
import ExpenseDashBoard from '../components/ExpenseDashBoard';
import ExpenseCreate from '../components/ExpenseCreate';
import ExpenseEdit from '../components/ExpenseEdit';
import ExpenseHelp from '../components/ExpenseHelp';
import NotFound from '../components/NotFound';




const AppRouter=()=>{

    return(
        <BrowserRouter>
        <div>
        <Header />
            <Switch>
                <Route path='/' exact={true} component={ExpenseDashBoard}></Route>
                <Route path='/create' exact={true} component={ExpenseCreate}></Route>
                <Route path="/edit/:id" exact={true} component={ExpenseEdit}></Route>
                <Route path="/help" exact={true} component={ExpenseHelp}></Route>
                <Route component={NotFound}></Route>
            </Switch>
        </div>
        </BrowserRouter>

    )

};

export default AppRouter;
