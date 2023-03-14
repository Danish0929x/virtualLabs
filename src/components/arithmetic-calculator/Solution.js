import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

function Solution() {
  const codeString = `#include <stdio.h>

    int main()
    {
        int num1, num2, sum, difference, product, remainder;
        float division;
        printf("Enter two numbers:\\n ");
        scanf("%d %d", &num1, &num2); 
    
        sum=num1 + num2; 
        difference=num1 - num2; 
        product=num1 * num2;
        division= num1/(float) num2;
        remainder = (int)num1%(int)num2;

        printf("Sum: %d\\n", sum);     /* Displays sum */
        printf("Difference: %d\\n", difference);     /* Displays Difference*/
        printf("Product: %d\\n", product);     /* Displays Product*/
        printf("Division : %f\\n", division);     /* Displays Division */
        printf("Remainder : %d\\n",remainder);     /* Displays Remainder */

            return 0;
        }`;
  return (
    <div>
      <h2 className="mainbar-main-heading">Solution</h2>
      <div className="mainbar-main-line"></div>
      <p className="mainbar-para"><span className="special">calculator.c</span></p>
      <SyntaxHighlighter
        language="c"
        style={atomOneDark}
        customStyle={{
          padding: "25px",
          margin: '40px 0px',
          borderRadius: '10px',
          maxWidth: "1025px",
        }}
        wrapLongLines={true}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}

export default Solution;
