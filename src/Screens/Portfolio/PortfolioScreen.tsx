import PortfolioAPI from "../../API/PortfolioAPI";
import Navigation from "../../Components/Navigation";
import "./PortfolioCard.css";
import "../../Components/ThemeColor.css";
import PortfolioCard from "./PortfolioCard";

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
