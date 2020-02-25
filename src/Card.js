import React from "react";

const Card = (props) => {

  
  return (
    <div className="col s12 m3">
      <div className="card">
        <div className="card-image">
          <img src="https://materializecss.com/images/sample-1.jpg" />
          <div className="img-opacity-overlay"></div>
          <span className="card-title" style={{ zIndex: "500" }}>
            {props.title}
          </span>
          <a
            className="btn-floating halfway-fab waves-effect waves-light red"
            style={{ zIndex: "500" }}
          >
            <i className="material-icons">add</i>
          </a>
        </div>
        <div className="card-content">
          <p>
            {props.body}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
