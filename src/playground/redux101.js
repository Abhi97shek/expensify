import {createStore} from 'redux';

const incrementCount=({incrementBy})=>{
    return{
        type:"INCREMENT",
        incrementBy: typeof(incrementBy) === 'number' ? incrementBy : 1
    }

};

const decrementCount =({decrementBy})=>{
    return{

        type:"DECREMENT",
        decrementBy:typeof(decrementBy) === 'number' ? decrementBy : 1
    }
};

const reset =()=>{
    return {
        type:'RESET',
        resetBy: 0
    }

};
const store =createStore((state={count:0},action)=>{

   
  
    switch(action.type)
    {
        case 'INCREMENT':
            return {
                count:state.count + action.incrementBy
            };
        case 'DECREMENT':
            
            return {
                count : state.count - action.decrementBy
            };  
        case 'RESET':
            return {
                count :action.resetBy
            };
        default:
        {
            return state
        };    
    }
});


store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 10}));

store.dispatch(decrementCount({decrementBy:5}));

store.dispatch(reset());



