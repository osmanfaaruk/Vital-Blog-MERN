import React from "react";
import { Helmet } from "react-helmet";
import underConstruction from '../../../asset/images/underConstruction.svg';

const UnderConstruction = () => {
  return (
    <div className="notFound">
      <Helmet>
        <title>Not Found</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <div className="notFound__container">
        <h1 className="notFound__container-404Header" style={{textTransform: 'uppercase'}}>Sorry this page is now under construction</h1>
        <img src={underConstruction} alt="underConstruction" />
      </div>
    </div>
  );
};

export default UnderConstruction;
