import React from "react";

function Problem() {
  return (
    <div>
      <h2 className="mainbar-main-heading">Problem statement</h2>
      <div className="mainbar-main-line"></div>
      <p className="mainbar-para">
        <span className="bold">Calculator</span> allows you to easily handle all
        the calculations necessary for everyday life with a single application.
        Write a C program using switch statement to design a basic calculator
        that performs the basic operations such as addition, subtraction,
        multiplication and division.
      </p>

      <div className="mainbar-box-para">
        <h3>Input Type:</h3>
        <p>two float numbers num1 and num2</p>

        <h3>Output Type:</h3>
        <p>
          Their sum<br /> Their difference<br /> Their product<br /> Their division<br /> Their
          remainder
        </p>
      </div>




      <div className="mainbar-box-para">
        <h3>Sample Input 1:</h3>
        <p>2 3</p>

        <h3>Sample Output 1:</h3>
        <p>
        Sum : 5<br />
        Difference : -1<br />
        Product : 6<br />
        Division : 0.666667<br />
        Remainder: 2
        </p>
      </div>




      <div className="mainbar-box-para">
        <h3>Sample Input 2:</h3>
        <p>17 23</p>

        <h3>Sample Output 2:</h3>
        <p>
        Sum : 40<br />
        Difference : -6<br />
        Product : 391<br />
        Division : 0.739130<br />
        Remainder: 17
        </p>
      </div>













    </div>
  );
}

export default Problem;
