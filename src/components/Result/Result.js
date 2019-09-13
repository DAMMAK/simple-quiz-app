import React from 'react';
import Confetti from 'react-confetti'

const result=()=>{
const { innerWidth, innerHeight } = window;
    return(
        <div className="">
            <Confetti
      width={innerWidth}
      height={innerHeight}
    />
        </div>
    );
}

export default result;