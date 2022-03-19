import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ButtonLink from "./ButtonLink";

export default function Navigation() {
  const navigate = useNavigate();
  const largeWidth = useMediaQuery("(min-width: 580px)");
  return (
    <span
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#1566b7",
        padding: "6px",
        borderRadius: "4px",
        position: "sticky",
        top: "8px",
      }}
    >
      <ButtonLink
        label={largeWidth ? "Iestyn Gage" : "Iestyn"}
        onClick={() => {
          navigate("/iestyn");
        }}
        style={{ margin: "0 10px 0 0px" }}
      />
      <ButtonLink
        label={"Portfolio"}
        onClick={() => {
          navigate("/portfolio");
        }}
        style={{ margin: "0 10px 0 0px" }}
      />
      <ButtonLink
        label={largeWidth ? "Contact Me" : "Contact"}
        onClick={() => {
          navigate("/contact");
        }}
        style={{ margin: "0 10px 0 0px" }}
      />
      <ButtonLink
        href={"cv.pdf"}
        label={largeWidth ? "Download CV" : "CV"}
        style={{
          marginLeft: "auto",
          justifySelf: "right",
          backgroundColor: "white",
          color: "#1976d2",
          opacity: 1,
        }}
      />
    </span>
  );
}
