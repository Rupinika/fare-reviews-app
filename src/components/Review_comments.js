import React from "react";

function Review_comments() {
  const [comment, setComment] = useState("");
  function handleChange(event) {
    setComment(event.target.value);
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Comment Section</h1>
          </div>
        </div>
        <div className="col">
          <div className="input-group">
            <span className="input-group-text">With textarea</span>
            <textarea
              className="form-control"
              aria-label="With textarea"
              value={comment}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Review_comments;
