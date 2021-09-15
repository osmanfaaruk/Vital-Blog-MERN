import React from "react";
import { Col, Row } from "react-bootstrap";
import ContentLoader from "react-content-loader";
import Skeleton from "react-loading-skeleton";

const DashboardSkeleton = (props) => {
  return (
    <>
        {Array(7)
          .fill("")
          ?.map((product, index) => (
              <Skeleton style={{ borderRadius: "5px" }} height={100}  weight={1000} className="mb-2" {...props.length} />
          ))}
    </>
  );
};

export default DashboardSkeleton;
