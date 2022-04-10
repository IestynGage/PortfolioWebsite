import { Chip } from "@mui/material";
import { useState } from "react";
import PortfolioAPI, { Repository } from "../../API/PortfolioAPI";
import Navigation from "../../Components/Navigation";
import "./PortfolioCard.css";

export default function PortfolioScreen() {
  const portfolioAPI = new PortfolioAPI();
  const repositoties = portfolioAPI.getRepositories;

  return (
    <>
      <Navigation />
      <div
        style={{
          width: "90vw",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1 style={{ margin: "20px 0 20px 0" }}> Repositories </h1>
        <p style={{ margin: "0" }}>
          {" "}
          Check out some of my code reposities below!
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "80vw",
          margin: "0 auto",
          alignItems: "center",
        }}
      >
        {repositoties.map((repository) => {
          console.log(repository);
          return (
            <PortfolioCard repository={repository} key={repository.title} />
          );
        })}
        <p style={{ marginTop: "20px" }}>
          And even more projects will be added soon!
        </p>
      </div>
    </>
  );
}

interface PortfolioCardProps {
  repository: Repository;
}
function PortfolioCard(props: PortfolioCardProps) {
  const { repository } = props;

  return (
    <div
      style={{
        marginTop: " 8px",
        width: "40vw",
        minWidth: "400px",
        padding: "15px",
        boxSizing: "border-box",
        borderStyle: "solid",
        borderWidth: "1px",
        borderRadius: "8px",
        borderColor: "rgb(189, 189, 189)",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
    >
      <h2
        onClick={() => (window.location.href = repository.href)}
        style={{
          margin: "0",
          width: "auto",
          display: "inline-block",
          cursor: "pointer",
        }}
      >
        {repository.title}
      </h2>
      <p
        style={{
          wordWrap: "break-word",
          overflowWrap: "break-word",
          hyphens: "auto",
        }}
      >
        {" "}
        {repository.description}{" "}
      </p>
      {repository.tags?.map((tag) => (
        <Chip
          label={tag}
          variant="outlined"
          size="small"
          style={{ marginRight: "4px" }}
        />
      ))}
    </div>
  );
}
