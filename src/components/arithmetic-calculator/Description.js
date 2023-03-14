import React from "react";

function Description() {
  return (
    <div>
      <h2 className="mainbar-main-heading">Description</h2>
      <div className="mainbar-main-line"></div>
      <div className="mainbar-box-para">
        <h2>
          Below shown are arithmetic operators supported by C language. Assume
          variable A holds 10 and variable B holds 20 then:
        </h2>
        <ul>
          <li>
            The preprocessor directive “include” and entry point "main" as well
            as the beginning brace is added as previous.
          </li>
          <li>
            Observing the main body of the program, initially two numbers are
            read from the keyboard and stored into local variable as num1 and
            num2.
          </li>
          <li>
            Addition, subtraction, multiplication, modulus, and division on the
            two numbers using the appropriate arithmetic operators are computed
            as given in Lines 8-11.
          </li>
          <li>
            The results of arithmetic operations are displayed on the screen
            given in Lines 12-15.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Description;
