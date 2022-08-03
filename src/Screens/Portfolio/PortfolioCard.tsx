import { Chip } from "@mui/material";
import { Repository } from "../../API/PortfolioAPI";

interface PortfolioCardProps {
  repository: Repository;
}

export default function PortfolioCard(props: PortfolioCardProps) {
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
        {repository.description}
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
