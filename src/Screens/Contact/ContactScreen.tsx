import { height } from "@mui/system";
import Navigation from "../../Components/Navigation";

export default function ContactScreen() {
  return (
    <>
      <Navigation />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
          fontFamily: "Roboto, Helvetica, Arial, sans-serif ",
        }}
      >
        The best way to contact me is through my LinkedIn{" "}
        <a href={"https://www.example.com"} style={{ marginLeft: "4px" }}>
          {" "}
          Profile
        </a>
      </div>
    </>
  );
}
