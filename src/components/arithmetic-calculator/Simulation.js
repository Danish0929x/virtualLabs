import React from "react";
import "./style.css";

function Simulation() {
    const inputElement = React.useRef();
    const inputElement2 = React.useRef();

    const [arr, setArr] = React.useState({sum: 0,diff: 0,prod: 0,div: 0,rem: 0})

    function handler(){
        let input1 = parseInt(inputElement.current.value);
        let input2 = parseInt(inputElement2.current.value);
        let sum = input1 + input2
        let diff = input1 - input2
        let prod = input1 * input2
        let div = input1 / input2
        let rem = input1 % input2

        setArr(prev => {
            return {
                sum: isNaN(sum) ? 0 : sum,
                diff: isNaN(diff) ? 0 : diff,
                prod: isNaN(prod) ? 0 : prod,
                div: isNaN(div) ? 0 : Math.round(div * 100) / 100,
                rem: isNaN(rem) ? 0 : Math.round(rem * 100) / 100
            }
        }
        )

    }


  return (
    <div>
      <h2 className="mainbar-main-heading">Simulation</h2>
      <div className="mainbar-main-line"></div>
      <div className="mainbar-box-para">
        <h2>Enter two number:</h2>
        <br />
        <div className="number">
          <input type="number" className="simu-number" ref={inputElement} onChange={handler}/>
          <input type="number" className="simu-number" ref={inputElement2} onChange={handler}/>
        </div>
      </div>

      <table className="mainbar-table">
        <tbody>

        <tr>
          <th>Result</th>
          <th>Value</th>
 
        </tr>
        <tr>
          <td>Sum</td>
          <td>{arr.sum}</td>

        </tr>
        <tr>
          <td>Difference </td>
          <td>{arr.diff}</td>
 
        </tr>

        <tr>
          <td>Product</td>
          <td>{arr.prod}</td>

        </tr>

        <tr>
          <td>Division</td>
          <td>{arr.div}</td>

        </tr>

        <tr>
          <td>Remainder</td>
          <td>{arr.rem}</td>

        </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Simulation;
