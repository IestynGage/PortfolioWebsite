import React from 'react';

function BusinessCard() {
    const name = 'Iestyn Gage';
    const currentRole = 'Junior Software Engineer';
    const currentCompany = 'CoreFiling';
  
    const email = 'iestyngage@gmail.com';
    const number = '07533 122422';

    return (
    <div style={{position:'absolute', left:'50%', top:'50%', transform:'translate(-50%, -50%)', padding:'15px', borderStyle: 'solid', borderRadius:'10px'}}>
        <span style={{display:'flex', flexDirection:'row'}}>
          <span style={{height:'50px', width:'50px', borderRadius:'50%',  backgroundColor: '#bbb', padding:'10px'}} />
          <h1 style={{padding:'0 10px'}}> {name} </h1>
        </span>
        <h2> {currentRole} at {currentCompany}</h2>
        <span style={{display:'flex', flexDirection:'row'}}>
          <button> Email </button> 
          <button> LinkIn </button> 
          <button> Github </button>
          <button> Phone</button>
        </span>
    </div>
  );
}

export default BusinessCard;
