import { useNavigate } from "react-router-dom";
import ButtonLink from "./ButtonLink";

export default function Navigation() {
  const navigate = useNavigate();

  return (
    <span
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#1566b7",
        padding: "6px",
        borderRadius: "4px",
      }}
    >
      <ButtonLink
        label={"Iestyn Gage"}
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
        label={"Contact Me"}
        onClick={() => {
          navigate("/contact");
        }}
        style={{ margin: "0 10px 0 0px" }}
      />
      <ButtonLink
        href={"cv.pdf"}
        label={"Download CV"}
        style={{
          marginLeft: "auto",
          justifySelf: "right",
          backgroundColor: "white",
        }}
        fontColor={"#1976d2"}
      />
    </span>
  );
}
