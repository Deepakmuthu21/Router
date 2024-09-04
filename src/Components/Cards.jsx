import React from "react";

const Cards = ({ element, index }) => {
  return (

  <div className="container">
    <div className="row m-3">
    <div key={element.id} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
      
        <div className="card h-100" style={{ width: "100%" }}>
          <img src={element.Image} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">{element.title}</p>
          
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Cards;
