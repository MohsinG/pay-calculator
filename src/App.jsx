import { useState } from "react";
import { Header } from "./component/header";
import Heading from "./component/heading/Heading";
import IncomeContainer from "./component/incomecontainer/IncomeContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Header />
      <div className="flex justify-center flex-col mx-auto px-5">
        {" "}
        <Heading />
        <div className="container mx-auto">
          <h1 className="text-center p-5 text-blue-600">Tax Calculator</h1>
        <IncomeContainer></IncomeContainer>
        </div>
      </div>
    </>
  );
}

export default App;
