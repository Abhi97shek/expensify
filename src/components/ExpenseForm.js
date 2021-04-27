import React from 'react';
import moment from 'moment';



const time =moment().format('MMM Do ,YYYY');
console.log(time);

class ExpenseForm extends React.Component{

constructor(props){
        super(props);
        this.state={
                description : props.expense? props.expense.description : '',
                note: props.expense ? props.expense.note: ' ',
                amount:'',
                error:''
            };
}
    
    onDescriptionChange=(e)=>{
        const description = e.target.value;
            this.setState(()=>({ description}));
          
    };
    onNoteChange =(e)=>{
            const note = e.target.value;
            this.setState(()=>({note}));

    };
    onAmountChange=(e)=>{
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/))
        this.setState(()=>({amount}));
    };
    onSubmit = (e)=>{
            e.preventDefault();
            if(!this.state.description || !this.state.amount)
            {
                    this.setState(()=>{
                            return{
                                    error:'Please Enter Description or Amount'
                            }
                    })

            }
            else
            {
                this.setState(()=>{
                        return{
                                error:''
                        }
                })
                    console.log("Your Data is successfully submitted");
            }

            this.props.onSubmit({
                    description:this.state.description,
                    amount: parseFloat(this.state.amount,10) * 100,
                    createdAt: 5,
                    note:this.state.note
            });
           
    };

        render(){
            return (
                    <div>

                            <form onSubmit={this.onSubmit}>
                            {this.state.error &&  <p>{this.state.error}</p>}
                                    <input type="text" placeholder="Description" value={this.state.description}
                                    onChange={this.onDescriptionChange}
                                    autoFocus></input><br></br>
                                    <input type="number" placeholder="Amount" value={this.state.amount}
                                    onChange={this.onAmountChange}
                                    ></input><br></br><br></br>
                                    <textarea placeholder="Add a note for your expense. (Optional)"
                                    onChange={this.onNoteChange}
                                    value={this.state.note}></textarea> <br></br>
                                    <button>Add Expense</button>
                                    
                            </form>
                    
                    </div>

            )

            
        }
}

export default ExpenseForm;