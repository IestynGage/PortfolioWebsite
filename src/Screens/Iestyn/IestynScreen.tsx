import { Button } from "@mui/material";
import Navigation from "../../Components/Navigation";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function IestynScreen() {
  return (
    <>
      <Navigation />
      <div
        style={{
          fontFamily: "Roboto, Helvetica, Arial, sans-serif ",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1 style={{ padding: "24px", textAlign: "center" }}>
          Hello, this is my personal website :)
        </h1>
        <div style={{ padding: "24px", textAlign: "center" }}>
          <p>
            I'm a software engineer with over 1 years experience currently based
            in Oxford. I have a passion for full stack developer currently using{" "}
            <em>React</em> , <em>Typescript</em> , <em>Java</em> and{" "}
            <em>HTML</em> .
          </p>
          <p>
            This website is currently a work in progess, some planned features
            can be seen on my{" "}
            <a
              href="https://github.com/users/IestynGage/projects/2"
              target="_blank"
              rel="noopener noreferrer"
            >
              github board
            </a>
            .
          </p>
          <Button href="https://www.linkedin.com/in/iestyngage/">
            <LinkedInIcon color="action" />
          </Button>
          <Button>
            <EmailIcon color="action" />
          </Button>
          <Button href="https://github.com/IestynGage">
            <GitHubIcon color="action" />
          </Button>
        </div>
      </div>
    </>
  );
}
