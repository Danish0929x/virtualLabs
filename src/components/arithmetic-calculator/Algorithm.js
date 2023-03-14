import React from "react";

function Algorithm() {
  return (
    <div>
      <h2 className="mainbar-main-heading">Algorithm</h2>
      <div className="mainbar-main-line"></div>
      <div className="mainbar-box-para">
        <h2>
          Algorithm
        </h2>
          <p>Step 0: Start</p>
          <p>Step 1: [Input the values of num1 and num2] Read num1,num2 </p>
          <p>Step 2: [Compute sum, difference, product and division] Sum=num1+num2 Difference=num1-num2 Product=num1*num2 Division=num1/num2 Remainder=num1%num2 </p>
          <p>Step 3: [Output sum, difference, product, division] Print Sum, Difference, Product, Division and Remainder Step 4:Stop</p>
      </div>

      <h2 className="mainbar-main-heading">Algorithm description</h2>
      <div className="mainbar-main-line"></div>
      <br />
      <p className="mainbar-para">In <span className="special">step 1</span> Read <i>num1</i>,<i>num2</i></p>
      <p className="mainbar-para">In <span className="special">step 2</span> computational tasks will be carried out by using formulas.
      <br /><i>Sum</i> = <i>num1</i>+<i>num2</i>
      <br />Difference = <i>num1</i>-<i>num2</i>
      <br />Product = <i>num1</i>*<i>num2</i>
      <br />Division = <i>num1</i>/<i>num2</i>
      <br />Remainder = <i>num1</i>%<i>num2</i></p>
      <p className="mainbar-para">In <span className="special">step 3</span> print the results for all computational tasks performed in the last step.</p>
      <p className="mainbar-para"><span className="special">step 4</span> is an end of the algorithm</p>
    </div>
  );
}

export default Algorithm;
