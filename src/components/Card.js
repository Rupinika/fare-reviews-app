import React from "react";
import { useNavigate } from "react-router-dom";

function Card({ element }) {
  const navigate = useNavigate();
  function openReview() {
    console.log(element);
    localStorage.setItem("review", JSON.stringify(element));
    navigate("/Review");
  }
  return (
    <div className="col-lg-3 col-md-4 col-sm-6" key={element.name}>
      <div
        className="card border-success bg-secondary bg-opacity-25 mb-3 m-auto"
        style={{ maxWidth: "18rem", cursor: "pointer" }}
      >
        <div className="card-header bg-transparent border-success">
          {element.place}
        </div>
        <div className="card-body text-success py-3">
          <h5 className="card-title">{element.name}</h5>
          <button onClick={openReview} className="btn btn-outline-success w-50">
            More Info
          </button>
        </div>

        <div className="card-footer bg-transparent border-success">
          Rating: {element.rating}
        </div>
      </div>
    </div>
  );
}

export default Card;
