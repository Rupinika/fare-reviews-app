import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";

function Home() {
  const [information, setinformation] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getReviews() {
    setLoading(true);
    let information = await fetch(
      "https://apex.oracle.com/pls/apex/rupinika/food/get"
    );
    let convertedInfo = await information.json();
    setinformation(convertedInfo.items);
    console.log(convertedInfo);
    setLoading(false);
  }
  useEffect(() => {
    getReviews();
  }, []);

  return (
    <>
      {loading === true ? (
        <div className="row">
          <div className="col text-center">
            {" "}
            <div className="spinner-border" role="status">
              <span className="visually-hidden fs-1">Loading...</span>
            </div>
            <h1>Loading...</h1>
          </div>{" "}
        </div>
      ) : (
        <div className="row">
          {information.map((element, index) => {
            return <Card element={element} />;
          })}
        </div>
      )}
    </>
  );
}

export default Home;
