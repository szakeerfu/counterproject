 
import { useState } from 'react';
import  './Count.css';

export const Cout = () => {
    const [count , setcount] = useState(0);

    const increment =() => {
        setcount(count + 1)

    }
    const decrement =() => {
        if (count > 0) {
            setcount(count - 1)
        }
         

    }

  return (

    <> 

    
    <div className='main_sub'>

        <h1>COUNTER APP</h1>
        <h2>
            count :{count}
        </h2>
       <div className='btn' > 
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        </div>

    </div>
    </>
  )
}
