interface ButtonLinkProps {
  href: string;
  label: string,
}

function ButtonLink({label, href}:ButtonLinkProps) {

    return (
    <button style={{backgroundColor:'#67B7D1', borderColor: '#67B7D1', margin:'0 10px 0 0px', borderRadius: '5px'}}> 
      <a href={href} style={{color:'black', textDecoration: 'none', fontWeight: 510, fontSize:'14px', fontFamily: 'Arial, Helvetica, sans-serif'}}>{label}</a> 
    </button>
  );
}

export default ButtonLink;
