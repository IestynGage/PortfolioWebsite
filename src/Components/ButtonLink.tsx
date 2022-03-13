import { Button } from "@mui/material";
import { CSSProperties } from "react";

interface ButtonLinkProps {
  href?: string;
  onClick?: () => void;
  label: string;
  fontColor?: string;
  style?: CSSProperties;
}

function ButtonLink({
  label,
  href,
  fontColor,
  onClick,
  style,
}: ButtonLinkProps) {
  return (
    <Button
      variant="contained"
      href={href}
      style={{ ...style }}
      onClick={onClick}
    >
      <a
        style={{
          color: fontColor ?? "white",
          textDecoration: "none",
          fontWeight: 510,
        }}
      >
        {label}
      </a>
    </Button>
  );
}

export default ButtonLink;
