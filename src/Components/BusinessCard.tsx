import './BusinessCard.css';
import ButtonLink from './ButtonLink';

function BusinessCard() {
    const name = 'Iestyn Gage';
    const currentRole = 'Junior Software Engineer';
    const currentCompany = 'CoreFiling';
  
    const email = 'iestyngage@gmail.com';
    const number = '07533 122422';

    return (
    <div className='card' style={{position:'absolute', left:'50%', top:'50%', transform:'translate(-50%, -50%)', padding:'15px', borderStyle: 'solid', borderRadius:'10px'}}>
        <span style={{display:'flex', flexDirection:'row'}}>
          <span style={{height:'50px', width:'50px', borderRadius:'50%',  backgroundColor: '#bbb', padding:'10px'}} />
          <h1 style={{padding:'0 10px', color:'black', fontFamily: 'Arial, Helvetica, sans-serif'}}> {name} </h1>
        </span>
        <h2 style={{color:'black', fontSize:'14px', fontFamily: 'Arial, Helvetica, sans-serif'}}> {currentRole} at {currentCompany}</h2>
        <span style={{display:'flex', flexDirection:'row'}}>
          <ButtonLink href={'https://github.com/IestynGage'} label={'GitHub'} />  
          <ButtonLink href={'https://www.linkedin.com/in/iestyngage/'} label={'linkedIn'} />
          <ButtonLink href={'mailto:iestyngage@gmail.com'} label={'Email'} />
          <ButtonLink href={''} label={'Secret'} />
        </span>
    </div>
  );
}

export default BusinessCard;
