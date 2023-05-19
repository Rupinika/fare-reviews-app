import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Review() {
  const [review, setreview] = useState(
    JSON.parse(localStorage.getItem("review"))
  );

  const getRatingStars = (x) => {
    let currentRating = [];
    for (let i = 0; i < x; i++) {
      currentRating.push(1);
    }
    return (
      <span>
        {currentRating.map((star) => {
          return (
            <span>
              <i className="bi bi-star-fill" />
            </span>
          );
        })}
      </span>
    );
  };

  const getReviewById = async () => {
    console.log(review.id);
    let data = await fetch(
      `https://apex.oracle.com/pls/apex/rupinika/food/get_review_by_id?id=${review.id}`
    );
    let convertedData = await data.json();
    console.log(convertedData);
    setreview(convertedData.items[0]);
  };

  return (
    <>
      <div className="container text-center bg-success rounded-4 mt-5 p-3 w-50 text-light">
        <div className="row">
          <div className="col">
            <h1> {review.name}</h1>
            <h2> {review.place}</h2>
            <p> {review.cost}</p>
            <p>{review.rating}/5</p>
            <p>{getRatingStars(review.rating)}</p>
            <p>{review.review}</p>
            <p>By: {review.reviewer}</p>
            <Link type="button" to="/Home">
              <h1>
                <i class="bi bi-box-arrow-in-left"></i>
              </h1>
            </Link>
            <button
              className="bg-success border border-0"
              onClick={async () => {
                await fetch(
                  `https://apex.oracle.com/pls/apex/rupinika/food/like?id=${review.id}`,
                  { method: "POST" }
                );
                getReviewById();
              }}
            >
              <h2>
                <i className="bi bi-hand-thumbs-up-fill" />
                {review.likes}
              </h2>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;
