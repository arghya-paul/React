import React from 'react';
import {useState} from 'react';

const [count,setcount]=useState(0);

return(
    <div>
        <button onClick={()=>setCount(count+1)}>click me</button>
    </div>
    
    )

