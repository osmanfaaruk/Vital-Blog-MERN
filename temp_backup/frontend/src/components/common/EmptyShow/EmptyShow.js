import React from 'react';
import noDataImage  from '../../../asset/images/no-data.svg';

const EmptyShow = () => {
    return (
        <div className="notFound">
        <div className="notFound__container">
          <h2 className="notFound__container-emptyDataHeader">Haven't written anything yet!</h2>
          <img src={noDataImage} alt="noDataImage" />
        </div>
      </div>
    );
};

export default EmptyShow;