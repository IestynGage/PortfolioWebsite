import { useNavigate } from "react-router-dom";
import ButtonLink from "./ButtonLink";

export default function Navigation() {
  const name = "Iestyn Gage";
  const currentRole = "Junior Software Engineer";
  const currentCompany = "CoreFiling";
  const navigate = useNavigate();

  return (
    <span style={{ display: "flex", flexDirection: "row" }}>
      <ButtonLink
        label={"Iestyn Gage"}
        onClick={() => {
          navigate("/home");
        }}
      />
      <ButtonLink
        label={"Portfolio"}
        onClick={() => {
          navigate("/portfolio");
        }}
      />
      <ButtonLink
        label={"Contact Me"}
        onClick={() => {
          navigate("/contact");
        }}
      />
      <ButtonLink href={"cv.pdf"} label={"Download CV"} download={true} />
    </span>
  );
}
