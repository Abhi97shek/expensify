import React from 'react';
import ReactDOM from 'react-dom';



const Info =(props)=>(
    <div>
        <h1>INFO</h1>
        <p>This is the Info: {props.info}</p>
    </div>
);


const withAdminWarnings =(WrapperWarning)=>{

    return(props)=>(
        <div>
            {props.isAuthenticated && <p>This is private message.Please Don't Share with anybody</p>}
            <WrapperWarning {...props}/>
        </div>
    )
};

const requireAuthentication=(WRAPPED)=>{
    return(props)=>(
        <div>
                {props.isAuthenticated ? (<WRAPPED {...props}/>) : (<p>Please Enter the Details to see the Data</p>)}
               
        </div>
    )
};
// const AdminInfo = withAdminWarnings(Info);

const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAuthenticated={true} info="This is the Inportant Details" />,document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="This is the Inportant Details" />,document.getElementById('app'));