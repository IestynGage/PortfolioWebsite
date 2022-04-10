export interface Repository {
  /** Title of the repository. This will always be unique. */
  title: string;

  /** Link to the repository. This will always be unique. */
  href: string;

  /** description of what the repository does */
  description?: string;

  /** tags relating to the project */
  tags?: string[];
}

const repositories: Repository[] = [
  {
    title: "Personal website",
    href: "https://github.com/IestynGage/PortfolioWebsite",
    description: "A website about me (Iestyn)",
    tags: ["React", "Typescript"],
  },
  {
    title: "Label Transaction",
    href: "https://github.com/IestynGage/LabelTransaction",
    description:
      "A python script thats labels my finacial transactions that are in a CSV format",
    tags: ["Python"],
  },
  {
    title: "EA UI Card Problem",
    href: "https://github.com/IestynGage/EA_UI_CardProblem",
    description: "Evolutionary algorithm for the card problem",
    tags: ["Java", "JavaFX", "AI"],
  },
  {
    title: "Premium Bonds Simulator",
    href: "https://github.com/IestynGage/NSI_PremiumBondsSimulator",
    description: "Simulated the possible outcomes of premium bonds for a group of accounts",
    tags: ["Java"]
  },
  {
    title: "Fibonacci Sequence",
    href: "https://github.com/IestynGage/Fibonacci_Sequence",
    description:
      "Two different algorithms that generate a fibonnaci sequence. One algorithm used a recusrive approach to solve the problem while another used dynamic programming approach. The dynamic programming approach was much faster.",
    tags: ["Java"],
  },
  {
    title: "what is the date",
    href: "https://github.com/IestynGage/what-is-the-date",
    description:
      "A react card component that quizes the user on what months precieved after each one",
    tags: ["React"],
  },
  {
    title: "SchoolGradesDB",
    href: "https://github.com/IestynGage/SchoolGradesDB",
    description: "A simple command line tool to interactive with school database ",
    tags: ["python", "MongoDB"],
  },
];

export default class PortfolioAPI {
  get getRepositories(): Repository[] {
    return repositories;
  }
}
