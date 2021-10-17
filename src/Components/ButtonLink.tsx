import { Button } from "@mui/material";

interface ButtonLinkProps {
  href: string;
  label: string,
}

function ButtonLink({label, href}:ButtonLinkProps) {

    return (
    <Button variant="contained" style={{margin:'0 10px 0 0px'}}> 
      <a href={href} style={{color:'white', textDecoration: 'none', fontWeight: 510}} target="_blank">{label}</a> 
    </Button>
  );
}

export default ButtonLink;
