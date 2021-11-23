import React, { FC } from 'react';
import ContentLoader from 'react-content-loader';


const CardLoader: FC = ({ ...rest }) => {
  return (
    <div className="container">
      <div className="row">
        {[...Array(6)].map((item, index) => (
          <div className="col-lg-4" key={index}>
            <ContentLoader viewBox="0 0 265 230" {...rest}>
              <rect x="15" y="15" rx="4" ry="4" width="350" height="25" />
              <rect x="15" y="50" rx="2" ry="2" width="350" height="100" />
              <rect x="15" y="230" rx="2" ry="2" width="170" height="20" />
              <rect x="60" y="230" rx="2" ry="2" width="170" height="20" />
            </ContentLoader>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardLoader;