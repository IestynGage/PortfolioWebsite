import Navigation from "../../Components/Navigation";

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
        <h1> Hello, this is my personal website :)</h1>
        <div style={{ padding: "24px", textAlign: "center" }}>
          <p>
            I'm a software engineer with over 1 years experience currently based
            in Oxford. I have a passion for front-end development currently
            using React, Typescript, HTML and CSS. In the past I've used
            Swift(UIKit and SwiftUI) and JavaFX to develop UI applications.
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
        </div>
      </div>
    </>
  );
}
