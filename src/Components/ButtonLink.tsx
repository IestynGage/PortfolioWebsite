import { Button } from "@mui/material";

interface ButtonLinkProps {
  href?: string;
  onClick?: () => void;
  label: string;
  newTab?: boolean;
  download?: boolean | undefined;
}

function ButtonLink({
  label,
  href,
  onClick,
  newTab = false,
  download,
}: ButtonLinkProps) {
  return (
    <Button variant="contained" style={{ margin: "0 10px 0 0px" }}>
      <a
        href={href}
        onClick={onClick}
        style={{ color: "white", textDecoration: "none", fontWeight: 510 }}
        target={newTab ? "_blank" : ""}
        download={download}
      >
        {label}
      </a>
    </Button>
  );
}

export default ButtonLink;
