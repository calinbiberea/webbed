import React from "react";
import PortfolioData from "../../data/portfolio/PortfolioItems.json";
import PortfolioItem from "./PortfolioItem";

const Portfolio: React.FC = () => {
  const portfolioItemsComponents = PortfolioData.portfolioItems.map((portofolioItem) => {
    return (
      <PortfolioItem
        id={portofolioItem.id}
        image={portofolioItem.image}
        title={portofolioItem.title}
        description={portofolioItem.description}
        url={portofolioItem.url}
      />
    );
  });

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Here are some of my projects</h1>

          <div id="portfolioBody">{portfolioItemsComponents}</div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
