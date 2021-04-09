import React from "react";

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  id,
  image,
  title,
  description,
  url,
}: PortfolioItemProps) => {
  return (
    <div id={id} className="portfolioItem">
      <div className="portfolioItemBody">
        <div className="portfolioImage">
          <img src={image} alt="Project" />
        </div>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="portfolioURL">
            <p>
              <a href={url} className="button">
                <i className="fa fa-link" />
                Link
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
