import React from "react";

const EventExamples = () => {
  // const handleFormInput = (e) => {
  //   console.log(e.target);
  //   console.log(e.target.name);
  //   console.log(e.target.value);
  // };
  // const handleButtonClick = () => {
  //   alert("handle button click ");
  // };

  // const handleFormSubmission = (e) => {
  //   e.preventDefault();
  //   console.log("form submitted");
  // };
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="product"
          style={{ margin: "1rem 0" }}
          onChange={(e) => console.log(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
      <div>
        <button onClick={() => console.log("click me")}>Click me</button>
      </div>
    </section>
  );
};

export default EventExamples;
