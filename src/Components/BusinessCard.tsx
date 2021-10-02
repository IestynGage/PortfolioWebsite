import React from 'react';

function BusinessCard() {
    const name = 'Iestyn Gage';
    const currentRole = 'Junior Software Engineer';
    const currentCompany = 'CoreFiling';
  
    const email = 'iestyngage@gmail.com';
    const number = '07533 122422';

    return (
    <div style={{position:'absolute', left:'50%', top:'50%', transform:'translate(-50%, -50%)', padding:'5px', borderStyle: 'solid', borderRadius:'10px'}}>
        <h1> {name} </h1>
        <h2> {currentRole} at {currentCompany}</h2>
    </div>
  );
}

export default BusinessCard;
