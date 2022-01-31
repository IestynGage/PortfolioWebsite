import { AppBar } from '@mui/material';
import ButtonLink from './ButtonLink';

function BusinessCard() {
    const name = 'Iestyn Gage';
    const currentRole = 'Junior Software Engineer';
    const currentCompany = 'CoreFiling';

    return (

      <AppBar position="static">
          <span style={{display:'flex', flexDirection:'row'}}>
        <h1 style={{color:'black', fontSize:'25px', margin:"0px", fontFamily: 'Arial, Helvetica, sans-serif'}}> {name} </h1>
        <h2 style={{color:'#969a9f', fontSize:'14px', fontFamily: 'Arial, Helvetica, sans-serif'}}> {currentRole} at {currentCompany}</h2>
            <ButtonLink href={''} label={'About me'} />
            <ButtonLink newTab href={'https://github.com/IestynGage'} label={'GitHub'} />  
            <ButtonLink newTab href={'https://www.linkedin.com/in/iestyngage/'} label={'linkedIn'} />
            <ButtonLink newTab href={'mailto:iestyngage@gmail.com'} label={'Email'} />
            <ButtonLink href={'cv.pdf'} label={'Download CV'} download={true} />
          </span>
      </AppBar>

  );
}

export default BusinessCard;
