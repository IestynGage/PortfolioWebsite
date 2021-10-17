import { Avatar, Paper } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import ButtonLink from './ButtonLink';

function BusinessCard() {
    const name = 'Iestyn Gage';
    const currentRole = 'Junior Software Engineer';
    const currentCompany = 'CoreFiling';
  
    const email = 'iestyngage@gmail.com';
    const number = '07533 122422';

    return (
        <div style={{position: 'absolute', top: "50%",left:'50%', msTransform:"translate(-50%, -50%)",  transform: "translate(-50%, -50%)", display: 'flex', flexDirection:'column', alignItems:'center', justifyContent: 'center'}}> 
          <Avatar sx={{ bgcolor: deepOrange[500], width: 102, height: 102 }} style={{ margin:'15px'}} >I</Avatar>
          <Paper variant="outlined"  elevation={3} style={{ padding:'15px'}}>
              <div style={{display: 'flex', flexDirection:'column', alignItems:'center' }}> 
                <h1 style={{color:'black', fontSize:'25px', margin:"0px", fontFamily: 'Arial, Helvetica, sans-serif'}}> {name} </h1>
                <h2 style={{color:'#969a9f', fontSize:'14px', fontFamily: 'Arial, Helvetica, sans-serif'}}> {currentRole} at {currentCompany}</h2>
              </div>
              <span style={{display:'flex', flexDirection:'row'}}>
                <ButtonLink href={''} label={'About me'} />
                <ButtonLink href={'https://github.com/IestynGage'} label={'GitHub'} />  
                <ButtonLink href={'https://www.linkedin.com/in/iestyngage/'} label={'linkedIn'} />
                <ButtonLink href={'mailto:iestyngage@gmail.com'} label={'Email'} />
              </span>
          </Paper>
      </div>
  );
}

export default BusinessCard;
