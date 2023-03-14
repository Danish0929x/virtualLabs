import React from "react";

function Introduction() {
  return (
    <div>
      <h2 className="mainbar-main-heading">Introduction</h2>
      <div className="mainbar-main-line"></div>
      <p className="mainbar-para">
        In C Programming,<span className="special">Arithmetic operators</span>{" "}
        are used to perform arithmetic/ mathematical operations on operands. For
        example, the symbols "<i>+</i>" and "-" are used for addition and
        subtraction respectively, while "*" is used for multiplication of
        numbers and "/" is used to divide the numerical values. Lastly, "%" is
        used to find remainder after the two integer values have been divided,
        commonly known as "<span className="bold">modulo</span>" operator.
      </p>


    


      <div className="mainbar-box-para">
        <h2>
          Based on the number of operands, C Arithmetic operators can be of two
          types:
        </h2>
        <ol>
          <li>Binary Arithmetic Operators</li>
          <li>Unary Arithmetic Operators</li>
        </ol>
      </div>







      <h2 className="mainbar-h2">Binary Arithmetic Operators</h2>
      <p className="mainbar-para">
        The binary arithmetic operators operate or work on two operands. C
        provides 5 Binary Arithmetic Operators for performing arithmetic
        functions which are as follows:
      </p>
      <table className="mainbar-table">
        <tr>
          <th>Operator</th>
          <th>Name of the Operator</th>
          <th>Arithmetic Operation</th>
          <th>Syntax</th>
        </tr>
        <tr>
          <td>+</td>
          <td>Addition</td>
          <td>Add two operands. </td>
          <td>x + y</td>
        </tr>
        <tr>
          <td>- </td>
          <td>Subtraction</td>
          <td>Subtract the second operand from the first operand. </td>
          <td>x – y</td>
        </tr>

        <tr>
          <td>* </td>
          <td>Multiplication</td>
          <td>Multiply two operands.</td>
          <td>x * y</td>
        </tr>

        <tr>
          <td>/ </td>
          <td>Division</td>
          <td>Divide the first operand by the second operand. </td>
          <td>x / y</td>
        </tr>

        <tr>
          <td>% </td>
          <td>Modulus</td>
          <td>
            Calculate the remainder when the first operand is divided by the
            second operand.
          </td>
          <td>x % y</td>
        </tr>
      </table>






      <h2 className="mainbar-h2">Unary Arithmetic Operators</h2>
      <p className="mainbar-para">
      The unary arithmetic operators operate or work with a single operand. In C, we have two unary arithmetic operators which are as follows:
      </p>
      <table className="mainbar-table">
        <tr>
          <th>Operator</th>
          <th>Symbol</th>
          <th>Operation</th>
          <th>Implementation</th>
        </tr>
        <tr>
          <td>Decrement Operator</td>
          <td>—</td>
          <td>Decreases the integer value of the variable by one.	 </td>
          <td>–h or h–</td>
        </tr>
        <tr>
          <td>Increment Operator</td>
          <td>++</td>
          <td>Increases the integer value of the variable by one.	</td>
          <td>++h or h++</td>
        </tr>

      </table>




      <p className="mainbar-para">
        <span className="bold">Increment: </span>
        The ‘++’ operator is used to increment the value of an integer. When placed before the variable name (also called the pre-increment operator), its value is incremented instantly. For example, ++x. 
      </p>




      <p className="mainbar-para">
      And when it is placed after the variable name (also called post-increment operator), its value is preserved temporarily until the execution of this statement and it gets updated before the execution of the next statement. For example, x++.
      </p>




      <p className="mainbar-para">
        <span className="bold">Decrement: </span>
        The ‘ – – ‘ operator is used to decrement the value of an integer. When placed before the variable name (also called the pre-decrement operator), its value is decremented instantly. For example, – – x. 
      </p>




      <p className="mainbar-para">
        <span className="bold">Increment: </span>
        And when it is placed after the variable name (also called post-decrement operator), its value is preserved temporarily until the execution of this statement and it gets updated before the execution of the next statement. For example, x – –.
 
      </p>











    </div>
  );
}

export default Introduction;
