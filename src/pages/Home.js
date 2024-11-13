import React from 'react';
import Big_man from '../img/Big_man_.webp'

const Home = () => {
    return (
        <div className='main'>
           <div className="mainContent">
            <img src={Big_man}/>
                <div className="colored-side">
      <h1>THE BRAND</h1>
      <h2>OF LUXERIOUS <span className='fashion'>FASHION</span></h2>
    </div>
        </div>
        </div>
    );
};

export default Home;