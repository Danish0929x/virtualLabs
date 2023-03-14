import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ArithmeticCalculatorIntroduction from "./components/arithmetic-calculator/Introduction";
import ArithmeticCalculatorProblem from "./components/arithmetic-calculator/Problem";
import ArithmeticCalculatorAlgorithm from "./components/arithmetic-calculator/Algorithm";
import ArithmeticCalculatorDescription from "./components/arithmetic-calculator/Description";
import ArithmeticCalculatorFlow from "./components/arithmetic-calculator/Flow";
import ArithmeticCalculatorSimulation from "./components/arithmetic-calculator/Simulation";
import ArithmeticCalculatorSolution from "./components/arithmetic-calculator/Solution";
import ArithmeticCalculatorResult from "./components/arithmetic-calculator/Result";
import ArithmeticCalculatorExercise from "./components/arithmetic-calculator/Exercise";
import "./index.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const location = window.location;
  let ha = location.pathname.split("/")[1];

  return (
    <div className="App">
      <Navbar />
      <Router>
        <div className="main">
          <div className="sidebar">
            <ul className="sidebar-links">
              <li>
                <Link to={ha + "/introduction"}>Introduction</Link>
                <i class="fas fa-chevron-right"></i>
                
              </li>
              <li>
                <Link to={ha + "/problem"}>Problem</Link>
                <i class="fas fa-chevron-right"></i>
                
              </li>
              <li>
                <Link to={ha + "/description"}>Description</Link>
                <i class="fas fa-chevron-right"></i>
                
              </li>
              <li>
                <Link to={ha + "/algorithm"}>Algorithm</Link>
                <i class="fas fa-chevron-right"></i>
                
              </li>

              <li>
                <Link to={ha + "/flow"}>Flow chart</Link>
                <i class="fas fa-chevron-right"></i>
                
              </li>
              <li>
                <Link to={ha + "/simulation"}>Simulation</Link>
                <i class="fas fa-chevron-right"></i>
                
              </li>
              <li>
                <Link to={ha + "/introduction"}>Workspace</Link>
                <i class="fas fa-chevron-right"></i>
                
              </li>
              <li>
                <Link to={ha + "/solution"}>Solution</Link>
                <i class="fas fa-chevron-right"></i>
                
              </li>
              <li>
                <Link to={ha + "/result"}>Results</Link>
                <i class="fas fa-chevron-right"></i>
                
              </li>
              <li>
                <Link to={ha + "/exercise"}>Exercise</Link>
                <i class="fas fa-chevron-right"></i>
                
              </li>
            </ul>
          </div>
          <div className="mainbar">
            <Routes>
              <Route
                exact
                path="/"
                element={<ArithmeticCalculatorIntroduction />}
              ></Route>
              <Route
                exact
                path="/arithmetic-calculator/introduction"
                element={<ArithmeticCalculatorIntroduction />}
              ></Route>
              <Route
                exact
                path="/arithmetic-calculator/problem"
                element={<ArithmeticCalculatorProblem />}
              ></Route>
              <Route
                exact
                path="/arithmetic-calculator/description"
                element={<ArithmeticCalculatorDescription />}
              ></Route>
              <Route
                exact
                path="/arithmetic-calculator/algorithm"
                element={<ArithmeticCalculatorAlgorithm />}
              ></Route>
              <Route
                exact
                path="/arithmetic-calculator/flow"
                element={<ArithmeticCalculatorFlow />}
              ></Route>
              <Route
                exact
                path="/arithmetic-calculator/simulation"
                element={<ArithmeticCalculatorSimulation />}
              ></Route>
              <Route
                exact
                path="/arithmetic-calculator/solution"
                element={<ArithmeticCalculatorSolution />}
              ></Route>
              <Route
                exact
                path="/arithmetic-calculator/result"
                element={<ArithmeticCalculatorResult />}
              ></Route>
              <Route
                exact
                path="/arithmetic-calculator/exercise"
                element={<ArithmeticCalculatorExercise />}
              ></Route>
            </Routes>
          </div>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
