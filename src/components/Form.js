import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();
  const container = document.getElementById("box");
  const nameRef = useRef();
  const placeRef = useRef();
  const reviewRef = useRef();
  const costRef = useRef();
  const reviewerRef = useRef();
  const ratingRef = useRef();
  function write(event) {
    event.preventDefault();
    console.log(nameRef.current.value);
    fetch(
      `https://apex.oracle.com/pls/apex/rupinika/food/post?name=${nameRef.current.value}&review=${reviewRef.current.value}&place=${placeRef.current.value}&cost=${costRef.current.value}&reviewer=${reviewerRef.current.value}&rating=${ratingRef.current.value}`,
      { method: "POST" }
    )
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          navigate("/Home");
        } else {
          alert("Please try again");
        }
      })
      .catch(() => {
        alert("Please try again");
      });
  }
  return (
    <container>
      <h1 className="text-center m-4">Write A Review!</h1>
      <form id="box" className="container " onSubmit={write}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            ref={nameRef}
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Kimchi"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput2" className="form-label">
            Place
          </label>
          <input
            ref={placeRef}
            type="text"
            className="form-control"
            id="exampleFormControlInput2"
            placeholder="Korea"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput2" className="form-label">
            Reviwer
          </label>
          <input
            ref={reviewerRef}
            type="text"
            className="form-control"
            id="exampleFormControlInput2"
            placeholder="Rupinika"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput2" className="form-label">
            Rating
          </label>
          <input
            ref={ratingRef}
            type="text"
            className="form-control"
            id="exampleFormControlInput2"
            placeholder="Put a rating out of 5"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput2" className="form-label">
            Cost
          </label>
          <input
            ref={costRef}
            type="text"
            className="form-control"
            id="exampleFormControlInput2"
            placeholder="Put cost of food using the United States Dollar"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Review
          </label>
          <textarea
            ref={reviewRef}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={3}
            defaultValue={""}
            required
          />
        </div>
        <button
          type="submit"
          className="p-2 w-100 my-2 bg-info border border-dark"
        >
          <i className="bi bi-send-fill" />
        </button>
      </form>
    </container>
  );
}

export default Form;
