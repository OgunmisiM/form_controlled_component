import { useState } from "react";
import "./App.css";

function App() {
  const [score, setScore] = useState(10);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(score) <= 5 && comment.length <= 10) {
      alert(
        "Please kindly give a comment explaining why your experience was poor!!!"
      );
      return;
    }
    console.log("form submited");
    setComment("");
    setScore(10);
  };
  return (
    <div className="form_box">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h3>Feedback form</h3>
          <div className="field">
            <label htmlFor="score">Score:{score}</label>
            <input
              type="range"
              min="0"
              max="10"
              value={score}
              onChange={(e) => {
                setScore(e.target.value);
              }}
            />
            <div className="comment">
              <label>Comment:</label>
              <textarea
                value={comment}
                onChange={(e) => {
                  setComment(e.target.value);
                }}
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <button disabled={!comment} type="submit">
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
