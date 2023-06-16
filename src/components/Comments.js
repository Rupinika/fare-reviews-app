import React from "react";
import { useState } from "react";

function Comments({review_id}) {
  
  const [comment, setComment] = useState("");
  const [comments , setComments] = useState([])


  function handleChange(event) {
    setComment(event.target.value);
  }

  async function getComments(){
    let data = await fetch(`https://apex.oracle.com/pls/apex/rupinika/post/get_comments?id=${review_id}`)
    let convertedData = await data.json()
    setComments(convertedData.items)
  }
  async function addComments(){
    await fetch(
      `https://apex.oracle.com/pls/apex/rupinika/post/add_comment?review_id=${review_id}&comment_text=${comment}`,{method:"POST"}
    )
    setComment("")
    getComments()
  }



  return (
    <>
      <div className="container  ">
        
        <div className="row">
          <div className="col">
            <h2>Comment Section</h2>
          </div>
        </div>
        
        <div className="row ">
          <div className="col">
            <div className="input-group">
              <span className="input-group-text border border-success bg-info ">Comment</span>
              <textarea
                className="form-control border border-success"
                aria-label="With textarea"
                value={comment}
                onChange={(event)=>{setComment(event.target.value)}}
              />
              <button onClick={addComments} className="border border-success bg-info p-3">
              <i className="bi bi-send-fill" />

              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button onClick={getComments} className=" btn btn-info my-3">Get Comments</button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {
              comments.map((element,index) => {
              return  <div className="bg-info rounded py-1 my-1 w-100 text-start px-2 text-dark ">{index}:{element.comment_text}</div>
              })
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Comments;
