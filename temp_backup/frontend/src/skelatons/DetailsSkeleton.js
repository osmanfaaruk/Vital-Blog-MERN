import React from "react";
import Skeleton from "react-loading-skeleton";

const DashboardSkeleton = (props) => {
  return (
    <>
        {Array(100)
          .fill("")
          ?.map((product, index) => (
              <Skeleton style={{ borderRadius: "5px" }} height={10}  weight={1000} className="mb-2" {...props.length} />
          ))}
    </>
  );
};

export default DashboardSkeleton;
