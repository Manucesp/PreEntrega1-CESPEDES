import React from "react";


const ButtonComponent = () => {
    //useState        
    const [count, setCount] = React.useState(0);   

    const handleCount = () => {
        setCount(count + 1)
    };
    const handleClean = () => {
        setCount(0)
    };
    const handleRemove = () =>{
        setCount(count -1)
    }

    
    return(
        <div> 
            <div>Cuenta:{count} </div>
        <button onClick={handleCount}>+1</button>
        <button onClick={handleClean}>Clean</button>
        <button onClick={handleRemove}>-1</button>

        </div>
    );
};

export default ButtonComponent;