import React from "react";
import { Helmet } from "react-helmet";
import errorImage from "../../../asset/images/404.svg";

const NotFound = () => {
  return (
    <div className="notFound">
      <Helmet>
        <title>Not Found</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <div className="notFound__container">
        <h1 className="notFound__container-h1">Oops! Page Not Found</h1>
        <img src={errorImage} alt="errorImage" />
      </div>
    </div>
  );
};

export default NotFound;
